import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'derek-dumi',
  },
  styles: [
    `.dumi-default-header-left {
       width: 220px !important;
    }`,
  ],
});
