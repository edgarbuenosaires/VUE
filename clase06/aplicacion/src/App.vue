<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Bienvenidos a CODERHOUSE" />
    <mi-componente1></mi-componente1>
    <mi-componente2></mi-componente2>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente1 from "./components/MiComponente1.vue";
import MiComponente2 from "./components/MiComponente2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MiComponente1,
    MiComponente2,
  },
};
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
