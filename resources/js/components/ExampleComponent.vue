<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <input
                        type="text"
                        v-model="fruit"
                        @keyup.enter="agregarFruta()"
                    />
                    <div class="card-body">
                        {{ count }}
                    </div>
                    <div>
                        <button
                            @click="count++"
                            class="btn btn-outline-success"
                        >
                            Incrementar
                        </button>
                        <button @click="count--" class="btn btn-outline-danger">
                            Disminuir
                        </button>
                        <button
                            @click="agregarFruta()"
                            class="btn btn-outline-warning"
                        >
                            Agregar
                        </button>
                        <button
                            @click="saludar()"
                            class="btn btn-outline-primary"
                        >
                            Saludar
                        </button>
                    </div>
                    <h1 v-text="nombre"></h1>
                    <ul v-for="fruta in frutas">
                        <li v-text="fruta.nombre"></li>
                        <li v-text="fruta.cantidad"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            nombre: "",
            estado: "false",
            fruit: "",
            frutas: ["Banano", "Fresa", "Mango"],
        };
    },
    methods: {
        agregarFruta() {
            this.frutas.push(this.fruit);
        },
        lista() {
            let me = this;
            axios
                .get('/producto')
                .then(function (response) {
                    console.log(response.data);
                    me.frutas = response.data
                    // me.nombre = response.data.name
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        saludar() {
            alert("Hola Mundo...!");
        },
    },
    mounted() {
        console.log("Component mounted.");
        this.lista();
    },
};
</script>
