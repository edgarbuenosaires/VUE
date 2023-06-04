<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button type="submit">Login</button>
    </form>
    <p>{{ loginMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginMessage: "",
    };
  },
  methods: {
    login() {
      // Aquí puedes realizar la lógica de autenticación, como enviar una solicitud al servidor o verificar los datos localmente.
      // En este ejemplo, simplemente mostraremos un mensaje de bienvenida con los datos del usuario.
      this.loginMessage = `¡Bienvenido, ${this.username}! Tu contraseña es ${this.password}.`;
    },
  },
};
</script>

<style scoped>
/* Estilos del componente */
</style>
