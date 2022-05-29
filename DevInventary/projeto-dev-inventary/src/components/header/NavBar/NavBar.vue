<template>
  <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example" v-if="autenticado">
    <div class="container-fluid">
    <img src="NavImg.jpg" width="80" height="75" class="d-inline-block align-text-top">
        <div class="d-flex mr-2">
            <ul class="navbar-nav w-100 align-items-center">
                <li class="nav-item ml-auto">
                    <span class="text-white" v-text="getEmail"></span>
                    <vue-gravatar class="gravatar" email="{{getEmail}}"></vue-gravatar>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
     computed:{
        getEmail(){
           return this.$store.state.autenticaLogin.email
       },
       autenticado(){
           return this.$store.state.autenticaLogin.autenticado
       },
    },
   mounted(){
       this.$store.commit('autenticaLogin/getEmail'),
       this.$store.state.autenticaLogin.autenticado = localStorage.getItem('loginUsuario') ? true : false
    
   }
}
</script>

<style>
.gravatar{
    width: 4vw;
    height: 8vh;
}
.NavImg{
    width: 6vw;
    height: 12vh;
}
</style>