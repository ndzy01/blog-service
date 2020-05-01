const nav = require('./nav')
const sidebar = require('./sidebar')
module.exports = {
  title: '笔记',
  description: '笔记',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/public/2020-4-11-20-50-7-32x32.ico',
      },
    ], // 图标
  ],
  base: '/', // 网站根目录
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav,
    sidebar,
  },
}
