module.exports = {
  lang: 'zh-CN',
  base: '/liuliblog/',
  title: '小理哥的小博客',
  description: '这是我的第一个 VuePress 站点',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端',
        link: '/front',
        children: [
           {
            text: 'html',
            link: '/html',
          },
          {
            text: 'js',
            link: '/js',
          },
          {
            text: 'css',
            link: '/css',
          },
        ]
      },
      {
        text: '后端',
        link: '/after',
        children: [
          {
            text: 'node',
            link: '/node',
          },
          {
            text: 'koa',
            link: '/koa',
          },
        ]
      }
    ],
  },
}