<template>
  <div class="container-fluid">
      <router-view></router-view>
      <div class="row g-3">
          <h4 class="text-primary text-center mt-4">Preencha os campos para cadastrar</h4>
          <div class="col-4">
             <label for="" class="label-control text-secondary">Código do patrimônio</label>
             <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-4">
            <label for="" class="label-control text-secondary">Título do item</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-4">
            <label for="" class="label-control text-secondary">Categoria do item</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row g-3">
          <div class="col-4">
            <label for="" class="label-control text-secondary">Valor</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-4">
            <label for="" class="label-control text-secondary">Url da foto</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row g-3">
          <div class="col-4">
            <label for="" class="label-control text-secondary">Marca</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-4">
            <label for="" class="label-control text-secondary">Modelo</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row g-3">
          <div class="col-4">
            <label for="" class="label-control text-secondary">Descrição</label>
            <input type="text" class="form-control form-control-lg">
          </div>
      </div>
      <div class="row g-3">
          <div class="col-4 mt-5">
            <button class="btn btn-outline-success">Salvar</button>
            
          </div>
          <div class="col-4 mt-5">
            <button class="btn btn-outline-warning">Limpar</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>