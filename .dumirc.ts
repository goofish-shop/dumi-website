import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'dumi-website',
    footer: 'goofish-shop',
    socialLinks: {
      github: 'https://github.com/goofish-shop'
    }
  },
  base: '/dumi-website/',
  publicPath: '/dumi-website/'
});
