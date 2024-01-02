## single-spa 到底是干嘛的

**single-spa 仅仅是一个子应用生命周期的调度者。** single-spa 为应用定义了 boostrap, load, mount, unmount 四个生命周期回调

只要写过 SPA 的人都能理解，无非就是生、老、病、死。不过有几个点需要注意一下：

- Register 不是生命周期，指的是调用 `registerApplication` 函数这一步
- Load 是开始加载子应用，怎么加载由开发者自己实现（等会会说到）
- Unload 钩子只能通过调用 `unloadApplication` 函数才会被调用

OK，上面 4 个生命周期的回调顺序是 single-spa 可以控制的，我能理解，那什么时候应该开始这一套生命周期呢？应该是有一个契机来开始整套流程的，或者某几个流程的。

契机就是当 `window.location.href` 匹配到 url 时，开始走对应子 App 的这一套生命周期嘛。所以，single-spa 还要监听 url 的变化，然后执行子 app 的生命周期流程。

到此，我们就有了 single-spa 的大致框架了，无非就两件事：

- 实现一套生命周期，在 load 时加载子 app，由开发者自己玩，别的生命周期里要干嘛的，还是由开发者造的子应用自己玩
- 监听 url 的变化，url 变化时，会使得某个子 app 变成 active 状态，然后走整套生命周期

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38fdaefdd2804aff98da73ebf01605ec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## SingleSpa 实战

### 构建子应用

1. 安装包

`vue create spa-vue`

 `npm install single-spa-vue`

2. 修改main.js

```
`
import singleSpaVue from 'single-spa-vue';
const vueOption = {

  el: "#vue",//挂载到父应用中的id为vue的标签上

  router,

  render: h => h(App)

};

//包装后的生命周期 => bootstrap  mount  unmount 函数

const vueLifecycles = singleSpaVue({

  Vue,

  appOptions: vueOption

});



//协议接入   我定好了协议，父应用会调用这些方法

export const  bootstrap = vueLifecycles.bootstrap

export const  mount = vueLifecycles.mount

export const  unmount = vueLifecycles.unmount

`

```



3.配置子路由基础路径

```
const router = new VueRouter({
  mode: 'history',
  base: '/vue',
  routes
})
```

页面路由匹配到/vue就会去加载这个子应用



4.将子模块打包成类库，方便加载

```
module.exports = {
    // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
    // css: {
    //     extract: false
    // },
    configureWebpack: {
        output: {
            //打包为名为sing的类库
            library: 'singleVue',
            //umd类型
            libraryTarget: 'umd',
        },
        devServer: {
            port: 10000,
        }
    },
   
}

```

### 构建主应用

1.构建路由和价值root

```
<template>
  <div id="app">
    <router-link to="/vue">加载vue应用</router-link>
    <!-- 子应用加载的位置 -->
    <div id="vue"></div>
  </div>
</template>
```

2.主应用注册子应用

```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  registerApplication,
  start
} from 'single-spa'

Vue.config.productionTip = false

async function loadScript(url){
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script)
    
});
}

//single-spa 缺陷   不够灵活   不能动态加载js文件
//样式不隔离   没有js沙箱机制

//name,promise,active,e
registerApplication('myVueApp',
  async () => {
    
      console.log("🚀 ~ file: main.js:14 ~ :", '加载了模块')
      await loadScript(`http://localhost:10000/js/chunk-vendors.js`)
      await loadScript(`http://localhost:10000/js/app.js`)
      return window.singleVue   //bootstrap  mount  unmount 函数
    },
    
    location => location.pathname.startsWith('/vue') // 用户切换到/vue的路径下我需要加载定义的子应用

)
start()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

3.解决资源问题，动态设置子应用`publicPath`

```
//如果是父应用引用我

if(window.singleSpaNavigate){

  __webpack_public_path__ = " http://localhost:10000/"  //绝对路径

}

//如果不是父应用引用我

if(!window.singleSpaNavigate){

  delete vueOption.el;

  new Vue(vueOption).$mount('#app')

}
```

### 效果展示

![](C:\Users\OS\AppData\Roaming\marktext\images\2023-12-16-19-27-08-image.png)

![](C:\Users\OS\AppData\Roaming\marktext\images\2023-12-16-19-27-37-image.png)

![](C:\Users\OS\AppData\Roaming\marktext\images\2023-12-16-19-27-53-image.png)
