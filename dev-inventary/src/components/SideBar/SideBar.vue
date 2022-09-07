<template>
<div v-if="mostrarSideBar">
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-container" v-if="autenticado">
            <span class="fs-4">DevInventary</span>
          <hr>
          <ul class="nav nav-pills flex-column justify-content-center">
              <li class="nav-item mb-3">
                Geral
              </li>
              <li>
                <router-link to="/inventario" class="side-link">Inventário</router-link>
              </li>
              <li>
                <router-link to="/" class="side-link mt-2" @click="logout">Sair</router-link>
              </li>
              <hr>
              <li class="nav-item mb-3 mt-3">
                Colaboradores
              </li>
              <li>
                <router-link to="/cadastroColaboradores" class="side-link">
                  Cadastrar
                </router-link>
              </li>
              <li>
                <router-link to="/listaColaboradores" class="side-link mt-2">Listar</router-link>
              </li>
              <li class="nav-item mb-3 mt-3">
                  Produto
              </li>
              <li>
                  <router-link to="/cadastroProduto" class="side-link">Cadastrar</router-link>
              </li>
              <li>
                  <router-link to="/emprestimoItem" class="side-link mt-2">Empréstimo</router-link>
              </li>
              <hr>
              <li>
                  <button class="btn side-link" @click="mostrarSideBar = !mostrarSideBar">Esconder Sidebar</button>
              </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    data(){
        return{
            mostrarSideBar: true
        }
    },
    methods:{
      logout(){
        this.$store.commit('autenticaLogin/logout')
      }
    },
    computed:{
        autenticado(){
           return this.$store.state.autenticaLogin.autenticado
       }
    },
    mounted(){
      this.$store.state.autenticaLogin.autenticado = localStorage.getItem('loginUsuario') ? true : false
    }
 
}

</script>

<style scoped>
.side-container{
    height: 80vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-right: 1px solid rgba(1, 1, 1, 0.80);
    border: 1px solid red;
}
.side-link {
     color: white;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    display: block;
    text-align: center;
    border: 1px solid #111;
    border-radius: 10px;
}

.side-link:hover {
    transform: scale(1.040);
    transition: 0.23s ease-in-out;
    transition-delay: .2s;
    background-color: #111;
    border-radius: 10px;;
}
</style>