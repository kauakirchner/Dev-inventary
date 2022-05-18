import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import CadastroColaboradores from '../Views/CadastroColaboradores.vue'

const routes = [
    {path: '/login', component: TelaLogin},
    
    {path: '/cdstColaborador', component: CadastroColaboradores}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
