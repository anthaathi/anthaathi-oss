import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/public.ts'),
      name: 'json-in-action-lib',
      fileName: (format) => `json-in-action-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        'baseui',
        'styletron-react',
        'styletron-engine-atomic',
        'react-jsx-runtime',
        'jotai',
        '@carbon/icons-react',
        'baseui/block',
        'baseui/button',
        'baseui/tooltip',
        'baseui/typography',
        'jotai/utils',
        'react-intl',
        '@anthaathi/form',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          baseui: 'Baseui',
        },
      },
    },
  },
});
