<template>
  <div class="container-fluid">
      <router-view></router-view>
      <div class="row">
          <h4 class="text-primary text-center mt-4">Preencha os campos para cadastrar</h4>
          <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
             <label for="" class="label-control text-secondary">Código do patrimônio</label>
             <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Título do item</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Categoria do item</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Valor</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Url da foto</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Marca</label>
            <input type="text" class="form-control form-control-sm">
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Modelo</label>
            <input type="text" class="form-control form-control-sm">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <label for="" class="label-control text-secondary">Descrição</label>
            <input type="text" class="form-control form-control-lg">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 mt-3">
            <button class="btn btn-outline-success">Salvar</button>
            
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 mt-3">
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