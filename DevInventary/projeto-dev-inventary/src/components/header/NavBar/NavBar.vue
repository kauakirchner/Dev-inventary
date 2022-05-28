<template>
  <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div class="container-fluid">
    <img src="NavImg.jpg" width="80" height="75" class="d-inline-block align-text-top">
      <a class="navbar-brand" href="#"><!-- Nome da Aba--></a>
        <div class="d-flex mr-2">
            <ul class="navbar-nav w-100 align-items-center">
                <li class="nav-item ml-auto">
                    <span class="text-white" v-text="getEmail"></span>
                    <vue-gravatar class="gravatar" email="kauakirchner2@gmail.com"></vue-gravatar>
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
        
       }
    },
   mounted(){
       this.$store.commit('autenticaLogin/getEmail')
    
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