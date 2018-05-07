// Importamos dependencias necesarios
import Vue from 'vue'
import Vuex from 'vuex'
import authModule from '@/modules/auth'

// Utilizamos el plugin
Vue.use(Vuex)

// Cresmos el almacen de datos
export default new Vuex.Store({
    state: {
        processing: false,
        loaded: false,
        alert: {
            type: 'success',
            show: false,
            message: ''
        }
    },
    mutations: {
        setLoaded: (state, loaded) => {
            state.loaded = loaded;
        },
        // Muestra una alerta durante el tiempo que pasamos en el 'timeout'
        setAlertMessage: (state, data) => {
            state.alert.type = data.type;
            state.alert.show = data.show;
            state.alert.message = data.message;
            setTimeout(() => {
                state.alert.type = data.type;
                state.alert.show = data.show;
                state.alert.message = data.message;
            }, data.timeout)
        }
    },
    modules: {
        authModule
    }
})