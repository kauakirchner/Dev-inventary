<template>
<div class="container">
    <router-view></router-view>
    <div class="row-1">
        <span>Não possui uma conta?</span>
        <button type="button" class="btn btn-sucess" @click="irParaCadastro">Cadastre-se</button>
    </div>
    <div class="form">
        <h2 class="text-primary">Login</h2>
        <form action="">
            <div class="row-1">
                <div class="col-2">
                    <label class="label-control">E-Mail</label>
                    <input type="email" class="form-control">
                </div>
            </div>
            <div class="row-1">
                <div class="col-2">
                    <label class="label-control">Senha</label>
                    <input type="password" class="form-control">
                </div>
            </div>
        </form>
        <div class="row my-3">
            <div class="col-1">
                <button type="button" class="btn btn-sucess">Google</button>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-primary" @click="autenticaUsuario">Entrar</button>
            </div> 
        </div>  
    </div>
        <div class="col-2">
        <img src="952b2afb-8575-4569-b713-52a99d181dad.jpg" alt="" class="img">
    </div>
</div>
</template>

<script>
export default {
    methods:{
        irParaCadastro(){
            this.$router.push('/cadastro')
        }
    }
}
</script>

<style>
.img {
    width: 40rem;
    margin-left: 50rem;
    margin-top: -10rem;

}



</style>