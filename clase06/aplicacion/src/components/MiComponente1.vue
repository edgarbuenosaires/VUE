// COMPONENTE PADRE
<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ mensaje }}</p>
    <!-- Llamo al componente hijo (mi componente 2) -->
    <mi-componente2 :mensajeParaHijo="mensajeParaHijo"></mi-componente2>
  </div>
</template>

<script>
// Importo el componente hijo.
import MiComponente2 from "./MiComponente2.vue";

export default {
  components: {
    // Agrego el componente hijo.
    MiComponente2,
  },
  data() {
    return {
      titulo: "Componente UNO",
      mensaje: "Este es el mensaje dentro de DATA del componente 1.",
      mensajeParaHijo: "Este el el mensaje para el componente 2 (hijo)",
    };
  },
};
</script>

<style scoped>
h2 {
  color: #007bff;
}
</style>
