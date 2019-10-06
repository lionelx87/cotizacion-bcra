<template>
    <v-container class="mt-5">
        <v-row align="center" justify="center" v-if="datos.length > 0">
            <v-col xs="12" md="8" class="text-center">
                <p class="subtitle-1 mb-5">Seleccione una fecha para conocer la cotización oficial</p>
                <v-card>
                    <v-date-picker 
                        full-width 
                        color="purple"
                        v-model="picker"
                        :min="min"
                        :max="max"
                        @change="getQuotation"
                    ></v-date-picker>
                </v-card>
                <v-card
                    color="purple"
                    dark
                    full-width
                    class="mx-auto mt-4"
                    elevation="5"
                >
                    <v-card-text class="white--text">
                        <span v-if="dolar !== ''" class="display-1">${{ dolar }}</span>
                        <span v-else class="display-1">No hay datos para esta fecha</span> 
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <Loading />
    </v-container>
</template>

<script>

import axios from 'axios'
import { mapMutations } from 'vuex' 
import Loading from '../components/Loading'

export default {
    components: {
        Loading
    },
    data() {
        return {
            datos: [],
            picker: new Date().toISOString().substr(0, 10),
            min: '2002-03-04',
            max: new Date().toISOString().substr(0, 10),
            dolar: '',
            api_key: process.env.VUE_APP_API_KEY_BCRA,
            backend: process.env.VUE_APP_BACKEND_URL,
            cors: process.env.VUE_APP_CORS
        }
    },
    methods: {
        ...mapMutations(['hideLoading', 'showLoading']),
        async getQuotation() {
            this.dolar = '';
            try {
                if(this.datos.length <= 0){
                    this.showLoading();
                    await axios.get(`${this.cors}${this.backend}/usd_of`, { headers: {
                        "Authorization" : `BEARER ${this.api_key}`,
                    }}).then(cotizaciones => {
                        this.datos = cotizaciones.data;
                    });
                }
                const itemCotizacion = this.datos.find( item => item.d === this.picker);
                this.dolar = itemCotizacion !== undefined? itemCotizacion.v : '';
            } catch (err) {
                
            }finally {
                this.hideLoading();
            }
        }
    },
    mounted() {
        this.getQuotation();
    }
    
}
</script>

<style scoped>
    .container{
        max-width: 1200px;
    }
</style>