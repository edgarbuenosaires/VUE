var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Manola!',
        a: 21,
        b: 3,
        portada: 'perfil.jpg',
        descripcion: 'Foto del perfil humano'
    },
    methods: {
        imprimirEnConsola() {
            console.log('Oi! gente linda!')
        },
        calculoMatematico() {

            return this.a * this.b
        }
    },
    computed: {
        /*
        El caché de las propiedades computadas hace que estas se ejecuten una sola vez, y 
        cuando el valor de data cambie, ésta actualizará la información de la pantalla.
        */

        duplicar() {
            this.imprimirEnConsola()
            return this.a * 2
        }
    }
})