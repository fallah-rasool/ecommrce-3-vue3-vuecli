<template>
  <div id="app">
  
  <BeseHeader @show-sidBar="handelSidbar"/>
  
  <router-view />

  <BeasFooter  :showSidbar="isShowsidBar"/>

  </div>
</template>

<script>
import BeseHeader from './components/BeseHeader.vue'
import BeasFooter from './components/BeasFooter.vue'
export default {
    name:"App",

    data:()=>({
      isShowsidBar:false
    }),
    components:{
        BeseHeader,
        BeasFooter
    },
    methods:{
      handelSidbar(showsidbar){       
        this.isShowsidBar = showsidbar;
      }
    }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
