import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    
    {
      path: "/VueSample",
      name: "vuesample",
      component: () => import("../views/VueSampleView.vue"),
    }
  ],
});

export default router;
