---
title: Vue-router路由守卫
date: 2019-10-26
tags:
 - vue
categories:
 - VUE
author:
 -  言梧
---


## 路由守卫一览表

3个全局守卫 | 路由独享的守卫 | 组件内的守卫
---|---|---
router.beforeEach | beforeEnter | beforeRouteEnter
router.beforeResolve |  | beforeRouteUpdate
router.afterEach |  | beforeRouteLeave

## 全局前置守卫router.beforeEach
> 注意一定要调用 next(); ，否则钩子就不会被 resolved。


```js
const router = new VueRouter({ ... })
router.beforeEach((to, from, next) => {
  // ...
  next();
})
```

```js
// 模拟用户登录与否
const HAS_LOGIN = true;

// 全局前置守卫
// 在Router实例上进行守卫
router.beforeEach((to, from, next) => {
  // to和from都是路由实例
  // to：即将跳转到的路由
  // from：现在的要离开的路由
  // next：函数
  // 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
  if (to.name !== 'login') {
    if (HAS_LOGIN) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGIN) next({ name: 'home' })
    else next()
  }
})
```

## 全局解析守卫router.beforeResolve
在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

## 全局后置钩子afterEach
你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
```js
router.afterEach((to, from) => {
  // ...
})
```

## 路由独享的守卫beforeEnter
你可以在路由配置上直接定义 beforeEnter 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

## 组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：
- beforeRouteEnter
- beforeRouteUpdate (2.2 新增)
- beforeRouteLeave
- 

注意要调用 next() 


```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```


