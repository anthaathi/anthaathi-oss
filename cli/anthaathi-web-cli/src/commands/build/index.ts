import { Command, Flags } from '@oclif/core';
import { build } from 'vite';
import react from '@vitejs/plugin-react';

export default class Build extends Command {
  static description = 'Say hello';

  static examples = [`$ acli build --config config.json`];

  static flags = {
    config: Flags.string({
      char: 'c',
      description: 'Configuration file',
      required: false,
    }),
  };

  static args = [];

  async run(): Promise<void> {
    await this.parse(Build);

    await build({
      plugins: [react()],
      build: {
        rollupOptions: {
          input: {

          }
        }
      }
    });
  }
}
