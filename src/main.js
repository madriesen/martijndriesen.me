import Vue from 'vue';
import MyRouterLink from '@/components/MyRouterLink.vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.component('my-router-link', MyRouterLink);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
