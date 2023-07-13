<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <input type="text" v-model="nombre">
                    <div class="card-body">
                        {{ count }}
                    </div>
                    <button @click="count++">Incrementar</button>                    
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
                nombre: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
