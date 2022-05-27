<template>
  <div class="container-fluid">
      <router-view></router-view>
      <vee-form id="form-cadastro-colaboradores" @submit="save" :validation-schema="schema" v-slot="{ errors }">
        <div class="row g-3">
          <h4 class="text-primary text-center mt-4">Preencha os campos para cadastrar</h4>
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Código do patrimônio</label>
                  <vee-field type="text" name="cdgPatrimonio" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.cdgPatrimonio" v-show="errors.cdgPatrimonio"></span>
                </div>
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Título do item</label>
                  <vee-field type="text" name="tituloItem" class="form-control form-control-sm">
                  <span class="text-danger" v-text="errors.tituloItem" v-show="errors.tituloItem"></span>
                </div>
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Categoria do item</label>
                  <vee-field type="text" name="categoriaItem" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.categoriaItem" v-show="errors.categoriaItem"></span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Valor</label>
                  <vee-field type="text" name="valorItem" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.valorItem" v-show="errors.valorItem"></span>
                </div>
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Url da foto</label>
                  <vee-field type="text" name="urlFotoItem" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.urlFotoItem" v-show="errors.urlFotoItem"></span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Marca</label>
                  <vee-field type="text" name="marcaDoItem" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.marcaDoItem" v-show="errors.marcaDoItem"></span>
                </div>
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Modelo</label>
                  <vee-field type="text" name="modeloItem" class="form-control form-control-sm"/>
                  <span class="text-danger" v-text="errors.modeloItem" v-show="errors.modeloItem"></span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-4">
                  <label for="" class="label-control text-secondary">Descrição</label>
                  <vee-field type="text" name="descItem" class="form-control form-control-lg"/>
                  <span class="text-danger" v-text="errors.descItem" v-show="errors.descItem"></span>
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
      </vee-form>
      
  </div>
</template>

<script>
import {Form, Field} from 'vee-validate'
import '../Validate'
export default {
    components:{
        'vee-form': Form,
        'vee-field': Field
    },
    data(){
      const schema = {
        cdgPatrimonio: 'required',
        tituloItem: 'required',
        categoriaItem: 'required',
        valorItem: 'required',
        urlFotoItem: 'required',
        marcaDoItem: 'required',
        modeloItem: 'required',
        descItem: 'required',
      }
      return{
        schema
      }
    }
}
</script>

<style>

</style>