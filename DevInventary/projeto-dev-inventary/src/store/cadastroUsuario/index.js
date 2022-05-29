export default {
    namespaced: true,
    state(){
        return{
            cadastrado: false,
            usuarios: []
        }
    },
    mutations:{
        //Função que cadastra usuario e salva no localStorage.
        cadastrarNovoUsuario(state, usuario){
            state.usuarios.push(usuario);
            const usuariosJson = JSON.stringify(state.usuarios);
            localStorage.setItem('loginUsuario',usuariosJson, true);
            state.cadastrado = true;
           
          
        },
     
    },
    
   
}
