import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfilView from "../views/ProfilView.vue";
import AboutView from "../views/AboutView.vue";
import OverView from "../views/OverView.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/ProfilView",
        component: ProfilView,
      },
      {
        path: "/AboutView",
        component: AboutView,
      },
      {
        path: "/OverView",
        component: OverView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
