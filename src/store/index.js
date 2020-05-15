import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current_location: 'home',
    locations: [
      { title: 'bar', text: 'Waiter / Bartender' },
      { title: 'webdev', text: 'Web Development' },
      { title: 'sound', text: 'Sound Engineer' },
      // { title: 'contact', text: 'Contact' },
    ],
  },
  getters: {
    current_location(state) {
      return state.current_location;
    },
    locations(state) {
      return state.locations;
    },
    current_location_name(state) {
      return state.locations.filter((item) => item.title === state.current_location);
    },
  },
  mutations: {
    SET_CURRENT_LOCATION(state, location) {
      state.current_location = location;
    },
  },
  actions: {
    setCurrentLocation({ commit }, location) {
      console.log('set_location', location);
      commit('SET_CURRENT_LOCATION', location);
    },
  },
  modules: {
  },
});
