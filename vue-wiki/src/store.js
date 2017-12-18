import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isLoading: false,
  },
  getters: {

  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateToken(state, payload) {
      state.token = payload.token
    }
  },
  actions: {

  }
})