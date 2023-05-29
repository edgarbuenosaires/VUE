<template>
  <div>
    <h1>Componente Padre</h1>
    <p>Contador del componente padre: {{ contadorPadre }}</p>
    <p>Contador del componente hijo: {{ contadorHijo }}</p>
    <button @click="incrementarContadorPadre">Incrementar contador del padre</button>
    <hr />
    <child-component :contadorProp="contadorPadre" @contadorCambiado="actualizarContadorHijo"></child-component>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      contadorPadre: 0,
      contadorHijo: 0,
    };
  },
  methods: {
    incrementarContadorPadre() {
      this.contadorPadre++;
    },
    actualizarContadorHijo(nuevoContador) {
      this.contadorHijo = nuevoContador;
    },
  },
};
</script>
