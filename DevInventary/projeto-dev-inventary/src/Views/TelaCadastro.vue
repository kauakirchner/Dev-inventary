<template>
    <div class="container-fluid bg-white">
        <div class="row justify-content-md-center">
            <div class="col-5">
                <div class="col-12 mt-5">
                    <section>
                        <h4 class="text-primary">Cadastre-se</h4>
                        <vee-form id="form-cadastro-colaboradores" @submit="save" :validation-schema="schema" v-slot="{ errors }">
                            <div class="form-group mt-5">
                                <label class="label-control text-secondary">Email</label>
                                <vee-field type="email" name="email" class="form-control" v-model="usuario.email"/>
                                <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                            </div>
                            <div class="form-group">
                                <label class="label-control text-secondary">Senha</label>
                                <vee-field type="password" name="senha" class="form-control" v-model="usuario.senha"/>
                                <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
                            </div>
                            <div class="form-group">
                                <label class="label-control text-secondary">Confirme sua senha</label>
                                <vee-field type="password" name="senhaConfirmada" class="form-control" v-model="usuario.senhaConfirmada"/>
                                <span class="text-danger" v-text="errors.senhaConfirmada" v-show="errors.senhaConfirmada"></span>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <button type="submit" class="btn btn-outline-primary mt-3">Cadastrar</button>
                                </div>
                            </div>
                        </vee-form>   
                    </section>
                </div>
            </div>
            <div class="col-7">
                <div class="col-12">
                    <img src="../assets/imgCadastro.jpg" alt="" class="img-fluid">
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
        'vee-form': Form,
        'vee-field': Field
    },
    data(){
        const schema = {
            email: 'emailValidation',
            senha: 'required|minLength:8',
            senhaConfirmada: 'required|confirmed:senha'
        }

        return{
            schema,
            cadastrado: false,
            usuarios:[],
            usuario:{
                email: null,
                senha: null,
                senhaConfirmada: null
            },
            
        }
    },
    methods:{
        save(){
            this.$store.commit('cadastroUsuario/cadastrarNovoUsuario', this.usuario)
            this.$store.commit('cadastroUsuario/verificaSenhaConfirmada', this.usuario)
            this.$router.push('/')
        },
        getUsuarios(){
            return this.$store.state.usuarios
        },
        getCadastrado(){
            return this.$store.state.cadastrado
        }         
        
    }
}
</script>

<style>

</style>