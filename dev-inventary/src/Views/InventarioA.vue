<template>
  <div class="container-fluid">
      <router-view></router-view>
      <div class="row justify-content-md-center">
          <div class="col-12">
                <div class="row g-3 mt-3">
                    <div class="">
                        <transition name="lista">
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
                        </transition>
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