<template>
  <div id="app">
    <router-view/>
    <TabView class="tab-view-position"/>
  </div>
</template>

<script>
  import TabView from './components/TabView.vue'

  export default {
    name: 'App',
    components: {
      TabView
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .tab-view-position{
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
</style>
