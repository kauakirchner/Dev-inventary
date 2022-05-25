<template>
    <router-view></router-view>
  <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-12">
              <h4 class="text-primary main-title">Digite o nome do colaborador para buscar</h4>
              <div class="row-mt-2">
                  <div class="col-3">
                      <input type="text" class="form-control form-control-sm" placeholder="digite o nome do colaborador"> 
                  </div>
              </div>
                <div class="col mt-2">
                    <button class="btn btn-outline-primary">Buscar</button>
                </div>
                <div class="col-md-3 mt-3">
                    <div class="card">
                       <div class="card-body">
                            <!--Img gravatar-->
                            <h5 class="card-title">Nome da pessoa</h5>
                            <span class="card-text text-secondary">Email</span>
                            <p  class="card-text text-secondary">Numero</p>
                            <h6  class="card-title">Cargo</h6>
                        </div>
                    </div>
                </div>
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