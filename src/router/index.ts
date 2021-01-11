import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'profile_dashboard',
    path: '/',
    component: () => import('@/views/profile/Dashboard.vue')
  },
  {
    name: 'workout_start',
    path: '/workout',
    component: () => import('@/views/workout/Start.vue')
  },
  {
    name: 'workout_session',
    path: '/workout/session',
    component: () => import('@/views/workout/Session.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
