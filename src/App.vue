<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script>

import ToolBar from "./components/ToolBar";

export default {
  name: 'App',
  components: {
    ToolBar
  },
  methods : {
    fetchData (){
      console.log("test");
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
  margin-top: 60px;
}
</style>
