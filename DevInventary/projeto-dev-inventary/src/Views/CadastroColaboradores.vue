<template>
  <div class="container">
      <router-view></router-view>
      <h1>Preencha os campos para cadastrar</h1>
      <div class="form mx-4">
          <form class="row">
              <h3 class="my-4">Dados pessoais</h3>
              <div class="col-2">
                  <label class="form-label">Nome Completo</label>
                  <input type="text" class="form-control">
              </div>
                <div class="col-2">
                    <label class="form-label">Gênero</label>
                    <input type="text" class="form-control ">
                </div>
                  <div class="col-2">
                    <label class="form-label">Data De Nascimento</label>
                    <input type="date" class="form-control ">
                </div>
                <div class="row my-4">
                     <div class="col-2">
                        <label class="form-label">telefone</label>
                        <input type="number" class="form-control">
                    </div>
                     <div class="col-2">
                        <label class="form-label">E-mail</label>
                        <input type="email" class="form-control">
                    </div>
                     <div class="col-2">
                        <label class="form-label">Cargo</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                    <h3 class="my-4">Dados Endereço</h3>
                     <div class="col-2">
                        <label class="form-label">Cep</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="col-2">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-2">
                        <label class="form-label">Estado</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-2">
                        <label class="form-label">Logradouro</label>
                        <input type="text" class="form-control">
                        </div>
                        <div class="col-2">
                        <label class="form-label">Número</label>
                        <input type="number" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label class="form-label">Complemento</label>
                            <input type="text" class="form-control">
                        </div>
                           <div class="col-2">
                            <label class="form-label">Bairro</label>
                            <input type="text" class="form-control">
                        </div>
                           <div class="col-2">
                            <label class="form-label">Ponto de referência</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>         
          </form>
          <div class="row">
              <div class="col-2">
                  <button type="button" class="btn btn-success my-3">Enviar</button>
              </div>
               <div class="col-2">
                  <button type="button" class="btn btn-warning my-3">Limpar</button>
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