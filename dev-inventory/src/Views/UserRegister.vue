<template>
    <div class="register-container">
        <router-view></router-view>
        <div class="fields">
            <vee-form id="form-cadastro-usuario" @submit="save" :validation-schema="schema" v-slot="{ errors }" class="form-container">
                <h4 class="text-primary">Cadastre-se</h4>
                <div class="email-field">
                    <label class="label-control text-secondary">Email</label>
                    <vee-field type="email" name="email" class="form-control input-field" v-model="usuario.email"/>
                    <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                </div>
                <div class="password-field">
                    <label class="label-control text-secondary">Senha</label>
                    <vee-field type="password" name="senha" class="form-control input-field" v-model="usuario.senha"/>
                    <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
                </div>
                <div class="password-field">
                    <label class="label-control text-secondary">Confirme sua senha</label>
                    <vee-field type="password" name="senhaConfirmada" class="form-control input-field" v-model="usuario.senhaConfirmada"/>
                    <span class="text-danger" v-text="errors.senhaConfirmada" v-show="errors.senhaConfirmada"></span>
                </div>
                <div class="form-submit">
                    <button type="submit" class="btn btn-outline-primary mt-3">Cadastre-se</button>
                </div>
            </vee-form>
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
            usuario:{}
        }
    },
    methods:{
        save(){
            this.$store.commit('cadastroUsuario/cadastrarNovoUsuario', this.usuario)
            alert('Cadastro efetuado com sucesso!')
            this.$router.push('/')
        },
        
    },
    computed:{
        usuarios(){
            return this.$store.state.cadastroUsuario.usuarios
        },
        cadastrado(){
            return this.$store.state.cadastroUsuario.cadastrado
        }         
    }
}
</script>

<style>
.btn-outline-primary:hover {
    transform: scale(1.05);
}
</style>