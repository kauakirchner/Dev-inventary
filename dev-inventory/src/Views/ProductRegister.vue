<template>
  <div class="form-product-register">
    <router-view></router-view>
    <div class="fields">
        <vee-form id="form-cadastro-item" @submit="insertItem" :validation-schema="schema" v-slot="{ errors }" class="form-product-container">
            <span class="text-primary text-lg">Preencha os campos para cadastrar</span>
            <div class="row mt-3">
                <div class="col">
                    <label for="" class="label-control text-secondary">Código do patrimônio</label>
                    <vee-field type="number" name="cdgPatrimonio" class="form-control form-control-sm" v-model="item.cdgPatrimonio"/>
                    <span class="text-danger" v-text="errors.cdgPatrimonio" v-show="errors.cdgPatrimonio"></span>
                </div>
                <div class="col">
                    <label for="" class="label-control text-secondary">Título do item</label>
                    <vee-field type="text" name="tituloItem" class="form-control form-control-sm" v-model="item.tituloItem" />
                    <span class="text-danger" v-text="errors.tituloItem" v-show="errors.tituloItem"></span>
                </div>
                <div class="col">
                    <label for="" class="label-control text-secondary">Categoria do item</label>
                    <vee-field type="text" name="categoriaItem" class="form-control form-control-sm" v-model="item.categoriaItem"/>
                    <span class="text-danger" v-text="errors.categoriaItem" v-show="errors.categoriaItem"></span>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                     <label for="" class="label-control text-secondary">Valor</label>
                    <vee-field type="number" name="valorItem" class="form-control form-control-sm" v-model="item.valorItem"/>
                    <span class="text-danger" v-text="errors.valorItem" v-show="errors.valorItem"></span>
                </div>
                <div class="col">
                    <label for="" class="label-control text-secondary">Url da foto</label>
                    <vee-field type="text" name="urlFotoItem" class="form-control form-control-sm" v-model="item.urlFotoItem"/>
                    <span class="text-danger" v-text="errors.urlFotoItem" v-show="errors.urlFotoItem"></span>
                </div>
                <div class="col">
                    <label for="" class="label-control text-secondary">Marca</label>
                    <vee-field type="text" name="marcaDoItem" class="form-control form-control-sm" v-model="item.marcaDoItem"/>
                    <span class="text-danger" v-text="errors.marcaDoItem" v-show="errors.marcaDoItem"></span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="" class="label-control text-secondary">Modelo</label>
                    <vee-field type="text" name="modeloItem" class="form-control form-control-sm teste" v-model="item.modeloItem"/>
                    <span class="text-danger" v-text="errors.modeloItem" v-show="errors.modeloItem"></span>
                </div>
            </div>
                <div class="col">
                    <label for="" class="label-control text-secondary">Descrição</label>
                    <vee-field type="text" name="descItem" class="form-control form-control-lg" v-model="item.descItem"/>
                    <span class="text-danger" v-text="errors.descItem" v-show="errors.descItem"></span>
                </div>
            <div class="row mt-4">
                <div class="col-2">
                    <button class="btn btn-outline-success">Salvar</button>
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-secondary" type="reset">Limpar</button>
                </div>
            </div>
        </vee-form>
    </div>
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
        schema,
        item:{}
      }
    },
    methods:{
      insertItem(){
        this.item.id = new Date().getTime()
        this.$store.commit('cadastroItem/insertItem', this.item),
        alert('Cadastro realizado com sucesso')
      }
    },
    computed:{
      getItem(){
        return this.$store.state.itens
      }
    }
}
</script>

<style scoped>
.form-product-container {
    width: 900px;
    padding: 20px;
    border-radius: 15px;
    margin: 15px auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background-color: #111;
    animation: fade-in-colaborators-form;
    animation-duration: 2.25s;
    max-height: 100%;
}

.form-product-container > span {
    display: flex;
    justify-content: center;
}
</style>