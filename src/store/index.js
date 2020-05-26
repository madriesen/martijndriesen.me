import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current_location: 'home',
    locations: [
      { title: 'home', text: 'home' },
      { title: 'bar', text: 'Waiter / Bartender' },
      { title: 'webdev', text: 'Web Developer' },
      { title: 'sound', text: 'Sound Engineer' },
    ],
    update_detail_page: false,
  },
  getters: {
    current_location(state) { return state.current_location; },
    locations(state) { return state.locations; },
    current_location_name(state) {
      return state.locations.filter((item) => item.title === state.current_location);
    },
    update_detail_page(state) { return state.update_detail_page; },
  },
  mutations: {
    SET_CURRENT_LOCATION(state, location) {
      state.current_location = location;
    },
    SET_UPDATE_DETAIL_PAGE(state, data) {
      state.update_detail_page = data;
    },
  },
  actions: {
    setCurrentLocation({ commit }, location) {
      const newLocation = (location === '/') ? 'home' : location;
      commit('SET_CURRENT_LOCATION', newLocation);
    },
    updateDetailPage({ commit }, data) {
      commit('SET_UPDATE_DETAIL_PAGE', data);
    },
  },
  modules: {
  },
});
