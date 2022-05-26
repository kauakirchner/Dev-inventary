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
                    <div class="card" v-if="mostraInfos"> 
                       <div class="card-body" @click="mostraInfos = !mostraInfos">
                            <vue-gravatar class="gravatar"></vue-gravatar>
                            <h5 class="card-title">Nome da pessoa</h5>
                            <span class="card-text text-secondary">Email</span>
                            <p  class="card-text text-secondary">Numero</p>
                            <h6  class="card-title">Cargo</h6>
                        </div>
                    </div>
                    <div v-else>
                        todas as infos do colaborador....
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
           mostraInfos: true
       }
   },
   methods:{
       
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