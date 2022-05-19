<template>
  <div class="container">
      <router-view></router-view>
      <h1>Preencha os campos para cadastrar</h1>
      <div class="form mx-4">
           <vee-form id="form-cadastro-colaboradores" @submit="save" :validation-schema="schema" v-slot="{ errors }">
              <h3 class="my-4">Dados pessoais</h3>
              <div class="col-2">
                    <label class="form-label" name="nome">Nome Completo</label>
                    <vee-field type="text" class="form-control"  name="nome" v-model="usuario.nome"/>
                    <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>  <!--usar esse cara aqui pra se o campo não for preenchido corretamente --> 
              </div>
                <div class="col-2">
                    <label class="form-label" name="genero">Gênero</label>
                    <vee-field type="text" class="form-control" name="genero" v-model="usuario.genero"/>
                    <span class="text-danger" v-text="errors.genero" v-show="errors.genero"></span>
                </div>
                <div class="col-2">
                    <label class="form-label" name="idade">Data De Nascimento</label>
                    <vee-field type="date" class="form-control" name="idade" v-model="usuario.idade"/>
                    <span class="text-danger" v-text="errors.idade" v-show="errors.idade"></span>
                </div>
                <div class="row my-4">
                    <div class="col-2">
                        <label class="form-label" name="telefone">telefone</label>
                        <vee-field type="number" class="form-control" name="telefone" v-model="usuario.telefone"/>
                        <span class="text-danger" v-text="errors.telefone" v-show="errors.telefone"></span>
                    </div>
                    <div class="col-2">
                        <label class="form-label" name="email">E-mail</label>
                        <vee-field type="email" class="form-control" name="email" v-model="usuario.email"/>
                        <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                    </div>
                    <div class="col-2">
                        <label class="form-label" name="cargo">Cargo</label>
                        <vee-field type="text" class="form-control" name="cargo" v-model="usuario.cargo"/>
                        <span class="text-danger" v-text="errors.cargo" v-show="errors.cargo"></span>
                    </div>
                </div>
                    <h3 class="my-4">Dados Endereço</h3>
                    <div class="col-2">
                        <label class="form-label" name="cep">Cep</label>
                        <vee-field type="number" class="form-control" name="cep" v-model="usuario.endereco.cep"/>
                        <span class="text-danger" v-text="errors.cep" v-show="errors.cep"></span>
                    </div>
                    <div class="col-2">
                        <label class="form-label" name="cidade">Cidade</label>
                        <vee-field type="text" class="form-control" name="cidade" v-model="usuario.endereco.cidade"/>
                        <span class="text-danger" v-text="errors.cidade" v-show="errors.cidade"></span>
                    </div>
                    <div class="col-2">
                        <label class="form-label" name="estado">Estado</label>
                        <vee-field type="text" class="form-control" name="estado" v-model="usuario.endereco.estado"/>
                        <span class="text-danger" v-text="errors.estado" v-show="errors.estado"></span>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label class="form-label" name="logradouro">Logradouro</label>
                            <vee-field type="text" class="form-control" name="logradouro" v-model="usuario.endereco.logradouro"/>
                            <span class="text-danger" v-text="errors.logradouro" v-show="errors.logradouro"></span>
                        </div>
                        <div class="col-2">
                            <label class="form-label" name="numero">Número</label>
                            <vee-field type="number" class="form-control" name="numero" v-model="usuario.endereco.numero"/>
                            <span class="text-danger" v-text="errors.numero" v-show="errors.numero"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label class="form-label" name="complemento">Complemento</label>
                            <vee-field type="text" class="form-control" name="complemento" v-model="usuario.endereco.complemento"/>
                            <span class="text-danger" v-text="errors.complemento" v-show="errors.complemento"></span>
                        </div>
                        <div class="col-2">
                            <label class="form-label" name="bairro">Bairro</label>
                            <vee-field type="text" class="form-control" name="bairro" v-model="usuario.endereco.bairro"/>
                             <span class="text-danger" v-text="errors.bairro" v-show="errors.bairro"></span>
                        </div>
                        <div class="col-2">
                            <label class="form-label"  name="referencia" >Ponto de referência</label>
                            <vee-field type="text" class="form-control"  name="referencia" v-model="usuario.endereco.referencia"/>
                            <span class="text-danger" v-text="errors.referencia" v-show="errors.referencia"></span>
                        </div>
                    </div>         
          </vee-form>
          <div class="row">
              <div class="col-2">
                  <button type="submit" class="btn btn-success my-3">Enviar</button>
              </div>
               <div class="col-2">
                  <button type="button" class="btn btn-warning my-3">Limpar</button>
              </div>
          </div>
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
          nome: 'required',
          genero: 'required',
          idade: 'required',
          telefone: 'required',
          email: 'required',
          cargo: 'required',
          cep: 'required',
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
          usuario:{
            endereco:{}    
          }
      }
  }
}
</script>

<style>

</style>