<template>
    <router-view></router-view>
    <transition name="header">
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-5">
                    <div class="col-12 p-5 ">
                            <section>
                                <h4 class="text-primary">Login</h4>
                                <label for="" class="label-control text-secondary">Não possui uma conta?</label>
                                <router-link class="btn btn text-secondary" to="/cadastro">Cadastre-se</router-link>
                                <vee-form id="form-cadastro-colaboradores" @submit="autenticaLogin" :validation-schema="schema" v-slot="{ errors }">
                                    <div class="form-group mt-2">
                                        <label class="label-control">E-Mail</label>
                                        <vee-field type="email" name="email" class="form-control" v-model="login.email"/>
                                        <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                                    </div>
                                    <div class="form-group">
                                        <label class="label-control">Senha</label>
                                        <vee-field type="password" name="senha" class="form-control" v-model="login.senha"/>
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
</transition>
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
        getUsuarios(){
            return this.$store.state.usuarios
        },
        autenticaLogin(){
            this.$store.commit('autenticaLogin/autenticaLogin', this.login)
            this.$router.push('/inventario')
        },
        emConstrucao(){
            alert('Funcionalidade em construção...')
        }
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