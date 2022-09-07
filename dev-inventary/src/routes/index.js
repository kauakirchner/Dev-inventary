import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'
import ListagemColaborador from '../Views/ListagemColaborador.vue'
import CadastroProduto from '../Views/CadastroProduto.vue'
import InventarioA from '../Views/InventarioA.vue'
import EmprestimoItem from '../Views/EmprestimoItem.vue'
import ColaboratorsRegister from '../Views/ColaboratorsRegister.vue'

const routes = [
    {path: '/', component: TelaLogin},
    {path: '/cadastrar-usuario', component: TelaCadastro},
    {path: '/cadastrar-colaboradores', component: ColaboratorsRegister,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastrar-usuario'
            return to 
        }
    },
    {path: '/colaboradores', component: ListagemColaborador,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastrar-usuario'
            return to 
        }
    },
    {path: '/cadastrar-item', component: CadastroProduto,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/cadastrar-usuario'
            return to 
        }
    },
    {path: '/inventario', component: InventarioA,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/cadastrar-usuario'
        return to 
    }
    },
    {path: '/controle-de-itens', component: EmprestimoItem,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/cadastrar-usuario'
        return to 
    }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
