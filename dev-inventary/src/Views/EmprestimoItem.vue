<template>
    <transition name="header">
        <div class="container-fluid">
            <div class="container mt-3">
                <div class="content input-group">
                    <input type="text" class="w-75 form-control">
                    <button class="btn btn-primary">🔎</button>
                    </div>
                    <hr>
                    <h4>Lista de Itens</h4>
                    <p class="text-danger">
                        Não há itens cadastrados - 
                        <router-link to="/cadastroProduto" class="btn btn-outline-danger">
                        Realizar novo cadastro
                        </router-link>
                    </p>
                </div>
        </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
.header-leave-to,
.header-enter-from{
    opacity: 0;
    font-size: 0px;
}
.header-leave-from,
.header-enter-to{
    opacity: 1;
}
.header-move,.header-enter-active,.header-leave-active{
    transition:all 2s;
}
</style>