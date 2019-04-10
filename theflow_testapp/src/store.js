import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client_list: [],
    current_client: {}
  },
  mutations: {
    SET_CLIENTS(state, payload){
      state.client_list = payload
    },
    SET_CLIENT(state, payload){
      state.current_client = payload
    },
  },
  actions: {
    GET_CLIENTS({commit}){
      axios.get('clients.json').then(response => {
        commit('SET_CLIENTS', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    getClientList: (state) => state.client_list,
    getCurrentClient: (state) => state.current_client
  }
})
