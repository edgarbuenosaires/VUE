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
      titulo: "Componente 2",
      mensaje: "Este es el contenido del Componente 2"
    };
  }
};
</script>

<style scoped>
h2 {
  color: #ff0000;
}
</style>