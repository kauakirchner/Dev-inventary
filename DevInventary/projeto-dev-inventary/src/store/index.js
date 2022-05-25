import {createStore} from 'vuex'
import cadastroUsuario  from './cadastroUsuario'
import autenticaLogin from './autenticaLogin'

const store = createStore({
    modules:{
        cadastroUsuario,
        autenticaLogin
    }
})

export default store

