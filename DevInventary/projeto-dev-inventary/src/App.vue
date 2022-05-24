<template>
  <div class="container-main">
    <div class="container-side-bar">
      <SideBar />
    </div>
    <div class="container-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  width: 100vw;
  
}
.container-main{
  display: flex;
  width: 100%;
  height: 100vh;
}
.container-side-bar{
  flex: 15;
}

.container-router{
  flex: 85;
}
</style>
