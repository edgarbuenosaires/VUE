<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Componente 1",
      mensaje: "Este es el contenido del Componente 1"
    };
  }
};
</script>

<style scoped>
h2 {
  color: #007bff;
}
</style>