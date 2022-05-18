<template>
  <div class="container">
    <router-view></router-view>
    <h1>Preencha o formulário para se cadastrar</h1>
    <div class="form">
        <div>
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="usuario.email">
        </div>
        <div>
            <label for="">Senha</label>
            <input type="password" class="form-control" v-model="usuario.senha">
        </div>
        <div>
            <label for="">Confirmar Senha</label>
            <input type="password" class="form-control" v-model="usuario.senhaConfirmada">
        </div>
    </div>
    <button type="button" class="btn btn-primary" @click="cadastrarNovoUsuario">Enviar</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            usuarios:[],
            usuario:{
                email: null,
                senha: null,
                senhaConfirmada: null
            }
        }
    },
    methods:{
        cadastrarNovoUsuario(){
            return this.$store.commit('autenticacaoModule/cadastrarNovoUsuario', this.usuario),
            this.$router.push('/login')
        },
        getUsuarios(){
            return this.$store.state.usuarios
        }
    }
}
</script>

<style>

</style>