<template>
        <header id="header" v-if="autenticado">
            <div class="navbar-container">
                <div class="img-container">
                    <img src="../../../assets/NavImg.jpg" alt="" id="logo">
                </div>
            </div>
            <nav id="nav" >
                <span id="hamburger"></span>
                <div class="row">
                    <div class="email-container">
                        <div class="user-email-container">
                            <ul id="menu" role="menu">
                                <vue-gravatar class="gravatar" email="{{colaborador.email}}"></vue-gravatar>
                                <li class="text-light"><span>{{"Olá, " + getEmail}}</span></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
</template>

<script>
export default {
    name: 'NavBar',
     computed:{
        getEmail(){
           return this.$store.state.autenticaLogin.email
       },
       autenticado(){
           return this.$store.state.autenticaLogin.autenticado
       },
    },
   mounted(){
       this.$store.commit('autenticaLogin/getEmail'),
       this.$store.state.autenticaLogin.autenticado = localStorage.getItem('loginUsuario') ? true : false
    
   }
}
</script>

<style scoped>

@keyframes fade-in-bar-animation {
  from{
    opacity: 0;
    width: 0%;
    font-size: 5px;
  }
  to{
    opacity: 1;
    width: 100%;
    transition: all 2s;
  }
}

.img-container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.navbar-container {
    width: 70%;
}

.email-container {
    width: 100%;
}

.user-email-container {
    width: 100%;
    flex-wrap: nowrap;
}
ul{
    margin: 0px;
    padding: 0px;
}


li:hover{
    color: #287CD0;
    transform: scale(1.025);
    transition: 0.23s ease-in-out;
    transition-delay: .2s;
    border-bottom: 4px solid #287CD0;
}

#logo{
    height: 80px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
}

#logo:hover{
    transform: scale(1.025);
    transition: all 0.3s ease-in-out;
}

#header{
    box-sizing: border-box;
    width: 100vw;
    height: 90px;
    font-size: large;
    padding: 0px 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: #111;
    opacity: .90;
    animation: fade-in-bar-animation;
    animation-duration: 2s;
}

#menu{
    display: flex;
    list-style: none;
    gap: 1rem;
}

@media (max-width: 900px){

    #logo{
        font-size: 15px;
    }

    #header{
        padding: 0px 2rem;
        justify-content: space-between;
    }

    #menu{
        padding-top: 50px;
        display: block;
        position: absolute;
        width: 100vw;
        height: 0px;
        top: 85px;
        right: -17px;
        background-color: black;
        text-align: center;
        visibility: hidden;
        overflow-y: hidden;
        transition: all 0.4s ease-in-out;
    }
}

.gravatar{
    width: 4vw;
    height: 8vh;
}

.gravatar:hover {
    transform: scale(1.040);
    box-shadow: 5px 5px 8px rgba(1, 1, 1, .90);
    transition: .2s;
    transition-delay: .2s;
}
</style>