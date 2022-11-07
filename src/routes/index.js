import {createRouter, createWebHashHistory} from 'vue-router'
import UserLogin from '../Views/UserLogin.vue'
import UserRegister from '../Views/UserRegister.vue'
import ColaboratorsList from '../Views/ColaboratorsList.vue'
import EmprestimoItem from '../Views/EmprestimoItem.vue'
import ColaboratorsRegister from '../Views/ColaboratorsRegister.vue'
import ProductRegister from '../Views/ProductRegister.vue'
import ProductInventory from  '../Views/ProductInventory.vue'

const routes = [
    {path: '/', component: UserLogin},
    {path: '/user-register', component: UserRegister},
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
    {path: '/inventory', component: ProductInventory,
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
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router
