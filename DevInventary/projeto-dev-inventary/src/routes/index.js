import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'

const routes = [
    {path: '/login', component: TelaLogin},
    {path: '/cadastro', component: TelaCadastro}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
