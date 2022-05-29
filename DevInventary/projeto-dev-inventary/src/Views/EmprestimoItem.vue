<template>
  <div class="container-fluid">
      <div class="container mt-3">
          <div class="content input-group">
              <input type="text" class="w-75 form-control">
              <select class="badge bg-primary text-white text-center">
                  <option>Código de Patrimonio</option>
                    <option>
                      Pelo título
                    </option>
                    <option>
                        Pela Categoria</option>
                    <option>
                        Pelo Colaborador
                    </option>
                </select>
            </div>
            <hr>
            <h4>Lista de Itens</h4>
            <p class="text-danger">
                Não há itens cadastrados - 
                <router-link to="/cadastroProduto" class="btn btn-outline-danger">
                Realizar novo cadastro
                </router-link>
            </p>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>