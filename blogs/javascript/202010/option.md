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

![An image](/js/option1.png)

