import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'
import CadastroColaboradores from '../Views/CadastroColaboradores.vue'
import ListagemColaborador from '../Views/ListagemColaborador.vue'
import CadastroProduto from '../Views/CadastroProduto.vue'
import InventarioA from '../Views/InventarioA.vue'
import EmprestimoItem from '../Views/EmprestimoItem.vue'

const routes = [
    {path: '/', component: TelaLogin},
    {path: '/cadastro', component: TelaCadastro},
    {path: '/cadastroColaboradores', component: CadastroColaboradores,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastro'
            return to 
        }
    },
    {path: '/listaColaboradores', component: ListagemColaborador,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastro'
            return to 
        }
    },
    {path: '/CadastroProduto', component: CadastroProduto,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastro'
            return to 
        }
    },
    {path: '/inventario', component: InventarioA,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/cadastro'
        return to 
    }
    },
    {path: '/emprestimoItem', component: EmprestimoItem,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/cadastro'
        return to 
    }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
