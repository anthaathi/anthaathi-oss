import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import SVGInjectPlugin from 'vite-plugin-svg-inject';
// @ts-ignore
import vercel from 'solid-start-vercel';
import analyze from 'rollup-plugin-analyzer';

export default defineConfig({
  plugins: [
    solid(
      process.env.VERCEL ? { ssr: true, adapter: vercel() } : { ssr: true },
    ),
    SVGInjectPlugin(),
  ],
  build: {
    target: ['chrome58'],
    rollupOptions: {
      plugins: [analyze() as never],
    },
  },
});
