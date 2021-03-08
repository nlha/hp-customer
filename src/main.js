import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAKG99FuAeiK-3dU86S7M5CZAAawwUfoDI",
  authDomain: "hp-customers.firebaseapp.com",
  projectId: "hp-customers",
  storageBucket: "hp-customers.appspot.com",
  messagingSenderId: "401058511007",
  appId: "1:401058511007:web:f8699f8c0439fd9ade0aaa",
  measurementId: "G-T2ETQ5KHN8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App).use(router).mount('#app')
