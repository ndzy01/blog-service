module.exports = {
  title: '前端笔记',
  description: '前端笔记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 图标
  ],
  base: '/', // 网站根目录
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: 'html', link: '/html/' }, // 内部链接 以docs为根目录
      { text: 'css', link: '/css/' }
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/html/': [
        '/html/', // accumulate文件夹的README.md 不是下拉框形式
        '/html/a', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '01',
          children: [
            '/html/01/a' // 以docs为根目录来查找文件
          ]
        }
      ],
      '/css/': [
        '/css/',
        {
          title: '01-布局',
          children: [
            '/css/01-布局/水平居中' // 以docs为根目录来查找文件
          ]
        }
      ]
    }
  }
}
