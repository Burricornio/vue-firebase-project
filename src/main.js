// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Imports necesarios para trabajar con Firebase
import firebase from 'firebase'
import 'firebase/firestore';
import firebaseConfig from '@/config/firebase'
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// Import de i18n
import i18n from '@/config/i18n'

// Importamos vuex
import store from '@/store'

// Importamos Vuetify
require('./config/vuetify')


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
