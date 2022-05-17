import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'

const routes = [
    {path: '/login', component: TelaLogin}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
