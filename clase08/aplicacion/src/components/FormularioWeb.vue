
<template>
  <div class="container">
    <hr />
    <vue-form :state="formstate" @submit.prevent="onSubmit">
     
     <validate tag="label">
        <span>Nombre</span>
        <input v-model="model.name" name="name" required />
        <field-messages name="name">
          <div>Correcto!</div>
          <div slot="required">Nombre es un campo requerido</div>
        </field-messages>
      </validate>

      <validate tag="label">
        <span>Email</span>
        <input v-model="model.email" name="email" type="email" required />
        <field-messages name="email">
          <div slot="required">Email es un campo requerido</div>
          <div slot="email">Email no es válido</div>
        </field-messages>
      </validate>
      <button type="submit">ENVIAR</button>
    </vue-form>
   
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      formstate: {}, // Agregar objeto formstate
      model: {
        name: "",
        email: "",
      },
      edad: 0,
      chequeados: [],
      pais: "",
      listaPaises: [
        {
          id: "A",
          pais: "Argentina",
        },
        {
          id: "B",
          pais: "Uruguay",
        },
        {
          id: "C",
          pais: "Perú",
        },
        {
          id: "D",
          pais: "Colombia",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
