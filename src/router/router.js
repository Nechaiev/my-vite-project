import Main from "../pages/Main.vue";
import UserPage from "../pages/UserPage.vue";
import About from "../pages/About.vue";
import PostIdPage from "../pages/PostIdPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from '../components/common/AuthLayout.vue';
 
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    meta: {
      layout: AuthLayout
    },
    component: UserPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
});


export default router;