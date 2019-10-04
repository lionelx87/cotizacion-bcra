<template>
    <div>
        <v-dialog :value="loading" hide-overlay persistent width="300">
            <v-card color="purple" dark>
                <v-card-text>
                    Obteniendo cotizaciones desde BCRA
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>        
    </div>
</template>

<script>

import { mapState } from 'vuex'
 
export default {
    name: 'Loading',
    computed: {
        ...mapState(['loading'])
    }
    
}
</script>