module.exports = {
  "title": "Lynn\'s blog",
  "description": "天大地大，世界比你想象中朦胧",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/base/icon.jpg"      //Tab标签页的图标
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    mode: 'auto',
    valineConfig: {
      appId: 'nYjd8Yvlpocb9j7EQjwryiHs-gzGzoHsz',
      appKey: '8tGB5X0Fql51mkjg1CPglUo5'
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-document",
        "items": [
          {
            "text": "Vue",
            "link": "https://cn.vuejs.org/v2/guide/"
          },
          {
            "text": "Vue-CLI",
            "link": "https://cli.vuejs.org/zh/guide/"
          },
          {
            "text": "Vue-Loader",
            "link": "https://vue-loader.vuejs.org/zh/"
          },
          {
            "text": "Vue-Router",
            "link": "https://router.vuejs.org/zh/"
          },
          {
            "text": "Vuex",
            "link": "https://vuex.vuejs.org/zh/"
          },
          {
            "text": "vuepress-reco",
            "link": "https://vuepress-theme-reco.recoluan.com/views/1.x/"
          },
          {
            "text": "axios",
            "link": "http://www.axios-js.com/zh-cn/docs/"
          },
          {
            "text": "现代JavaScript教程",
            "link": "https://zh.javascript.info/"
          },
          {
            "text": "Element-Ui",
            "link": "https://element.eleme.cn/#/zh-CN"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/CathleenLynn",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "subSidebar": 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "王叨叨",
        "desc": "日照香炉生紫烟，遥看瀑布挂前川",
        // "email": "1156743527@qq.com",
        "link": "https://wangdaodao.com/"
      },
      {
        "title": "Sweny",
        "desc": "May your choices reflect your hopes, not your fears.",
        "email": "1562519887@qq.com",
        "link": "https://www.sunwenyue.top/"
      },
      {
        "title": "王金山",
        "desc": "Good Good Study，Day Day Up！！！",
        // "email": "1156743527@qq.com",
        "link": "https://www.wangjinshan.top/"
      },
      {
        "title": "赵十二",
        "desc": "努力奋进的赵十二",
        "email": "zhaoshiermy@sina.com",
        "link": "https://zhaoshier.top/"
      },
      {
        "title": "Spring",
        "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        "link": "https://springlych.github.io"
      },
      {
        "title": "木华",
        "desc": "有木名凌霄，擢秀非孤标",
        // "email": "1156743527@qq.com",
        "link": "http://zhanghualin.com/"
      },
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/base/icon.jpg",      //博客左上角的图标
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Lynn",
    "authorAvatar": "/base/logo.png",      //个人资料的头像
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [//看板娘，先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['wanko', 'whiteCat', 'blackCat'],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
    [// 彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [//鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        //shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [//动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/logo.png",
        showText: "(/≧▽≦/)你来啦！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [//音乐插件
      'meting', {
      // metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        // 网易
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "5289086328",
      },          
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: false,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        // theme: '#2980b9',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 3
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }],
    [//复制代码
      "vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
    // [
    //   'vuepress-plugin-comment',    //评论插件，写在这里样式丑
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'nYjd8Yvlpocb9j7EQjwryiHs-gzGzoHsz',
    //       appKey: '8tGB5X0Fql51mkjg1CPglUo5'
    //     }
    //   }
    // ]
    // [
    //   //先安装在配置， npm install @vuepress-plugin-meting --save
    //   'meting', {
    //     metingApi: "https://api.i-meto.com/meting/api",
    //     meting: {
    //       server: "netease",
    //       type: "playlist",
    //       mid: "621465725"
    //     },          // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       lrcType: 3
    //     }
    //   }
    // ]
  ]
}


