var app = new Vue({
    el: '#app',
    data: {
        mostrarParrafo: false,
        saludo: 'Como anday?',

        tareas: [{ id: 1, desc: 'Revisar hardware faltante' },
        { id: 2, desc: 'Validar user testing' },
        { id: 3, desc: 'Verificar version del SO' },
        { id: 4, desc: 'Instalar SO en SD-Card' },
        { id: 5, desc: 'Realizar downgrade de SO' },
        { id: 6, desc: 'Instalar Office beta' }],

        cssClasses: {
            "bg-warning": true,
            "text-secondariy": true,
        },

        objetos: [
            { id: 1, desc: 'Objeto uno' },
            { id: 2, desc: 'Objeto dos' },
            { id: 3, desc: 'Objeto tres' },
            { id: 4, desc: 'Objeto cuatro' },
            { id: 5, desc: 'Objeto cinco' },
        ],
    },
    methods: {
        mostrar() {
            if (this.mostrarParrafo == false) {
                return this.mostrarParrafo = true
            } else {
                return this.mostrarParrafo = false
            }

        }
    },
    computed: {

    }
})