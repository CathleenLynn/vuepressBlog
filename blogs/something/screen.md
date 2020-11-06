---
title: 屏幕分辨率
date: 2020-11-05

categories:
 -  something
author:
 -  言梧
---



## PC端


分辨率 | 比例 | 设备尺寸
---|---|---
1024*500 |   | 8.9寸
1024*768 | 4：3 | ==10.4寸、12.1寸、14.1寸、15寸==
1280*800 | 16：10  | ==15.4寸==
1280*1024 | 5：4  | ==14.1寸、15.0寸==
1280*854 | 15：10 | 15.2寸
1366*768 | 16：9 | 不常见
1440*900 | 16：10 | ==17寸 仅苹果用==
1440*1050 | 5：4 | 14.1寸、15.0寸
1600*1024 | 14：9 | 不常见
1600*1200 | 4：3 | 15、16.1
1680*1050 | 16：10 | 15.4寸、20.0寸
1920*1200 |   | 23寸



### 通过上面的电脑屏蔽及尺寸的例表上我们得到了几个宽度

> 1024       
> 1280          
> 1366      
> 1440       
> 1680       
> 1920 

### PC端响应式媒体断点
```css
@media (min-width: 1024px){
    body{font-size: 18px}
} /*>=1024的设备*/

@media (min-width: 1100px) {
    body{font-size: 20px}
} /*>=1100的设备*/

@media (min-width: 1280px) {
    body{font-size: 22px;}
} /*>=1280的设备*/

@media (min-width: 1366px) {
    body{font-size: 24px;}
}  

@media (min-width: 1440px) {
    body{font-size: 25px !important;}
} 

@media (min-width: 1680px) {
    body{font-size: 28px;}
} 

@media (min-width: 1920px) {
    body{font-size: 33px;}
} 
```
