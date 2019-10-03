<template>
    <div>
        <v-dialog @click:outside="close" persistent
            :value="dialog"
            max-width="350"
        >
            <v-card>
                <v-card-title class="headline">Cotización BCRA</v-card-title>
                <v-card-text class="text-justify">
                    Es una SPA que permite obtener la cotización oficial del dólar en Argentina. La información es proporcionada directamente desde la API del Banco Central de la República Argentina.
                    <p class="mt-3 text-center">Desarrollado por: Lionel Acosta</p>
                </v-card-text>

                <v-card-actions>
                    <div class="flex-grow-1"></div>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="hideDialog"
                    >
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>        
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'About',
    computed: {
        ...mapState(['dialog'])
    },
    methods: {
        ...mapMutations(['showDialog', 'hideDialog']),
        close() {
            this.hideDialog();
        }
    }
}
</script>