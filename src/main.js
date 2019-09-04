import Vue from 'vue'
import firebase from 'firebase'
import router from './router'

// Plugins
import 'bootstrap'
import 'jquery'
import 'popper.js'

// Import Styles
import './assets/scss/app.scss'


import App from './App.vue'

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyCadLpMuCygp0iAxE1I9ItYaL0S8u5tMCY",
  authDomain: "vue-firebase-cms.firebaseapp.com",
  databaseURL: "https://vue-firebase-cms.firebaseio.com",
  projectId: "vue-firebase-cms",
  storageBucket: "",
  messagingSenderId: "137832797965",
  appId: "1:137832797965:web:3e96e1ca7e1cf92a"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
