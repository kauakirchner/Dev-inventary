import {createStore} from 'vuex'
import cadastroUsuario  from './cadastroUsuario'
import autenticaLogin from './autenticaLogin'
import cadastroColaborador from './cadastroColaborador'

const store = createStore({
    modules:{
        cadastroUsuario,
        autenticaLogin,
        cadastroColaborador
    }
})

export default store

