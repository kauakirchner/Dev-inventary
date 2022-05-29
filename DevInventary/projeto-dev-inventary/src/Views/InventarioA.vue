<template>
      <router-view></router-view>
  <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-12">
                <div class="row g-3 mt-3">
                    <div class="">
                        <div class="row">
                            <div class="card col-sm-12 col-md-6 col-lg-3" v-for="item in itens" :key="item" > 
                                <div class="card-body">
                                <img :src="item.urlFotoItem" width="80" height="75" class="d-inline-block align-text-top" alt="">
                                <br>
                                <span class="text-secondary sm">{{item.descItem}}</span>
                                <br>
                                <span class="tex-dark">{{item.marcaDoItem}}</span>
                                <br>
                                <span class="text-secondary">{{item.modeloItem}}</span>
                        </div>
                        </div>
                      
                    </div>
                    </div>
                 
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        itens(){
            return this.$store.state.cadastroItem.itens
        }
    },
    mounted(){
       this.$store.commit('cadastroItem/getItemLocalStorage')
   }
}
</script>

<style>

</style>