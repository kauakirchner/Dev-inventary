<template>
<div class="container">
    <div class="col-1">
        <span>Não possui uma conta?</span>
        <button type="button" class="btn-primary" @click="irParaCadastro">Cadastre-se</button>
    </div>
    <div class="form">
        <h1>Login</h1>
        <form action="">
            <div class="col-2">
                <label for="">E-Mail</label>
                <input type="email" class="form-control">
            </div>
            <div class="col-2">
                <label for="">Senha</label>
                <input type="password" class="form-control">
            </div>
        </form>
        <div class="col-1">
            <button type="button" class="btn btn-primary" @click="entrarNoSistema">Entrar</button>
        </div>
        <div class="col-1">
            <button type="button" class="btn-primary">Google</button>
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