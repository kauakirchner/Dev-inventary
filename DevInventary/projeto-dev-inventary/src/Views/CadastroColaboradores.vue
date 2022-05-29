<template>
    <transition name="header">
        <div class="container-fluid">
            <router-view></router-view>
            <h4 class="text-primary">Preencha os campos para cadastrar</h4>
            <div class="row">
                <div class="col-12">
                <vee-form id="form-cadastro-colaboradores" @submit="save" :validation-schema="schema" v-slot="{ errors }">
                    <h6 class="mt-4 text-dark">Dados pessoais</h6>
                    <div class="row mt-4">
                    <div class="col-2">
                            <label class="label-control text-secondary">Nome</label>
                            <vee-field type="text" class="form-control form-control-sm"  name="nome" v-model="colaborador.nome"/>
                            <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>  
                    </div>
                        <div class="col-2">
                            <label class="label-control text-secondary">Gênero</label>
                            <vee-field type="text" class="form-control form-control-sm" name="genero" v-model="colaborador.genero"/>
                            <span class="text-danger" v-text="errors.genero" v-show="errors.genero"></span>
                        </div>
                        <div class="col-2">
                            <label class="label-control text-secondary">Data de nascimento</label>
                            <vee-field type="date" class="form-control form-control-sm" name="idade" v-model="colaborador.idade"/>
                            <span class="text-danger" v-text="errors.idade" v-show="errors.idade"></span>
                        </div>
                    </div>
                        <div class="row mt-4">
                            <div class="col-2">
                                <label class="label-control text-secondary">Telefone</label>
                                <vee-field type="text" class="form-control form-control-sm" name="telefone" v-model="colaborador.telefone" v-mask="'(##) #####-####'"/>
                                <span class="text-danger" v-text="errors.telefone" v-show="errors.telefone"></span>
                            </div>
                            <div class="col-2">
                                <label class="label-control text-secondary">E-mail</label>
                                <vee-field type="email" class="form-control form-control-sm" name="email" v-model="colaborador.email"/>
                                <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                            </div>
                            <div class="col-2">
                                <label class="label-control text-secondary">Cargo</label>
                                <vee-field type="text" class="form-control form-control-sm" name="cargo" v-model="colaborador.cargo"/>
                                <span class="text-danger" v-text="errors.cargo" v-show="errors.cargo"></span>
                            </div>
                        </div>
                            <h6 class="mt-4 text-dark">Dados Endereço</h6>
                        <div class="row">
                            <div class="col-2">
                                <label class="label-control text-secondary">Cep</label>
                                <vee-field type="text" class="form-control form-control-sm" name="cep" v-model="colaborador.cep" v-mask="'#####-###'"/>
                                <span class="text-danger" v-text="errors.cep" v-show="errors.cep"></span>
                            </div>
                            <div class="col-2">
                                <label class="label-control text-secondary">Cidade</label>
                                <vee-field type="text" class="form-control form-control-sm" name="cidade" v-model="colaborador.cidade"/>
                                <span class="text-danger" v-text="errors.cidade" v-show="errors.cidade"></span>
                            </div>
                            <div class="col-2">
                                <label class="label-control text-secondary">Estado</label>
                                <vee-field type="text" class="form-control form-control-sm" name="estado" v-model="colaborador.estado"/>
                                <span class="text-danger" v-text="errors.estado" v-show="errors.estado"></span>
                            </div>
                        </div>
                            <div class="row">
                                <div class="col-2">
                                    <label class="label-control text-secondary">Logradouro</label>
                                    <vee-field type="text" class="form-control form-control-sm" name="logradouro" v-model="colaborador.logradouro"/>
                                    <span class="text-danger" v-text="errors.logradouro" v-show="errors.logradouro"></span>
                                </div>
                                <div class="col-2">
                                    <label class="label-control text-secondary">Número</label>
                                    <vee-field type="number" class="form-control form-control-sm" name="numero" v-model="colaborador.numero"/>
                                    <span class="text-danger" v-text="errors.numero" v-show="errors.numero"></span>
                                </div>
                            
                                <div class="col-2">
                                    <label class="label-control text-secondary">Complemento</label>
                                    <vee-field type="text" class="form-control form-control-sm" name="complemento" v-model="colaborador.complemento"/>
                                    <span class="text-danger" v-text="errors.complemento" v-show="errors.complemento"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    <label class="label-control text-secondary">Bairro</label>
                                    <vee-field type="text" class="form-control form-control-sm" name="bairro" v-model="colaborador.bairro"/>
                                    <span class="text-danger" v-text="errors.bairro" v-show="errors.bairro"></span>
                                </div>
                                <div class="col-2">
                                    <label class="label-control text-secondary">Ponto de referência</label>
                                    <vee-field type="text" class="form-control form-control-sm"  name="referencia" v-model="colaborador.referencia"/>
                                    <span class="text-danger" v-text="errors.referencia" v-show="errors.referencia"></span>
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col-2 mt-5">
                                    <button class="btn btn-outline-success">Salvar</button>
                                </div>
                                <div class="col-2 mt-5">
                                    <button class="btn btn-outline-warning" type="reset">Limpar</button>
                                </div>
                            </div>        
                </vee-form>
                </div>
            </div>
        </div>
  </transition>
</template>

<script>
import axios from 'axios'
import {mask} from 'vue-the-mask'
import {Form, Field} from 'vee-validate'
import '../Validate'

export default {
    directives:{
        mask
    },
    components:{
        'vee-form': Form,
        'vee-field': Field
    },
  data(){
      const schema = {
        nome: 'required',
        genero: 'required',
        idade: 'required',
        telefone: 'required',
        email: 'required|emailValidation',
        cargo: 'required',
        cep: 'required|minLengthCep:8',
        cidade: 'required',
        estado: 'required',
        logradouro: 'required',
        numero: 'required',
        complemento: 'required',
        bairro: 'required',
        referencia: 'required',
      }
      return{
        schema,
        colaboradores:[],
        colaborador:{}
      }
  },
  methods:{
      //Puxando a função que insere colabores no localStorage e faz a consulta ViaCeps
      save(){
        this.colaborador.id = new Date().getTime()
        this.$store.commit('cadastroColaborador/insertColaborador', this.colaborador)
            axios.get(`https://viacep.com.br/ws/${this.colaborador.cep}/json/`).then((response) =>{
                this.colaborador.cep = response.data
            }).catch((error) =>{
                return error
            })
            alert('Cadastro realizado com sucesso')
        
      },
  }
}
</script>

<style>
.header-leave-to,
.header-enter-from{
    opacity: 0;
    font-size: 0px;
}
.header-leave-from,
.header-enter-to{
    opacity: 1;
}
.header-move,.header-enter-active,.header-leave-active{
    transition:all 2s;
}
</style>