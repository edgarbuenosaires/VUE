<template>
  <div id="app">
    <img class="logo-small" alt="Vue logo" src="./assets/logo.jpg" />
    <FormularioWeb />
    <!-- Agregar el componente FormularioWeb aquí -->
     <LoginForm />
     <Formulario2WebVue/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import FormularioWeb from "./components/FormularioWeb.vue";
import Formulario2WebVue from './components/Formulario2Web.vue';


export default {
  name: "App",
  components: {
    FormularioWeb,
    LoginForm,
    Formulario2WebVue,
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
