import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import { createRouter, createWebHistory } from 'vue-router';
import './public-path'
let instance = null;
function render(props = {}) {
    const { container } = props;
    // history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/');
    // router = createRouter({
    //   history,
    //   routes,
    // });
  
    instance = createApp(App);
    instance.use(router);
    instance.use(store);
    instance.mount(container ? container.querySelector('#app') : '#app');
  }
//独立运行时
  if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  export async function bootstrap() {
    console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
  }
  
  function storeTest(props) {
    props.onGlobalStateChange &&
      props.onGlobalStateChange(
        (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
        true,
      );
    props.setGlobalState &&
      props.setGlobalState({
        ignore: props.name,
        user: {
          name: props.name,
        },
      });
  }
  
  export async function mount(props) {
    storeTest(props);
    render(props);
    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  }
  
  export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
    // router = null;
    history.destroy();
  }

// createApp(App).use(store).mount('#app')
