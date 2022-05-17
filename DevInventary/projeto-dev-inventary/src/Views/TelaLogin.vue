<template>
<div class="container">
    <router-view></router-view>
    <div class="row-1">
        <span>Não possui uma conta?</span>
        <button type="button" class="btn btn-sucess" @click="irParaCadastro">Cadastre-se</button>
    </div>
    <div class="form">
        <h1>Login</h1>
        <form action="">
            <div class="row-1">
                <label for="">E-Mail</label>
                <input type="email" class="form-control">
            </div>
            <div class="row-1">
                <label for="">Senha</label>
                <input type="password" class="form-control">
            </div>
        </form>
        <div class="col-1">
            <button type="button" class="btn btn-primary" @click="entrarNoSistema">Entrar</button>
            <button type="button" class="btn btn-sucess">Google</button>
        </div>  
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>