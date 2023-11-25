import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home/Homepage.vue"),
  },
  {
    path: "/Agent",
    component: () => import("../views/Agent/Agent.vue"),
  },
  {
    path: "/Weapons",
    component: () => import("../views/Weapons/Weapons.vue"),
  },
  {
    path: "/Weapons/:id",
    component: () => import("../views/Weapons/WeaponsDetail.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
