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
        {text: '主页', link: '/' },
        {text: '自定义', link: '/wait/'},
        {text: '百度', link: 'https://baidu.com'},
        // 多项，下拉形式
        {
          text: '前端基础',
          items: [
            {text: 'JavaScript', link: '/javascript/'},
            {text: 'CSS', link: '/css/'},
            {text: 'aaa', link: 'https://baidu.com'},
          ]
        },
        {
          text: 'VUE',
          items: [
            {text: '111', link: 'https://baidu.com'},
            {text: '222', link: 'https://baidu.com'},
            {text: '333', link: 'https://baidu.com'},
            {text: '444', link: 'https://baidu.com'},
          ]
        },      
      ],
      sidebar: {
        '/javascript/': [
          {
            title: 'JavaScript',
            collapsable: false,
            children: [
              { title: '函数声明', path: '/javascript/' },
              { title: '数组方法', path: '/javascript/array' },
              { title: 'test', path: '/javascript/test' },
            ]
          }
        ],

        '/css/': [
          {
            title: 'CSS',
            collapsable: true,
            children: [
              { title: 'css1', path: '/css/' },
              { title: 'css2', path: '/css/test2' },
              { title: 'css3', path: '/css/test3' },
            ]
          }
        ]
      },
      sidebarDepth: 2, //左侧导航显示的层级
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    }
  };