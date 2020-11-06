---
title: innerHTML、innerText、value的区别
date: 2020-10-24
tags:
 -  javascript
 -  innerHTML
categories:
 -  JavaScript
author:
 -  言梧
---


## 1.三者具体用法

- **innerHTML** 识别标签, 获取双标签内的内容, 包含内容里的嵌套标签 [高版本的浏览器会将格式原样打印];
- **innerText** 不识别标签,  在获取标签内容时去除所有标签
- **value** 获取标签的value属性值



## 2.demo1


```html
<select name="" id="sel">
    <option value="111">选项1</option>
    <option value="222" selected>选项2</option>
    <option value="333">选项3</option>
</select>
```
如下图：

三个textarea中分别为：sel.innerHTML、sel.innerText、sel.value


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/innerHTML1.png)





## 3.demo2

```html
<div id="outter">
      外部内容
      <div id="inner">
        中间内容
        <span>内部文字<input type="text" value="输入" /></span>
      </div>
    </div>
```
如下图：

三个textarea中分别为：outter.innerHTML、outter.innerText、outter.value

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/innerHTML2.png)

!!!!!!!!  textarea  用  innerText取不到





## 4.demo3

最近遇到一个问题：获取textarea中的内容进行下载时，使用innerText获取不到值，下载的文件大小为0kb。

```js
var inValue = document.querySelector("#after").innerText; 
//value可以，innerHTML可以，innerText不行文件0kb
```
很是疑惑，打翻了之前的认识，再来加点理解内容：

简单地设置一个textarea，其中有初始化字样：
```html
<textarea name="" id="textareaTest" cols="30" rows="10">我是textarea初始化内容</textarea>
```

### 4.1 textarea的获取
console出来的结果：
```js
console.log(innerValue.innerHTML);//我是textarea初始化内容
console.log(innerValue.innerText);//
console.log(innerValue.value);//我是textarea初始化内容
```

### 4.2 innnerHTML方式更改值后，textarea的获取

```js
var innerValue = document.getElementById("textareaTest"); 
innerValue.innerHTML = '通过innerHTML方式更改值'
console.log(innerValue.innerHTML);//通过innerHTML方式更改值
console.log(innerValue.innerText);//
console.log(innerValue.value);//通过innerHTML方式更改值
```

### 4.3 innnerText方式更改值后，textarea的获取

```js
var innerValue = document.getElementById("textareaTest"); 
    innerValue.innerText = '通过innerText方式更改值'
    console.log(innerValue.innerHTML);//通过innerText方式更改值
    console.log(innerValue.innerText);//
    console.log(innerValue.value);//通过innerText方式更改值
```

### 4.4 value方式更改值后，textarea的获取

```js
var innerValue = document.getElementById("textareaTest"); 
innerValue.value = '通过value方式更改值'
console.log(innerValue.innerHTML);//我是textarea初始化内容
console.log(innerValue.innerText);//
console.log(innerValue.value);//通过value方式更改值
```
### 4.5 value更改后、再次innerHTML方式更改值

```js
innerValue.innerHTML = '第二次innerHTML方式更改值'
console.log(innerValue.innerHTML);//第二次innerHTML方式更改值
console.log(innerValue.innerText);//
console.log(innerValue.value);//通过value方式更改值
```

### 4.6 value更改后、再次innerText方式更改值

```js
innerValue.innerText = '第二次innerText方式更改值'
console.log(innerValue.innerHTML);//第二次innerText方式更改值
console.log(innerValue.innerText);//
console.log( innerValue.value);//通过value方式更改值
```

### 4.7 value更改后、再value方式更改值

```js
innerValue.value = '第二次value方式更改值'
console.log(innerValue.innerHTML);//我是textarea初始化内容
console.log(innerValue.innerText);//
console.log( innerValue.value);//第二次value方式更改值
```
### 4.8 总结：
- Chrome中对textarea进行innerText取赋操作均无效(IE有效)
- value在做完value赋值后就无法通过value赋值外的方法改变
- 在没有对textarea的value进行操作前，对innerHtml和innerText进行字符串赋值，则textarea的value就有了一个默认的值，并且可以通过innerHtml和value来获取
- 当对value进行操作后(文本框写入也是操作value)，innerHtml和innerText则不会再对value进行赋值，且文本框优先显示value中的内容

:::danger
注：以上测试均在chrome浏览器中进行，伟大的IE是赋值一个改变所有
:::