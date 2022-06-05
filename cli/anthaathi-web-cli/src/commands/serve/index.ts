import { Command, Flags } from '@oclif/core';
import * as path from 'path';
import type { Application as ExpressApp } from 'express';
import * as express from 'express';
import * as process from 'process';
import helmet from 'helmet';
import * as crypto from 'crypto';
import type { ViteDevServer } from 'vite';

export default class Serve extends Command {
  static description = 'Say hello';

  static examples = [`$ acli serve --config config.json`];

  static flags = {
    config: Flags.string({
      char: 'c',
      description: 'Configuration file',
      required: false,
    }),
    dev: Flags.boolean({
      description: 'is it is dev',
    }),
    test: Flags.boolean({
      exclusive: ['dev'],
    }),
    port: Flags.integer({
      default: process.env.PORT ? +process.env.PORT : 3000,
    }),
    hmrPort: Flags.integer({
      default: undefined,
    }),
  };

  static args = [];

  async run(): Promise<void> {
    const { flags } = await this.parse(Serve);

    let server: ExpressApp;

    const template: () => string = () => {
      return '';
    };

    const cspTemplate: () => string = () => {
      const nonce = Serve.nonce;

      return '';
    };

    if (flags.dev) {
      server = await this.server();
      const vite = await this.createVite({
        isTest: flags.test,
        hmrPort: flags.hmrPort,
      });
      server.use(vite.middlewares);
      await this.handler(server, {
        vite,
        template,
        cspTemplate,
      });
    } else {
      server = await this.server();
      await this.productionConfiguration(server);
      await this.handler(server, { template, cspTemplate });
    }

    server.listen(flags.port, () => {
      console.log(`Server is running at http://localhost:${flags.port}`);
    });
  }

  async handler(
    app: ExpressApp,
    options: {
      template: () => string;
      vite?: ViteDevServer;
      cspTemplate: () => string;
    }
  ) {
    app.get('*', (res, req, next) => {
      const csp = options.cspTemplate();
      const template = options.template();

      req.setHeader('Content-Security-Policy', csp);

    });
  }

  static get nonce() {
    return crypto.randomBytes(16).toString('base64');
  }

  async server() {
    const app = express();
    app.disable('x-powered-by');
    return app;
  }

  async productionConfiguration(app: ExpressApp) {
    app.use(await import('compression'));
    app.use(
      (await import('serve-static'))(path.resolve(__dirname, 'dist/client'), {
        index: false,
      })
    );
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
  }

  async createVite({ isTest, hmrPort }: { isTest: boolean; hmrPort?: number }) {
    const cwd = process.cwd();

    return await (
      await import('vite')
    ).createServer({
      root: cwd,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests, we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
    });
  }
}
