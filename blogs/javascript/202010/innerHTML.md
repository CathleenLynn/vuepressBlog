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

![An image](/js/innerHTML1.png)

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

![An image](/js/innerHTML2.png)



