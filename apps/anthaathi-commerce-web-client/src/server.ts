import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const isProd = process.env.NODE_ENV === 'production';

      if (isProd) {
        render(res, isProd);
      } else {
        res.write(
          await vite.transformIndexHtml(
            req.url,
            await render(res, isProd),
            req.originalUrl,
          ),
        );
        res.end();
      }
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e as never);
      next(e);
    }
  });

  const port = +(process.env.PORT || 3000);

  app.listen(port);
}

createServer();
