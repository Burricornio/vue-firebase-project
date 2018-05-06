// Hacemos los imports necesarios
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/translations';

// Decimos a Vue que lo utilice
Vue.use(VueI18n);

// Exportamos una instancia
export default new VueI18n({
    locale: 'es',
    messages
})

