import Main from "../pages/Main.vue";
import UserPage from "../pages/UserPage.vue";
import About from "../pages/About.vue";
import PostIdPage from "../pages/PostIdPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import UserPageWithStore from "../pages/UserPageWithStore.vue"

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
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
  {
    path: '/store',
    component: UserPageWithStore
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
});


export default router;