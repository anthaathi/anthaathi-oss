import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import process from 'process';
import { ViteDevServer } from 'vite';
import crypto from 'crypto';
import type { FilledContext } from 'react-helmet-async';
import type { Sheet } from 'styletron-engine-atomic';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

export async function createServer(
    root: string = process.cwd(),
    isProd: boolean = process.env.NODE_ENV === 'production',
    hmrPort?: number,
) {
    const resolve = (p: string) => path.resolve(__dirname, p);

    const indexProd = isProd
        ? fs
            .readFileSync(resolve('client/index.html'), 'utf-8')
            .replace(/>\s+</g, '><')
        : '';

    const app = express();

    app.disable('x-powered-by');

    let vite: ViteDevServer;
    if (!isProd) {
        vite = await (
            await import('vite')
        ).createServer({
            root,
            logLevel: isTest ? 'error' : 'info',
            server: {
                middlewareMode: 'ssr',
                watch: {
                    // During tests we edit the files too fast and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100,
                },
                hmr: {
                    port: hmrPort,
                },
            },
        });
        // use vite's connect instance as middleware
        app.use(vite.middlewares);
    } else {
        app.use((await import('compression')).default());
        app.use(
            (await import('serve-static')).default(resolve('dist/client'), {
                index: false,
            }),
        );
    }

    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl;
            const nonce = crypto.randomBytes(16).toString('base64');

            let template,
                render: (
                    url: string,
                    context: Record<string, any>,
                ) => { html: string; stylesheets: Sheet[] };
            if (!isProd) {
                // always read fresh template in dev
                template = fs
                    .readFileSync(resolve('../index.html'), 'utf-8')
                    .replace(/>\s+</g, '><');
                template = await vite.transformIndexHtml(url, template);

                render = (await vite.ssrLoadModule('/src/entry-server')).render;
            } else {
                template = indexProd;
                // @ts-ignore
                render = (await import('./server/entry-server')).render;
            }

            const context: FilledContext & Record<string, string> = {
                nonce,
            } as never;
            const appHtml = render(url, context);

            if (context.url) {
                // Somewhere a `<Redirect>` was rendered
                return res.redirect(301, context.url);
            }

            const { helmet } = context;

            const csp =
                `script-src ${ isProd ? `'strict-dynamic' 'nonce-{random}' 'unsafe-inline'` : `'self' 'unsafe-inline'` } http: https:;
object-src 'none';
style-src 'nonce-{random}';
base-uri 'none';
require-trusted-types-for 'script';`
                    .replaceAll('{random}', nonce)
                    .replaceAll('\n', ' ');

            const styletronCSS = appHtml.stylesheets.map((style) => {
                const attributes = Object.entries(style.attrs)
                    .map(([key, value]) => {
                        return `${key}="${value}"`;
                    })
                    .join(' ');
                return `<style class="_styletron_hydrate_" nonce="${nonce}" ${attributes}>${style.css}</style>`;
            });

            const head = `${helmet.title}${helmet.priority}${helmet.meta}${helmet.link}${helmet.script}${helmet.style}${styletronCSS}`;

            const html = template
                .replace(`{{app_html_attributes}}`, helmet.htmlAttributes.toString())
                .replace('{{app_head}}', head)
                .replace('{{app_html_attributes}}', helmet.htmlAttributes.toString())
                .replace('{{body_attributes}}', helmet.bodyAttributes.toString())
                .replace('{{no_script}}', helmet.noscript.toString())
                .replace('{{app_html}}', appHtml.html)
                .replaceAll('{{nonce}}', nonce);

            res
                .status(200)
                .set({ 'Content-Type': 'text/html', 'Content-Security-Policy': csp })
                .end(html);
        } catch (e: any) {
            !isProd && vite.ssrFixStacktrace(e);
            console.error(e.stack);
            res.status(500).end(e.stack);
        }
    });

    // @ts-ignore
    return { app, vite };
}

if (!isTest) {
    createServer().then(({ app }) =>
        app.listen(+(process.env.PORT || 3000), () => {
            console.log('http://localhost:3000');
        }),
    );
}
