<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ mensajeParaHijo }}</p>
  </div>
</template>

<script>
export default {
  props: {
    mensajeParaHijo: String,
  },
  data() {
    return {
      titulo: "Componente DOS",
    };
  },
};
</script>

<style scoped>
h2 {
  color: #ff0000;
}
</style>
