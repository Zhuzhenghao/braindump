import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false



// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


const vueOption = {
  el: "#vue",//挂载到父应用中的id为vue的标签上
  router,
  render: h => h(App)
};

//包装后的生命周期 => bootstrap  mount  unmount 函数
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOption
});

//如果是父应用引用我
if(window.singleSpaNavigate){
  __webpack_public_path__ = " http://localhost:10000/"  //绝对路径
}
//如果不是父应用引用我

if(!window.singleSpaNavigate){
  delete vueOption.el;
  new Vue(vueOption).$mount('#app')
}

//协议接入   我定好了协议，父应用会调用这些方法
export const  bootstrap = vueLifecycles.bootstrap
export const  mount = vueLifecycles.mount
export const  unmount = vueLifecycles.unmount
    

//需要父应用加载子应用，将子应用打包成一个个lib去给父应用

// bootstrap  mount  unmount 函数

//single-spa   /  single-spa-vue