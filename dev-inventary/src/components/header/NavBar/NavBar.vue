<template>
      <header id="header">
        <a id="logo" href="" data-aos="fade-right"><img src="" alt=""></a>
        <nav id="nav" >
            <input type="checkbox" id="btn-mobile" aria-label="Abrir menu" aria-controls="menu" aria-expanded="false" aria-haspopup="true">
                <span id="hamburger"></span>
            <ul id="menu" role="menu">
                <li class="">
                    <router-link to="Inventario" style="font-weight: 700;">Sair</router-link>
                </li> 
                <li class=""></li> 
                <li class="scroll_projetos"></li>
                <li class=""></li>
                <li class=""></li>
                <div class="social-container">
                   <div class="row">
                     <span class="text-white">Olá, {{getEmail}}</span>
                   </div>
                </div>
            </ul>
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
ul{
    margin: 0px;
    padding: 0px;
}

a{
    color: white;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
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
  .social-container{
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  
#li-activate{
    color: #018035;
    transform: scale(1.025);
    transition: 0.23s ease-in-out;
    transition-delay: .2s;
    border-bottom: 5px solid #018035;
}

#li-activate:hover {
    color: #018035;
    transform: scale(1.040);
    transition: 0.23s ease-in-out;
    transition-delay: .2s;
    border-bottom: 6px solid #018035;
}

#logo>img{
    height: 120px;
    transition: all 0.3s ease-in-out;
}

#logo>img:hover{
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

#btn-mobile {
    display: none;
    left: auto;
    width: 34px;
    height: 32px;
    padding: 0px;
    margin: -4px 0px 0px -4px;
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

    #btn-mobile{
        position: absolute;
        opacity: 0;
        display: flex;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: .5rem;
        z-index: 10000;
    }

    #hamburger{
        color: white;
        display: block;
        border-top: 3px solid;
        width: 25px;
    }
    #hamburger::after, #hamburger::before{
        content:'';
        display: block;
        width: 25px;
        height: 3px;
        background: currentColor;
        margin-top: 5px;
        transition: .4s ease-in-out;
        position: relative;
    }

    #nav.active #hamburger {
        border-top-color: transparent;
    }

    #nav.active #hamburger::before{
        transform: rotate(-135deg); 
        color: rgb(167, 241, 5);
        top: 4px;
    } 

    #nav.active #hamburger::after{
        transform: rotate(135deg);
        color: rgb(167, 241, 5);
        top: -4px;
    }
}

.gravatar{
    width: 4vw;
    height: 8vh;
}
.NavImg{
    width: 6vw;
    height: 12vh;
}
.header-leave-to,
.header-enter-from{
    opacity: 0;
    font-size: 0px;
}
.header-leave-from,
.header-enter-to{
    opacity: 1;
}
.header-enter-active,.header-leave-active{
    transition:all 2s;
}
</style>