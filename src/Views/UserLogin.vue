<template>
    <div class="login-container">
        <router-view></router-view> 
        <div class="fields">
            <vee-form id="form-login" @submit="autenticaLogin" :validation-schema="schema" v-slot="{ errors }" class="form-container">
                <h4 class="text-primary">Login</h4>
                <label for="" class="label-control text-secondary">Não possui uma conta?</label>
                <router-link class="btn btn text-secondary" to="/user-register">Cadastre-se</router-link>
                <div class="email-field">
                    <label class="label-control text-secondary">E-Mail</label>
                    <vee-field type="email" name="email" class="form-control input-field" v-model="login.email"/>
                    <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                </div>
                <div class="password-field">
                        <label class="label-control text-secondary">Senha</label>
                        <vee-field type="password" name="senha" class="form-control input-field" v-model="login.senha"/>
                        <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
                </div>
                <div class="row mt-2">
                    <a href="" @click="emConstrucao">Esqueceu a senha</a>
                </div>
                <div class="form-submit">
                    <button type="submit" class="btn btn-outline-primary mt-3">Entrar</button>
                    <button type="button" class="btn btn-outline-white mt-3 google-btn text-light" @click="emConstrucao">Entrar com Google</button>
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
        'vee-field': Field,
        'vee-form': Form,
    },
    data(){
        const schema = {
            email: 'required',
            senha: 'required'
        }

        return{
            login:{},
            schema
        }
    },
    methods:{
        autenticaLogin(){
            this.$store.commit('autenticaLogin/autenticaLogin', this.login)
            this.$router.push('/inventory')
        },
        emConstrucao(){
            alert('Funcionalidade em construção...')
        }
    },
    computed:{
        usuarios(){
            return this.$store.state.cadastroUsuarios.usuarios
        },
    }
}
</script>

<style>
@keyframes fade-in-animation{
  from{
    opacity: 0;
    width: 0%;
    font-size: 5px;
  }
  to{
    opacity: 1;
    width: 600px;
    transition: all 2s;
  }
}
.form-container {
    width: 600px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background-color: #111;
    animation: fade-in-animation;
    animation-duration: 2.25s;
  }

  .input-field {
    max-width: 500px;
  }
  
  .password-field {
    margin-top: 15px;
  }

  .google-btn {
    margin-left: 5px;
  }

</style>