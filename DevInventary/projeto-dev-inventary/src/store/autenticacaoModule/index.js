export default {
    namespaced: true,
    state(){
        return{
            autenticado: false,
            usuarios: []
        }
    },
    mutations:{
        cadastrarNovoUsuario(state, usuario){
            state.usuarios.push(usuario);
            const usuariosJson = JSON.stringify(state.usuarios);
            localStorage.setItem('loginUsuario',usuariosJson);
            state.autenticado = true
           
          
        }
    },
    actions:{
        
    }
   
}
