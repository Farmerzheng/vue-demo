import { createRouter, createWebHistory } from 'vue-router'
import Goods from '../views/Goods.vue'
import Orders from '../views/Orders.vue'
import Rights from '../views/Rights.vue'
import Settings from '../views/Settings.vue'
import UserInfo from '../views/UserInfo.vue'
import Users from '../views/Users.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        // 重定向： 是默认的路径，页面第一打开的时候，就会访问这个路径       
        { path: '/', redirect: '/users' },
        { path: '/users', component: Users },
        { path: '/userinfo', component: UserInfo, props: true },
        { path: '/rights', component: Rights },
        { path: '/goods', component: Goods },
        { path: '/orders', component: Orders },
        { path: '/settings', component: Settings }
    ]
})

export default router