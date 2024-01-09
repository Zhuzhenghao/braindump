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