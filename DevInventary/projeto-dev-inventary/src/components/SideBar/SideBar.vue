<template>
  <div class="sidebar-container">
      <h4 class="text-white">DevInventary</h4>
      <div class="row mt-5">
          <p class="text-white">Geral</p>
      </div>
      <div class="col mt-2">
            <div class="col">
                <button class="btn btn-outline-primary btn-sm">Inventário</button>
            </div>
                <div class="row">
                    <div class="col mt-2">
                    <button class="btn btn-outline-primary btn-sm" @click="sair">Sair</button>
                </div>
            </div>
            <p class="text-white mt-2">Colaboradores</p>
            <div class="row">
                <div class="col">
                    <button class="btn btn-outline-primary btn-sm">Cadastrar</button>
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <button class="btn btn-outline-primary btn-sm">Listar</button>
                </div>
            </div>
            <p class="text-white mt-2">Produto</p>
            <div class="row">
                <div class="col">
                    <button class="btn btn-outline-primary btn-sm">Cadastrar</button>
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <button class="btn btn-outline-primary btn-sm">Listar</button>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods:{
        sair(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
.sidebar-container{
    height: 100%;
    width: 100%;
    background-color: rgba(46, 51, 202, 0.987);
}
</style>