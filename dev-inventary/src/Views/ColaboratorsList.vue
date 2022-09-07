<template>
    <div class="colaborators-container">
        <router-view></router-view>
        <div class="search-colaborators">
            <label for="" class="text-primary">Digite o nome do colaborador para buscar</label>
        </div>
            <div class="content input-group justify-content-center mt-2">
                    <input type="text" class="form-control">
                    <button class="btn btn-outline-primary">🔎</button>
            </div>
            <div class="row mt-4">
                <div class="colaborators col-sm-12 col-md-6 col-lg-3" v-for="colaborador in colaboradores" :key="colaborador.id">
                    <div class="product-card">
                            <vue-gravatar class="gravatar" email="{{colaborador.email}}"></vue-gravatar>
                            <h5 class="card-title text-light">{{colaborador.nome}}</h5>
                            <span class="card-text text-light">{{colaborador.email}}</span>
                            <p  class="card-text text-light">{{colaborador.telefone}}</p>
                            <h6  class="card-title text-light">{{colaborador.cargo}}</h6>
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
    border-radius: 10px;
}
.search-colaborators {
    display: flex;
    justify-content: center;
}
.product-card {
    background-repeat: no-repeat;
    min-width: 200px;
    width: 200px;
    height: 200px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.45);
    margin: 10px;
    transition: all 0.6s ease-in-out;
    background-color: #111;
    border-radius: 10px;
    text-align: center;
    padding-left: 15px;
}

.product-card > .gravatar {
    display: flex;
    justify-content: start;
}
</style>