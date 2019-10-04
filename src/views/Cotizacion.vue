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
            api_key: process.env.VUE_APP_API_KEY_BCRA
        }
    },
    methods: {
        ...mapMutations(['hideLoading', 'showLoading']),
        async getQuotation() {
            this.dolar = '';
            try {
                if(this.datos.length <= 0){
                    this.showLoading();
                    this.datos = await axios.get('http://localhost:8080/usd_of', { headers: {
                        "Authorization" : `BEARER ${this.api_key}`
                    }});
                    this.datos = this.datos.data;
                }
                this.datos.forEach( itemCotizacion => {
                    if(itemCotizacion.d === this.picker){
                        this.dolar = itemCotizacion.v;
                    }
                });                                
            } catch (erro) {
                
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
    .prueba{
        color: white !important;
    }
</style>