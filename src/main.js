import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyALIO2jEeiqK3YxXlZ33IdBHWUMlTObgUQ",
            authDomain: "codingtest-79786.firebaseapp.com",
            projectId: "codingtest-79786",
            storageBucket: "codingtest-79786.appspot.com",
            messagingSenderId: "523037041341",
            appId: "1:523037041341:web:a34e4b05f8877e95458dd4",
            measurementId: "G-H0KPQ4G6S3"
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        }

        )
    }
}).$mount('#app')