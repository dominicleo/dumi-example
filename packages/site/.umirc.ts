import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    components: path.resolve('packages/components/src/index.ts')
  },
  resolve: {
    includes: ['docs', '../components'],
  },
  // more config: https://d.umijs.org/config
});
