<template>
      <div class="colaborators-container">
        <router-view></router-view>
            <div class="row mt-4">
                <div class="products col-sm-12 col-md-6 col-lg-3" v-for="item in itens" :key="item">
                    <div class="product-card">
                            <img :src="item.urlFotoItem" class="product-img" alt="">
                            <h5 class="card-title text-light mt-1">{{item.descItem}}</h5>
                            <span class="card-text text-light mt-5">{{item.marcaDoItem}}</span>
                            <p  class="card-text text-light mt-2">{{item.modeloItem}}</p>
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

.product-card > .product-img {
    display: flex;
    justify-content: start;
}

.product-img {
    width: 75px;
    height: 70px;
    border-radius: 10px;
}
</style>