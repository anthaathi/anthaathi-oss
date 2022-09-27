import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import SVGInjectPlugin from 'vite-plugin-svg-inject';

export default defineConfig({
  plugins: [solid({ ssr: true }), SVGInjectPlugin()],
});
