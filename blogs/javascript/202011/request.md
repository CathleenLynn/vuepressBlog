---
title: 前端请求方式的历程
date: 2020-11-02
tags:
 -  ajax
 -  axios
categories:
 -  JavaScript
author:
 -  言梧
---


## 1.原生ajax_ Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）
> XMLHttpRequest是最早出现的与服务器交换数据的方案，有了XMLHttpRequest，开发者终于可以在不重新加载页面的情况下更新网页，可以在页面加载后请求接受以及发送数据。而所有浏览器均可以获取XMLHttpRequest对象：

### new XMLHttpRequest对象
```js
//获取xhr对象
var xhr = new XMLHttpRequest()
```
:::danger
但是XMLHttpRequest是个比较粗燥的底层对象，各个浏览器对其的创建方法也不同，以下是兼容方法：
:::

### 兼容
```js
//兼容各个浏览器
var xhr;
if (window.XMLHttpRequest) { // Mozilla, Safari...
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
 try {
    xhr = new ActiveXObject('Msxml2.XMLHTTP');
 } catch (e) {
 try {
      xhr = new ActiveXObject('Microsoft.XMLHTTP'); //IE5,6
 } catch (e) {}
 }
}
```
### get请求:
```js
//get请求
xhr.open("GET","test1.txt",true);
xhr.send();
```

### post请求：

```js
//完整的post请求代码
var xhr;
if (window.XMLHttpRequest) { // Mozilla, Safari...
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
 try {
    xhr = new ActiveXObject('Msxml2.XMLHTTP');
 } catch (e) {
 try {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
 } catch (e) {}
 }
}
if (xhr) {
  xhr.onreadystatechange = onReadyStateChange;
  xhr.open('POST', '/api', true);
 // 设置 Content-Type 为 application/x-www-form-urlencoded
 // 以表单的形式传递数据
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('username=admin&password=root');
}
```
### onreadystatechange 方法

```js
function onReadyStateChange() {
 // 该函数会被调用四次
 if (xhr.readyState === 4 &&xhr.status === 200) {
    console.log('执行成功');
 } else {
    console.log('执行出错');
 }
}
```



## 2.ajax的jQuery写法
```js
$.ajax({ //标准写法
   type: 'POST',
   url: url,
   data: data,
   dataType: 'json',
   success: function () {},
   error: function () {}
});

$.get(url,function(){}); //get请求

$.post(url,body,function(){}); //post请求

$.getJSON(url,function(){}); //get请求从服务器加载Json编码
```

优点 | 缺点
---|---
对原生XHR的封装 | 整个Jquery太大，引入成本过高
针对MVC的编程 | 不符合MVVM
完美的兼容性 | 异步模型不够现代，不支持链式，代码可读性差
支持jsonp | 



## 3.fetch
> fetch其实是一个新世界，脱离的XHR，完全是基于Promise的异步处理机制，使用起来会比起ajax更加简单。

```js
fetch(url).then(function(response) {
 return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.log("Oops, error");
});
```
在使用ES6的箭头函数后
```js
fetch(url).then(response => response.json())
 .then(data => console.log(data))
 .catch(e => console.log("Oops, error", e))
```
优点：
- 更加底层，提供的API丰富（request, response）
- 语法简单，脱离了XHR，基于ES新的Promise设计
:::danger
但是请了解，fetch本身是一个 low-level 的 API，它注定不会像你习惯的 $.ajax 或是 axios 等库帮你封装各种各样的功能或实现。
:::
缺点：
- 兼容性比较凄惨，低级别浏览器均不支持，需要实现fetch的polyfill了。
```
思路其实很简单，就是判断浏览器是否支持原生的fetch，不支持的话，就仍然使用XMLHttpRequest的方式实现，同时结合Promise来进行封装。常见的polyfill就有：es6-promise,babel-polyfill,fetch-ie8等
```

- 不支持jsonp，可以引入fetch-jsonp
```
//安装
npm install fetch-jsonp --save-dev

//使用
fetchJsonp(url, {
  timeout: 3000,
  jsonpCallback: 'callback'
}).then(function(response) {
  console.log(response.json());
}).catch(function(e) {
  console.log(e)
});
```

- 没有拦截器，需要额外再封装一层或者fetch-interceptor
```js
fetch(url,{
  credentials: 'include' 
  //include表示cookie既可同域，也可跨域，‘same-origin’表示只可同域
});
```

- 默认不带cookie，需要添加配置
```
可以用Promise.race()实现，Promise.race(iterable) 方法返回一个Promise对象，
只要 iterable 中任意一个Promise 被 resolve 或者 reject 后，
外部的Promise 就会以相同的值被 resolve 或者 reject。
```

- 没有abort，不支持timeout超时处理
```
可以用Promise.race()实现，Promise.race(iterable) 方法返回一个Promise对象，
只要 iterable 中任意一个Promise 被 resolve 或者 reject 后，
外部的Promise 就会以相同的值被 resolve 或者 reject。
```

- 无法获取progress状态
```
fetch中的Response.body 中实现了getReader()方法用于读取原始字节流,
该字节流可以循环读取。
参考javascript - Progress indicators for fetch? - Stack Overflow2016 - the year of web streams
```

## 4.Vue-resource
特点：
- 体积小

vue-resource非常小巧，在压缩以后只有大约12KB，服务端启用gzip压缩后只有4.5KB大小，这远比jQuery的体积要小得多。

- 支持主流的浏览器

和Vue.js一样，vue-resource除了不支持IE 9以下的浏览器，其他主流的浏览器都支持。

- 支持Promise API和URI Templates

Promise是ES6的特性，Promise的中文含义为“先知”，Promise对象用于异步计算。
URI Templates表示URI模板，有些类似于ASP.NET MVC的路由模板。

- 支持拦截器

拦截器是全局的，拦截器可以在请求发送前和发送请求后做一些处理。
拦截器在一些场景下会非常有用，比如请求发送前在headers中设置access_token，或者在请求失败时，提供共通的处理方式。


:::danger
vue更新到2.0之后,作者就宣告不再对vue-resource更新,而是推荐的axios。
:::

## 5.axios
> vue-axios 是在axios基础上扩展的插件，在Vue.prototype原型上扩展了$http等属性，可以更加方便的使用axios，使用vue-axios更多是为了符合规范，并且方便协作吧。

> Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

-  从浏览器中创建 XMLHttpRequests
-  从 node.js 创建 http 请求
-  支持 Promise API
-  拦截请求和响应
-  转换请求数据和响应数据
-  可取消请求
-  自动转换 JSON 数据
-  客户端支持防御 XSRF

### axios安装
npm:
```
$ npm install axios
```

bower:
```
$ bower install axios
```

cdn
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### axios-get请求
```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
上面的请求可以这样做
```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### axios-post请求
```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
执行多个并发请求
```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

### axios API
> 可以通过向 axios 传递相关配置来创建请求

#### axios(url[, config])——发送 GET 请求（默认的方法）
```js
axios('/user/12345');
```


#### axios(config)——发送 POST 请求
```js
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```
> 为方便起见，为所有支持的请求方法提供了别名

```js
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```


## 如何选择
1. 首先可以肯定的是，如果你的代码依旧是基于Jquery，那毫无疑问，ajax就是你最好的选择。
2. 如果你使用的是任意MVVM框架，建议无脑使用axios，fetch在实际项目使用中，需要各种的封装和异常处理，并非开箱即用，而axios可以做到直接替换$.ajax。
3. 如果就是要使用fetch，那相信你也一定能封装成自己的一套最佳实践。




