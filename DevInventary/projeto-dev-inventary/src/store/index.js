import {createStore} from 'vuex'
import cadastroUsuario  from './cadastroUsuario'
import autenticaLogin from './autenticaLogin'
import cadastroColaborador from './cadastroColaborador'
import cadastroItem from './cadastroItem'
import NomeRotaNavBar from './NomeRotaNavBar'

const store = createStore({
    modules:{
        cadastroUsuario,
        autenticaLogin,
        cadastroColaborador,
        cadastroItem,
        NomeRotaNavBar
    }
})

export default store

