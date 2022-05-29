<template>
    <router-view></router-view>
  <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-12">
            <div class="row g-3 mt-3">
                    <div class="">
                        <h4 class="text-primary main-title">Digite o nome do colaborador para buscar</h4>
                        <div class="row-mt-2">
                            <input type="text" class="form-control form-control" id="inptBusca" placeholder="digite o nome do colaborador">
                            <div class="col-sm-12 col-md-6 col-lg-3 mt-2">
                                <button class="btn btn-outline-primary">Buscar</button> 
                            </div>
                        </div>
                        <transition name="lista">
                            <div class="row">
                                <div class="card col-sm-12 col-md-6 col-lg-3 mt-3" v-for="colaborador in colaboradores" :key="colaborador.id">
                                    <div class="card-body">
                                        <vue-gravatar class="gravatar" email="{{colaborador.email}}"></vue-gravatar>
                                        <h5 class="card-title">{{colaborador.nome}}</h5>
                                        <span class="card-text text-secondary">{{colaborador.email}}</span>
                                        <p  class="card-text text-secondary">{{colaborador.telefone}}</p>
                                        <h6  class="card-title">{{colaborador.cargo}}</h6>
                                    </div>
                                </div> 
                            </div>     
                    </transition>
                    </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   data(){
       return{
          
       }
   },
   computed:{
       colaboradores(){
           return this.$store.state.cadastroColaborador.colaboradores
        
       }
   },
   mounted(){
       this.$store.commit('cadastroColaborador/getLocalStorage')
   }
}
</script>

<style>
.gravatar{
    width: 4vw;
    height: 8vh;
}
#inptBusca{
    width: 16vw;
    height: 5vh;
}
.lista-leave-to,
.lista-enter-from{
    opacity: 0;
    font-size: 0px;
}
.lista-leave-from,
.lista-enter-to{
    opacity: 1;
}
.lista-move,.lista-enter-active,.lista-leave-active{
    transition:all 2s;
}
</style>