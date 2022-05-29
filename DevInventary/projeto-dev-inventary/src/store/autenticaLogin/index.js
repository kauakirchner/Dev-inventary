export default{
    namespaced: true,
    state(){
        return{
            autenticado: false,
            credenciais: [],
            email: ''
        }
    },
    mutations:{
        //Função que puxa as credenciais do localStorage e verifica se equivale ao que está sendo digitado.
        autenticaLogin(state, login){
         state.credenciais = JSON.parse(localStorage.getItem('loginUsuario')) || []
         state.credenciais.forEach(item => {
            if(item.email === login.email && item.senha === login.senha){
                alert('login efetuado com sucesso');
                state.autenticado = true;
                const tokenEmail = login.email;
                localStorage.setItem('token', tokenEmail);
            } 
            else{
                alert('Email ou senha inválidos')
                state.autenticado = false;
            }
         });
        },
        getEmail(state){
            //Função que puxa o email do localStorage com fim de uso para o vue-gravatar.
            state.email = localStorage.getItem('token');
        },
        logout(state){
            localStorage.removeItem('loginUsuario');
            state.autenticado = false;
        }
    }
}