import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dialog: false
    },
    mutations: {
        hideDialog(state) {
            state.dialog = false;
        },
        showDialog(state) {
            state.dialog = true;
        }
    },
    actions: {

    }
})