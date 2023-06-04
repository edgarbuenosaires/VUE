<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col col-12">
          <br /><br />

          <!-- INGRESO DE NOMBRE -->

          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input type="text" class="form-control" id="inputNombre" placeholder="Nombre completo" v-model="nombre"/>
          <br />
          <p>
            Validar nombre:
            <span class="text-success fw-bold">{{ nombre }}</span>
          </p>

          <br />

          <!-- INGRESO DE EDAD -->

          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input type="number" class="form-control" id="inputEdad" placeholder="Edad" v-model="edad"
          />
          <br />
          <p>
            Validar edad: <span class="text-success fw-bold">{{ edad }}</span>
          </p>

          <br />
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="tu@email.com"/>
          <br />

          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
              <!-- JavaScript -->

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="javascript" id="javascript" v-model="chequeados"/>
                <label class="form-check-label" for="checkJS">JavaScript</label>
              </div>

              <!-- React -->

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="react" id="react" v-model="chequeados"/>
                <label class="form-check-label" for="checkReact"> React </label>
              </div>

              <!-- Angular -->

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="angular" id="angular" v-model="chequeados"/>
                <label class="form-check-label text-start" for="checkNg">Angular</label
                >
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="vue" id="vue" v-model="chequeados"/>
                <label class="form-check-label" for="checkVue"> Vue </label>
              </div>
            </div>
            <p>
              Confirmados:
              <span class="text-success fw-bold">{{ chequeados }}</span>
            </p>
          </div>
          <br />

          <!-- PAIS -->

          <p>Pais</p>
          <select
            class="form-select" v-model="pais">
            <option v-for="pais in listaPaises" v-bind:value="pais.id" v-bind:key="pais.index"> {{pais.pais}} </option>
          
          </select>
          <br />
          <label for="areaComentarios" class="form-label text-start">Comentarios</label
          >

          <textarea class="form-control" id="areaComentarios" rows="3"></textarea>
          <br />

          <div class="row">
            <h4>Tipo de documento</h4>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input" />
              <label for="checkDNI">DNI</label>
            </div>

            <div class="col">
              <input type="radio" name="checkPass" class="form-check-input" />
              <label for="checkDNI">Pasaporte</label>
            </div>

            <div class="col">
              <input type="radio" name="checkVisa" class="form-check-input" />
              <label for="checkDNI">VISA</label>
            </div>
          </div>
          <hr />
          <div class="row">
            <br />

            <div class="col-10"></div>
            <br />
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR" />
            </div>
            <br />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: "", // Agregar la propiedad nombre
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
