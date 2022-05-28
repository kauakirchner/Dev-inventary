import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'
import CadastroColaboradores from '../Views/CadastroColaboradores.vue'
import ListagemColaborador from '../Views/ListagemColaborador.vue'
import CadastroProduto from '../Views/CadastroProduto.vue'
import InventarioA from '../Views/InventarioA.vue'

const routes = [
    {path: '/', component: TelaLogin},
    {path: '/cadastro', component: TelaCadastro},
    {path: '/cadastroColaboradores', component: CadastroColaboradores},
    {path: '/listaColaboradores', component: ListagemColaborador},
    {path: '/CadastroProduto', component: CadastroProduto},
    {path: '/inventario', component: InventarioA}   
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
