<template>
    <router-view></router-view>
  <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-12">
              <h4 class="text-primary main-title">Digite o nome do colaborador para buscar</h4>
              <div class="row-mt-2">
                  <div class="col-1">
                      <input type="text" class="form-control form-control-sm" id="inptBusca" placeholder="digite o nome do colaborador"> 
                  </div>
                   <div class="col-2 mt-2">
                        <button class="btn btn-outline-primary">Buscar</button>
                    </div>
              </div>
                <div class="col-md-3 mt-3">
                    <div class="card" v-for="colaborador in colaboradores" :key="colaborador.id"> 
                       <div class="card-body">
                            <vue-gravatar class="gravatar" email="{{colaborador.email}}"></vue-gravatar>
                            <h5 class="card-title">{{colaborador.nome}}</h5>
                            <span class="card-text text-secondary">{{colaborador.email}}</span>
                            <p  class="card-text text-secondary">{{colaborador.telefone}}</p>
                            <h6  class="card-title">{{colaborador.cargo}}</h6>
                        </div>
                    </div>
                    <!-- <div v-else>
                        todas as infos do colaborador....
                    </div> -->
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
       this.$store.commit('cadastroColaborador/getLocalStorage'),
       console.log('teste',this.colaboradores)
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
</style>