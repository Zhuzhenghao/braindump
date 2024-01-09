import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Cat from './pages/Cat.vue'
import Dog from './pages/Dog.vue'
const routes = [
    {
        path:'/cat',
        component:Cat
    },
     {
        path:'/dog',
        component:Dog
    }
]
const router = createRouter({
    history:createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/qiankun-app3-vue' : '/'),
    routes
})

export default router