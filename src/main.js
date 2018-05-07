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

const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('users').doc(user.uid).onSnapshot(snapshot => {
          store.commit('setUser', user)
          if (snapshot.exists) {
            store.commit('setRole', snapshot.data().role);
          }
          store.commit('setLoaded', true)
        })
      } else {
        store.commit('setLoaded', true)
      }
    })
  }
})
