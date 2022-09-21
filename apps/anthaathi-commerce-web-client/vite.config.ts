import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// @ts-ignore
import SVGInjectPlugin from 'vite-plugin-svg-inject';

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true,
      solid: { hydratable: true, generate: 'ssr' },
      hot: false,
    }),
    SVGInjectPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    ssr: true,
  },
});
