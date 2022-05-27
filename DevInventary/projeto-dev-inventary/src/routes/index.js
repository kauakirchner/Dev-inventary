import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'
import CadastroColaboradores from '../Views/CadastroColaboradores.vue'
import ListagemColaborador from '../Views/ListagemColaborador.vue'

const routes = [
    {path: '/', component: TelaLogin},
    {path: '/cadastro', component: TelaCadastro},
    {path: '/cadastroColaboradores', component: CadastroColaboradores},
    {path: '/listaColaboradores', component: ListagemColaborador}  
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
