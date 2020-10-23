(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{517:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"全局安装vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局安装vuepress"}},[s._v("#")]),s._v(" 全局安装VuePress")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install -g vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"创建项目文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建项目文件夹"}},[s._v("#")]),s._v(" 创建项目文件夹")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir vuepreeeBlogDemo\ncd vuepreeeBlogDemo\nnpm init -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("blockquote",[n("p",[s._v("新建文件，构成目录结构如下：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vuepressBlogDemo\n├─── docs\n│   ├── README.md\n│   └── .vuepress\n│       ├── public\n│       └── config.js\n└── package.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"文件内容编写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件内容编写"}},[s._v("#")]),s._v(" 文件内容编写")]),s._v(" "),n("blockquote",[n("p",[s._v("config.js:")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Lynn\\'s blog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我的个人网站'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  head"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入到当前页面的 HTML <head> 中的标签")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/logo.jpg'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加一个自定义的 favicon(网页标签的图标)")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  base"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是部署到github相关的配置")]),s._v("\n  markdown"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lineNumbers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码块显示行号")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导航栏配置")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端基础'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/accumulate/'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'算法题库'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/algorithm/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'微博'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://baidu.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("      \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sidebar"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏配置")]),s._v("\n    sidebarDepth"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏显示2级")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("==图片存放在docs/.vuepress/public/logo.jpg下，直接使用‘/’可以引入==")]),s._v(" "),n("blockquote",[n("p",[s._v("package.json:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\x3c!--添加：--\x3e\n"scripts": {\n  "dev": "vuepress dev docs",\n  "build": "vuepress build docs"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"部署上线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署上线"}},[s._v("#")]),s._v(" 部署上线")]),s._v(" "),n("ul",[n("li",[s._v("方式1：买个服务器，阿里云，腾讯云。。。")]),s._v(" "),n("li",[s._v("方式2：Github Pages：Github 提供的、用于搭建个人网站的静态站点托管服务。")])]),s._v(" "),n("h3",{attrs:{id:"新建仓库一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库一"}},[s._v("#")]),s._v(" 新建仓库一")]),s._v(" "),n("p",[s._v("USERNAME.github.io")]),s._v(" "),n("ul",[n("li",[s._v("USERNAME 应该为github账户的用户名")]),s._v(" "),n("li",[s._v("不用克隆到本地")])]),s._v(" "),n("h3",{attrs:{id:"新建仓库二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库二"}},[s._v("#")]),s._v(" 新建仓库二")]),s._v(" "),n("ul",[n("li",[s._v("自定义名称")]),s._v(" "),n("li",[s._v("克隆到本地")]),s._v(" "),n("li",[s._v("此仓库是用来开发博客，以后只需更改这个项目")])]),s._v(" "),n("ol",[n("li",[s._v("新建deploy.sh文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.yourwebsite.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果你想要部署到 https://USERNAME.github.io\ngit push -f git@github.com:CathleenLynn/CathleenLynn.github.io.git master\n\n# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目\n# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages\n\ncd -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("修改USERNAME")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 如果你想要部署到 https://USERNAME.github.io\ngit push -f git@github.com:CathleenLynn/CathleenLynn.github.io.git master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一。")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("在package.json中添加：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"scripts": {\n  "deploy": "bash deploy.sh"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"关联两个仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关联两个仓库"}},[s._v("#")]),s._v(" 关联两个仓库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run deploy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"发布到自己的域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布到自己的域名"}},[s._v("#")]),s._v(" 发布到自己的域名")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.域名解析\n\n2.在github仓库一USERNAME.github.io 中找到 \nSettings > Custom domain \n把域名填进去save即可\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"美化-添加插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#美化-添加插件"}},[s._v("#")]),s._v(" 美化-添加插件")]),s._v(" "),n("p",[s._v("参考：")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/glassysky/p/13387739.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress博客美化之reco主题考"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/howareyou2104/article/details/107412555",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress reco主题优化与修改"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v(".vuepress/config.js中：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("plugins:[...添加内容...]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_1-看板娘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-看板娘"}},[s._v("#")]),s._v(" 1.看板娘")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save\n      \"@vuepress-reco/vuepress-plugin-kan-ban-niang\",\n      {\n        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],\n        clean: false,\n        messages: {\n          welcome: '我是lookroot欢迎你的关注 ',\n          home: '心里的花，我想要带你回家。',\n          theme: '好吧，希望你能喜欢我的其他小伙伴。',\n          close: '再见哦'\n        },\n        width: 240,\n        height: 352\n      }\n    ],\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_2-彩带背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-彩带背景"}},[s._v("#")]),s._v(" 2.彩带背景")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save\n      "ribbon",\n      {\n        size: 90,     // width of the ribbon, default: 90\n        opacity: 0.8, // opacity of the ribbon, default: 0.3\n        zIndex: -1    // z-index property of the background, default: -1\n      }\n    ],\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_3-鼠标点击特效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-鼠标点击特效"}},[s._v("#")]),s._v(" 3.鼠标点击特效")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save\n      \"cursor-effects\",\n      {\n        size: 3,                    // size of the particle, default: 2\n        shape: ['circle'],  // shape of the particle, default: 'star'\n        zIndex: 999999999           // z-index property of the canvas, default: 999999999\n      }\n    ],\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_4-动态标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-动态标题"}},[s._v("#")]),s._v(" 4.动态标题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save\n      "dynamic-title",\n      {\n        showIcon: "/logo.png",\n        showText: "(/≧▽≦/)你来啦！",\n        hideIcon: "/failure.ico",\n        hideText: "(●—●)喔哟，崩溃啦！",\n        recoverTime: 2000\n      }\n    ],\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_5-音乐播放器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-音乐播放器"}},[s._v("#")]),s._v(" 5.音乐播放器")]),s._v(" "),n("p",[n("strong",[s._v("3种音乐插件：")])]),s._v(" "),n("ol",[n("li",[s._v("bgm-player，一款简洁易用的音乐插件，优势是好看，其他一无是处了")]),s._v(" "),n("li",[s._v("music-bar，一个程序猿自己开发的插件，除本地，网络音频之外还支持从平台歌单获取链接(目前仅支持网易云音乐)，缺点是丑了点，支持一下这位老哥")]),s._v(" "),n("li",[s._v("meting，在hexo上就一直用的插件，功能强大，配置丰富，目前应该最大强大的音乐插件了，我用的就是这个，强推，还支持在markdown中直接插入")])]),s._v(" "),n("blockquote",[n("p",[s._v("安装：yarn add vuepress-plugin-meting")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\'meting\', {\n      // metingApi: "https://meting.sigure.xyz/api/music",\n      meting: {\n        // 网易\n        server: "netease",\n        // 读取歌单\n        type: "playlist",\n        mid: "13529775",\n      },          \n      // 不配置该项的话不会出现全局播放器\n      aplayer: {\n        // 吸底模式\n        fixed: true,\n        mini: true,\n        // 自动播放\n        autoplay: true,\n        // 歌曲栏折叠\n        listFolded:true,\n        // 颜色\n        theme: \'#f9bcdd\',\n        // 播放顺序为随机\n        order: \'random\',\n        // 初始音量\n        volume: 0.1,\n        // 关闭歌词显示\n        lrcType: 0\n      },\n      mobile :{\n        // 手机端去掉cover图\n        cover: false,\n      }\n    }]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("blockquote",[n("p",[s._v("其中type和mid是音乐来源")])]),s._v(" "),n("h3",{attrs:{id:"_6-图片放大"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-图片放大"}},[s._v("#")]),s._v(" 6.图片放大")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n      //图片放大插件 先安装在配置， npm install @vuepress\\plugin-medium-zoom --save\n      '@vuepress\\plugin-medium-zoom', {\n        selector: '.page img',\n        delay: 1000,\n        options: {\n          margin: 24,\n          background: 'rgba(25,18,25,0.9)',\n          scrollOffset: 40\n        }\n      }\n    ]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_7-复制代码弹窗插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-复制代码弹窗插件"}},[s._v("#")]),s._v(" 7.复制代码弹窗插件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('["vuepress-plugin-nuggets-style-copy", {\n      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save\n      tip: {\n        content: "复制成功!"\n      }\n    }]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_8-评论插件与改进"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-评论插件与改进"}},[s._v("#")]),s._v(" 8.评论插件与改进")]),s._v(" "),n("p",[s._v("刚开始采用的评论插件vuepress-plugin-comment：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n    'vuepress-plugin-comment',   //评论插件，写在这里样式丑\n    {\n        choosen: 'valine', \n        // options选项中的所有参数，会传给Valine的配置 \n        options: {\n            el: '#valine-vuepress-comment',\n            appId: '***',\n            appKey: '***'\n        }\n    }\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("但是写在插件中，页面很丑。")]),s._v(" "),n("p",[s._v("后来参考官网（https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html）")]),s._v(" "),n("p",[s._v("主题内置评论插件 @vuepress-reco/vuepress-plugin-comments，可以根据自己的喜好选择"),n("strong",[s._v("Valine")]),s._v("或者"),n("strong",[s._v("Vssue")])]),s._v(" "),n("p",[s._v("在这里我选择了Valine:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    valineConfig: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }  \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("其中appId、appKey是需要在leancloud注册获取的。\n评论的头像可以在gravatar里设置。")]),s._v(" "),n("p",[s._v("最后就是这样子的：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/something/comment.png",alt:"An image"}})]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("但是，加入插件后，页面加载速度超级慢")]),s._v(" "),n("p",[s._v("vercel就登场啦")])]),s._v(" "),n("h2",{attrs:{id:"vercel的加入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vercel的加入"}},[s._v("#")]),s._v(" vercel的加入")]),s._v(" "),n("p",[s._v("参考：https://blog.csdn.net/qq_19363379/article/details/108119140")]),s._v(" "),n("h3",{attrs:{id:"_1-注册vercel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册vercel"}},[s._v("#")]),s._v(" 1.注册vercel")]),s._v(" "),n("p",[s._v("可以直接用github账号登录vercel，如下图：\n"),n("img",{attrs:{src:"/something/vercel11.png",alt:"An image"}})]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("注意：")]),s._v(" "),n("p",[s._v("vercel不支持QQ邮箱。由于我的github是用QQ邮箱的，所以在Github-Setting -> Emails里添加了新的邮箱并进行主邮箱的更换。")]),s._v(" "),n("p",[s._v("之后就可以直接登录vercel啦")])]),s._v(" "),n("h3",{attrs:{id:"_2-引入仓库与项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入仓库与项目"}},[s._v("#")]),s._v(" 2.引入仓库与项目")]),s._v(" "),n("p",[s._v("选择github后，输入用来存放网站的GitHub Repo的地址，\n"),n("img",{attrs:{src:"/something/vercel22.png",alt:"An image"}})]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("Repository的URL是github仓库的https地址，不要弄错")])]),s._v(" "),n("p",[s._v("然后点Continue，他会让你选择包含source code的文件：\n"),n("img",{attrs:{src:"/something/vercel1.png",alt:"An image"}}),s._v(" "),n("img",{attrs:{src:"/something/vercel2.png",alt:"An image"}})]),s._v(" "),n("p",[s._v("（PS：如果是第一次使用Vercel的话，上面两步里会弹出在GitHub中安装vercel的许可，同意即可）")]),s._v(" "),n("p",[n("img",{attrs:{src:"/something/vercel3.png",alt:"An image"}})]),s._v(" "),n("h3",{attrs:{id:"_3-配置自定义域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置自定义域名"}},[s._v("#")]),s._v(" 3.配置自定义域名")])])}),[],!1,null,null,null);a.default=e.exports}}]);