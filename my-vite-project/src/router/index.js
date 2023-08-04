// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '../views/UserPage.vue';
import UserCard from '../components/UserCard.vue'

const routes = [
  {
    path: '/users',
    component: UserPage,
  },
  {
    path: '/users/:id',
    component: UserCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
