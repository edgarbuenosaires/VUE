// Component se declara antes de instanciar a VUE
Vue.component('codermeals-card', {
    props: {
        titulo: String,
        portada: String,
        costo: Number
    },
    template: ` <div align="center">
                    <div>
                        <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
                            <br><br>
                            <p class="text-black"> {{ titulo }} </p>
                            <p>$<strong> {{ costo }} </strong></p>
                    </div>
                </div>`,
})


var app = new Vue({
    el: '#app',
    data: {
        titulo: "Pizza Napolitana",
        portada: "https://img.freepik.com/vector-premium/pequena-ilustracion-animales-dibujos-animados-calamar_7814-741.jpg",
        costo: 675.00

    },
    methods: {

    },

})