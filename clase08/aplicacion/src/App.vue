<template>
  <div id="app">
    <img class="logo-small" alt="Vue logo" src="./assets/logo.jpg" />
    <FormularioWeb />
    <!-- Agregar el componente FormularioWeb aquí -->
  </div>
</template>

<script>

import FormularioWeb from "./components/FormularioWeb.vue";

export default {
  name: "App",
  components: {   
    FormularioWeb,
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

.logo-small {
  width: 6em;
}
</style>
