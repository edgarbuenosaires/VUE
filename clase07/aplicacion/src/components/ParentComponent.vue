<template>
  <div>
    <h1>Componente Padre</h1>
    <p>Contador del componente padre: {{ contadorPadre }}</p>
    <p>Contador del componente hijo: {{ contadorHijo }}</p>
    <button @click="incrementarContadorPadre">
      Incrementar contador del padre
    </button>

    <hr />

    <child-component
      :contadorProp="contadorPadre"
      @contadorCambiado="actualizarContadorHijo"
    ></child-component>

    <hr />

    <h2>Se aplica filto texto en mayusculas</h2>
    <p>{{ texto | mayusculas }}</p>

    <hr />

    <h3>Se muestra el doble de 5</h3>
    <p>{{ numero | doble }}</p>
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
      texto: "texto escrito en minuscula",
      numero: 5,
    };
  },
  filters: {
    mayusculas(value) {
      if (!value) return "";
      return value.toUpperCase();
    },
    doble(num) {
      return num * 2;
    },
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
