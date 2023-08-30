import Layout from "@/components/common/AppLayout.vue"
import Main from "@/pages/Main.vue";
import UserPage from "@/pages/UserPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import UserPageComposition from "@/pages/UserPageComposition.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    path: '/',
    component: Main,

  },
  {
    path: '/posts',
    component: UserPage,

  },
  {
    path: '/about',
    component: About,

  },
  {
    path: '/posts/:id',
    component: PostIdPage,

  },
  {
    path: '/composition',
    component: UserPageComposition,

  },
];


const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
});


export default router;