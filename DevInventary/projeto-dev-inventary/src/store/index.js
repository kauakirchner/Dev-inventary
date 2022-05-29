import {createStore} from 'vuex'
import cadastroUsuario  from './cadastroUsuario'
import autenticaLogin from './autenticaLogin'
import cadastroColaborador from './cadastroColaborador'
import cadastroItem from './cadastroItem'


const store = createStore({
    modules:{
        cadastroUsuario,
        autenticaLogin,
        cadastroColaborador,
        cadastroItem,
    }
})

export default store

