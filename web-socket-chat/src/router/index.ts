import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from '@/shared/components/welcome.vue'
import { roomRoutes } from "../modules/room/router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/room",
    children: roomRoutes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;