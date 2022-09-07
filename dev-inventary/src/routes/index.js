import {createRouter, createWebHashHistory} from 'vue-router'
import TelaLogin from '../Views/TelaLogin.vue'
import TelaCadastro from '../Views/TelaCadastro.vue'
import ColaboratorsList from '../Views/ColaboratorsList.vue'
import InventarioA from '../Views/InventarioA.vue'
import EmprestimoItem from '../Views/EmprestimoItem.vue'
import ColaboratorsRegister from '../Views/ColaboratorsRegister.vue'
import ProductRegister from '../Views/ProductRegister.vue'

const routes = [
    {path: '/', component: TelaLogin},
    {path: '/user-register', component: TelaCadastro},
    {path: '/register-colaborators', component: ColaboratorsRegister,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/user-register'
            return to 
        }
    },
    {path: '/colaborators', component: ColaboratorsList,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/user-register'
            return to 
        }
    },
    {path: '/item-register', component: ProductRegister,
        beforeEnter: (to) =>{
            const autenticado = localStorage.getItem('loginUsuario')
            if(autenticado){
                return true
            }
            to = '/user-register'
            return to 
        }
    },
    {path: '/inventory', component: InventarioA,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/user-register'
        return to 
    }
    },
    {path: '/item-control', component: EmprestimoItem,
    beforeEnter: (to) =>{
        const autenticado = localStorage.getItem('loginUsuario')
        if(autenticado){
            return true
        }
        to = '/user-register'
        return to 
    }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
