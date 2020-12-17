<template>
  <div id="app">
  <navega></navega>
  <router-view/>
    <piepagina> </piepagina>
  
  </div>
</template>
<script>
import navega from './components/navbar.vue'
import Piepagina from './components/piepagina.vue'
import { ConexApi} from './config/conexion'

export default {
  name: 'App',
  components: { navega, Piepagina},
  mounted() {
    conexApi();
  },

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
