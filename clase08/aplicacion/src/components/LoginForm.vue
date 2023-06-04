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
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  text-align: center;
  margin-top: 10px;
}

</style>
