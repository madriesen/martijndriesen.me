import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    location: 'home',
  },
  getters: {
    location(state) {
      return state.location;
    },
  },
  mutations: {
    SET_LOCATION(state, location) {
      state.location = location;
    },
  },
  actions: {
    setLocation({ commit }, location) {
      console.log('set_location', location);
      commit('SET_LOCATION', location);
    },
  },
  modules: {
  },
});
