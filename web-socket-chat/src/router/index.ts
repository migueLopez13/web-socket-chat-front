import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from '@/components/welcome.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;