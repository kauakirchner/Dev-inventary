import {createStore} from 'vuex'
import autenticacaoModule  from './autenticacaoModule'

const store = createStore({
    modules:{
        autenticacaoModule
    }
})

export default store

