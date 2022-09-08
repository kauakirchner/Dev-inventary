<template>
  <div class="container-main app-container">
    <NavBar/>
    <div class="container-side-bar">
      <SideBar/>
    </div>
    <div class="container-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar/SideBar.vue'
import NavBar from './components/header/NavBar/NavBar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  width: 100vw;
  /* background-color: rgba(1,1,1, 0.10); */
  
}
.container-main{
  display: flex;
  width: 100%;
  height: 86vh;
}
.container-side-bar{
  flex: 15;
}

.container-router{
  flex: 85;
}

.app-container {
  margin-top: 90px;
}
.stepsContainer {
    max-width: 900px;
    padding: 20px;
    margin: 125px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    animation-name: go-top;
    animation-duration: 6s;
    animation: fade-in-animation;
    animation-duration: 2.25s;
  }
</style>
