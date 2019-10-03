<template>
    <v-container class="mt-5">
        <v-row align="center" justify="center">
            <v-col cols="8" class="text-center">
                <p class="subtitle-1 mb-5">Seleccione una fecha para conocer la cotización oficial</p>
                <v-card>
                    <v-date-picker 
                        full-width 
                        color="purple"
                        v-model="picker"
                        :min="min"
                        :max="max"
                    ></v-date-picker>
                </v-card>
                <v-card
                    color="purple"
                    dark
                    full-width
                    class="mx-auto mt-4"
                    elevation="5"
                >
                    <v-card-text class="display-2 prueba">$ 56.50</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            picker: new Date().toISOString().substr(0, 10),
            min: '2002-03-04',
            max: new Date().toISOString().substr(0, 10),
        }
    }
    
}
</script>

<style scoped>
    .container{
        max-width: 1200px;
    }
    .prueba{
        color: white !important;
    }
</style>