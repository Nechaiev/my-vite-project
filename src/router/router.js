import Main from "../pages/Main.vue";
import UserPage from "../pages/UserPage.vue";
import About from "../pages/About.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/users',
    component: UserPage
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
});


export default router;