import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dialog: false,
        loading: false
    },
    mutations: {
        hideDialog(state) {
            state.dialog = false;
        },
        showDialog(state) {
            state.dialog = true;
        },
        hideLoading(state) {
            state.loading = false;
        },
        showLoading(state) {
            state.loading = true;
        }
    },
    actions: {

    }
})