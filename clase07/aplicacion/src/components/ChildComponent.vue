<template>
  <div>
    <h2>Componente Hijo</h2>
    <p>Contador del componente padre recibido: {{ contadorProp }}</p>
    <p>Contador del componente hijo: {{ contadorHijo }}</p>
    <button @click="incrementarContadorHijo">Incrementar contador del hijo</button>
  </div>
</template>

<script>
export default {
  props: {
    contadorProp: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      contadorHijo: 0,
    };
  },
  methods: {
    incrementarContadorHijo() {
      this.contadorHijo++;
      this.$emit("contadorCambiado", this.contadorHijo);
    },
  },
};
</script>
