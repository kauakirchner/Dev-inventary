<template>
  <div class="container">
    <router-view></router-view>
    <h1>Preencha o formulário para se cadastrar</h1>
    <form>
        <div class="form">
            <h2 class="my-4">Preencha o formulário para se cadastrar</h2>
            <div class="row">
                <div class="col-2">
                    <label class="label-control" name="email">Email</label>
                    <input type="email" name="email" class="form-control" v-model="usuario.email"/>
                    <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
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
        <div class="col-2 my-3">
            <button type="submit" class="btn btn-success">Enviar</button>
        </div>
    </form>
    <div class="row">
       
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
            },
            
        }
    },
    methods:{
        save(){
            console.log('caiu')
            this.$store.commit('autenticacaoModule/cadastrarNovoUsuario', this.usuario)
            this.$router.push('/login')
            console.log(this.usuario.email)
          
           
        },
        getUsuarios(){
            return this.$store.state.usuarios
        }
    }
}
</script>

<style>

</style>