<template>
    <router-view></router-view>
    <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="col-5">
                <div class="col-12 p-5 ">
                    <section>
                        <h4 class="text-primary">Login</h4>
                        <vee-form id="form-cadastro-colaboradores" @submit="autenticaUsuario" :validation-schema="schema" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="label-control">E-Mail</label>
                                <vee-field type="email" name="email" class="form-control" v-model="usuario.email"/>
                                <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                            </div>
                            <div class="form-group">
                                <label class="label-control">Senha</label>
                                <vee-field type="password" name="senha" class="form-control" v-model="usuario.senha"/>
                                <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <a href="" @click="emConstrucao">Esqueceu a senha</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" id="inptEntrar">
                                    <button type="submit" class="btn btn-outline-primary mt-3">Entrar</button>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn mt-3" @click="emConstrucao">Google</button>
                                </div>
                            </div>
                        </vee-form>
                </section> 
             </div>
            </div>
             <div class="col-7">
                    <div class="col-12">
                        <img src="../assets/imgLogin.jpg" class="img-fluid" alt="">
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {Form, Field} from 'vee-validate'
import  '../Validate'
export default {
    components:{
        'vee-field': Field,
        'vee-form': Form,
    },
    data(){
        const schema = {
            email: 'required',
            senha: 'required'
        }

        return{
            usuarios:[],
            usuario:{},
            schema
        }
    },
    methods:{
        getUsuarios(){
            return this.$store.state.usuarios
        },
        emConstrucao(){
            alert('Funcionalidade em construção...')
        }
    }
}
</script>

<style>


</style>