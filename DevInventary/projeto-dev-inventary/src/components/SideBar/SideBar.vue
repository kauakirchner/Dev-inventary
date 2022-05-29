<template>
<div v-if="mostrarSideBar">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 100%">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">DevInventary</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Geral
            </a>
          </li>
          <hr>
          <li>
            <router-link to="/inventario" class="btn btn-outline-primary">
            Inventário
            </router-link>
          </li>
          <li>
            <router-link to="/" class="btn btn-outline-primary mt-2">
                Sair
            </router-link>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Colaboradores
            </a>
          </li>
          <li>
            <router-link to="/cadastroColaboradores" class="btn btn-outline-primary">
              Cadastrar
            </router-link>
          </li>
          <li>
            <router-link to="/listaColaboradores" class="btn btn-outline-primary mt-2">Listar</router-link>
          </li>
            <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Produto
            </a>
          </li>
          <li>
              <router-link to="/cadastroProduto" class="btn btn-outline-primary">Cadastrar</router-link>
          </li>
          <li>
              <router-link to="/emprestimoItem" class="btn btn-outline-primary mt-2">Empréstimo</router-link>
          </li>
          <hr>
          <li>
              <button class="btn btn-outline-primary" @click="mostrarSideBar = !mostrarSideBar">Esconder sidebar</button>
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
 
}

</script>

<style>
.sidebar-container{
    height: 100%;
    width: 100%;
    background-color: rgba(46, 51, 202, 0.987);
}
</style>