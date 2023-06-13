import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'goofish shop',
    footer: `Copyright © ${new Date().getFullYear()} Powered by  goofish-shop`,
    socialLinks: {
      github: 'https://github.com/goofish-shop'
    }
  },
  base: '/dumi-website/',
  publicPath: '/dumi-website/',
  analytics: {
    // Google Analytics 代码，配置后会启用
    ga: 'G-DTZSGLTWHW',
    // 百度统计代码，配置后会启用
  
  },
 
});
