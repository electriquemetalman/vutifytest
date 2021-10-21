import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
//import * as firebase from 'firebase/compat/app'
require('firebase/auth')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      //console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    logOut({ commit }) {
      firebase.auth().signOut()
        .then(
          commit('setUser', null)
        )
        .catch(
          error => {
            console.log(error)
          }
        )  
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid})
    }
  },
  modules: {
  },
  getters: {
    user(state) {
      return state.user
    }
  }
})
