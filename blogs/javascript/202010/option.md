---
title: 一些JS操作
date: 2020-10-20
tags:
 -  javascript
 -  download

categories:
 -  JavaScript
author:
 -  言梧
---

操作一览表：
```
1.数据导出、下载文件
2.时间转为yyyy-mm-dd
3.
```


## 1.数据导出为txt文件

HTML部分：
```html
<!--<textarea name="" id="after" cols="30" rows="10">-->
<!--这里输入的数据将保存为txt中 </textarea>-->
<!--<button id="save" type="button">保存</button>-->

<textarea name="after" id="after" v-text='content'> 这里输入的数据将保存为txt中 </textarea>
<ButtonSingle @click.native="dataExport">导出</ButtonSingle>
```
JS部分：

```js
methods: {
    dataExport: function () {
        var inValue = document.querySelector('#after').value
        this.exportRaw('template.txt', inValue)
    },
    exportRaw(name, data){
        let urlObject = window.URL || window.webkitURL || window
        let export_blob = new Blob([data])
        let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob)
        save_link.download = name
        this.fakeClick(save_link)
    },
    fakeClick(obj){
        let ev =  document.createEvent("MouseEvents")
        ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        obj.dispatchEvent(ev)
    }
}
//获取元素，绑定事件
//document.querySelector('#save').addEventListener('click', saveFile);

/*function saveFile(){
    var inValue  = document.querySelector('#text').value;
    exportRaw('template.txt', inValue);
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
}

function fakeClick(obj) { 
    var ev = document.createEvent("MouseEvents");
　　ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
　　obj.dispatchEvent(ev);
}
*/
```
点击后即可下载textarea中的内容，本地化为txt文件

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/option1.png)

## 2.标准日期格式转为yyyy-mm-dd

```js
var formatDate = function(date){
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m+ '-' + d;
}
var date = new Date(2020,10,21);
console.log(date);//Sat Nov 21 2020 00:00:00 GMT+0800 (中国标准时间)
var res = formatDate(date);
console.log(res);//"2020-11-21"
```
### 时间戳转指定时间格式
```js
**
*date 要转换的时间戳
*format 时间格式
**
/*时间戳转指定时间格式
 *@method formatTime
 *@param{number}date 时间戳
 * @param{String}format 时间格式
 *@return {String} 
*/
formatTime = (date, format) => {
        var timeformat = new Date(date)
        var tf = function (i) { return (i < 10 ? '0' : '') + i }
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
          switch (a) {
            case 'yyyy':
              return tf(timeformat.getFullYear())
            case 'MM':
              return tf(timeformat.getMonth() + 1)
            case 'mm':
              return tf(timeformat.getMinutes())
            case 'dd':
              return tf(timeformat.getDate())
            case 'HH':
              return tf(timeformat.getHours())
            case 'ss':
              return tf(timeformat.getSeconds())
          }
        })
      }

```
### 另一种简洁的方法：
```js
function time(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//Date的‘toJSON’方法返回格林威治时间的JSON格式字符串，
//实际是使用‘toISOString’方法的结果。
//字符串形如‘2018-08-09T10:20:54.396Z’，转化为北京时间需要额外增加八个时区，
//我们需要取字符串前19位，然后把‘T’替换为空格，即是我们需要的时间格式。
```



### 标准时间→时间戳：

```js
new Date().getTime()
new Date("2019-11-04 11:03:35").getTime()//1572836615000

```

> 时间戳→标准时间：new Date(时间戳)、Date.now()、

> 时间戳→yyyy-mm-dd：时间戳→标准时间→formatDate函数


### Date.prototype.toISOString()
> toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串：YYYY-MM-DDTHH:mm:ss.sssZ。

> 时区总是UTC（协调世界时），加一个后缀“Z”标识。

```js
//语法：
dateObj.toISOString()
```
### Date.parse()

```
Date.parse() 方法解析一个表示某个日期的字符串，
并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，
如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），
则返回值为NaN。
```
