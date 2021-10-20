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
    routes: [{ path: '/users', component: Users },
        { path: '/userinfo', component: UserInfo, props: true },
        { path: '/rights', component: Rights },
        { path: '/goods', component: Goods },
        { path: '/orders', component: Orders },
        { path: '/settings', component: Settings }
    ]
})

export default router