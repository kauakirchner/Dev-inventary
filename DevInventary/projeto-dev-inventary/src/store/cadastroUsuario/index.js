export default {
    namespaced: true,
    state(){
        return{
            cadastrado: false,
            usuarios: []
        }
    },
    mutations:{
        cadastrarNovoUsuario(state, usuario){
            state.usuarios.push(usuario);
            const usuariosJson = JSON.stringify(state.usuarios);
            localStorage.setItem('loginUsuario',usuariosJson, true);
            state.cadastrado = true
           
          
        },
        verificaSenhaConfirmada(state, usuario){
            if(usuario.senha != usuario.senhaConfirmada){
                alert('Senhas diferentes');
                state.cadastrado = false


            }else{
                alert('cadastro efetuado com sucesso')
                    state.cadastrado = true;
                    
            }
        },
    },
    
   
}
