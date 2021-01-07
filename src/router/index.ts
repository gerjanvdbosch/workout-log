import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'profile',
    path: '/',
    component: () => import('@/views/Profile.vue')
  },
  {
    name: 'workout',
    path: '/workout',
    component: () => import('@/views/Workout.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
