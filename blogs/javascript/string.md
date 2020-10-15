---
title: 字符串方法
date: 2020-10-15
tags:
 -  javascript
 -  字符串
categories:
 -  javascript
author:
 -  言梧
---
## 字符串表示

表示 | 描述
---|---
引号‘ ’ | 
双引号“ ” | 
反引号\`  \` | 1. 通过 ${…} 将任何表达式嵌入到字符串中。2. 允许字符串跨行


```js
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3
```

## 访问字符

```js
str.charAt(index) //索引Index处的字符
str.charCodeAt(index) //索引Index处的字符编码
str.codePointAt(index) //索引Index处的字符编码（同上）
String.fromCharCode(code) //编码code的字符
String.fromCodePoint(code) //通过数字code创建字符
for...of //遍历字符串
```

## 改变大小写


```js
toLowerCase()
toUpperCase()
```

## 查找字符串

```js
str.indexOf(substr, pos) //从给定位置 pos 开始，在 str 中查找 substr，如果没有找到，则返回 -1，否则返回匹配成功的位置
str.lastIndexOf(substr, pos) //从字符串的末尾开始搜索到开头
str.includes(substr, pos) //根据 str 中是否包含 substr 来返回 true/false
str.startsWith() //检测字符串是否以指定的子字符串开始
str.endsWith()
```

## 获取字符串

```js
str.slice(start [, end])  // 返回字符串从 start 到（但不包括）end 的部分
str.substring(start [, end])  // 返回字符串start 与 end 之间（包括 start，但不包括 end）
str.substr(start [, length])  //  返回字符串从 start 开始的给定 length 的部分
```
### slice, substring, substr区别：

> - 当接收的参数是负数时：
> 1. **slice**会将它字符串的长度与对应的负数相加，结果作为参数；
> 2. **substring**则干脆将负参数都直接转换为0。
> 3. **substr**则仅仅是将第一个参数与字符串长度相加后的结果作为第一个参数


## -----转义字符-----

字符 | 描述
---|---
\n | 换行
\r | 回车：不单独使用。windows文件使用\r\n组合表示换行
\\', \\" | 引号
\\\ | 反斜线
\t | 制表符
\b, \f, \v | 退格，换页，垂直标签——已经不使用
\xXX | 具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同。
\uXXXX | 	以 UTF-16 编码的十六进制代码 XXXX 的 unicode 字符，例如 \u00A9 —— 是版权符号 © 的 unicode。它必须正好是 4 个十六进制数字。
\u{X...XXXXXX} (1到6个十六进制字符)| 具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。

