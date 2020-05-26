import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Detail from '@/views/Detail.vue';
import Bar from '@/views/Bar.vue';
import Sound from '@/views/Sound.vue';
import Webdev from '@/views/Webdev.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    children: [
      {
        path: '/bar',
        name: 'bar',
        component: Bar,
      },
      {
        path: '/sound',
        name: 'sound',
        component: Sound,
      },
      {
        path: '/webdev',
        name: 'webdev',
        component: Webdev,
      },
    ],
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
