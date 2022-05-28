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
        autenticaLogin(state, login){
         state.credenciais = JSON.parse(localStorage.getItem('loginUsuario')) || []
         state.credenciais.forEach(item => {
            if(item.email === login.email && item.senha === login.senha){
                alert('login efetuado com sucesso')
                state.autenticado = true
                const tokenEmail = login.email
                localStorage.setItem('token', tokenEmail)
            } 
            else{
                alert('Email ou senha inválidos')
                state.autenticado = false
            }
         });
        },
        getEmail(state){
            state.email = localStorage.getItem('token')
        }
    }
}