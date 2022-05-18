<template>
  <div class="container">
    <router-view></router-view>
    <h1>Preencha o formulário para se cadastrar</h1>
    <div class="form">
        <h2 class="my-4">Preencha o formulário para se cadastrar</h2>
        <div class="row">
            <div class="col-2">
                <label class="label-control">Email</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <label class="label-control">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>    
        </div>
        <div class="row">
            <div class="col-2">
                <label class="label-control">Confirmar Senha</label>
                <input type="password" class="form-control" v-model="usuario.senhaConfirmada">
            </div>   
        </div>
    </div>
    <div class="row">
        <div class="col-2 my-3">
            <button type="button" class="btn btn-success" @click="cadastrarNovoUsuario">Enviar</button>
        </div>
    </div>
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