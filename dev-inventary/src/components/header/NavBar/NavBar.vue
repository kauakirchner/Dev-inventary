<template>
      <!-- <header id="header" v-if="autenticado">
        <nav id="nav">
            <div class="img-container">
                <img src="../../../assets/NavImg.jpg" alt="" id="logo"> 
            </div>
            <div class="user-email-container">
                <ul id="menu">
                    <li class="">
                        <span class="text-white">Olá, {{getEmail}}</span>
                    </li>
                </ul>
            </div>
        </nav>
    </header> -->
        <header id="header">
            <div class="teste">
                <div class="img-container">
                    <img src="../../../assets/NavImg.jpg" alt="" id="logo">
                </div>
            </div>
            <nav id="nav" >
                <span id="hamburger"></span>
                <div class="teste-2">
                    <div class="user-email-container">
                        <ul id="menu" role="menu">
                            <li class="text-light"><span>Olá, {{getEmail}}</span></li> 
                        </ul>
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

.img-container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.teste {
    width: 70%;
}

.teste-2 {
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

a{
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
}

li a:hover{
    color: #018035;
    transform: scale(1.025);
    transition: 0.23s ease-in-out;
    transition-delay: .2s;
    border-bottom: 4px solid #018035;
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
}

#menu{
    display: flex;
    list-style: none;
    gap: 1rem;
    
}

#menu a{
    display: block;
    padding: 1.25rem;
    border-radius: 1px;
    transition: 0.3s ease-in-out;
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

    #nav.active #menu {
        height: 100vh;
        visibility: visible;
    }

    #menu a{
        max-width: 50vw;
        padding: 1.5rem;
        margin: 3rem auto;
        border-bottom: 2px solid rgb(97, 193, 62, 0.75);
        background-color: rgba(56, 56, 56, 0.35);
        box-shadow: 0px 0px 3px rgb(0, 0, 0, 1);
        text-align: center;
    }

    #menu a:hover{
        box-shadow: 0px 0px 12px rgb(97, 193, 62, 0.75);
        
    }

}

.gravatar{
    width: 4vw;
    height: 8vh;
}
</style>