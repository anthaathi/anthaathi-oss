import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import SVGInjectPlugin from 'vite-plugin-svg-inject';
// @ts-ignore
import vercel from 'solid-start-vercel';

export default defineConfig({
  plugins: [solid({ ssr: true, adapter: vercel() }), SVGInjectPlugin()],
});
