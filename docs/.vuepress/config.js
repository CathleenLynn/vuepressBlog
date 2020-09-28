module.exports = {
    title: 'Lynn\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: 'https://baidu.com' },
        {text: '算法题库', link: 'https://baidu.com'},
        {text: '微博', link: 'https://baidu.com'},
        // 多项，下拉形式
        {
          text: '自定义1',
          items: [
            {text: 'aaa', link: 'https://baidu.com'},
          ]
        },
        {
          text: '自定义2',
          items: [
            {text: '111', link: 'https://baidu.com'},
            {text: '222', link: 'https://baidu.com'},
          ]
        },      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    }
  };