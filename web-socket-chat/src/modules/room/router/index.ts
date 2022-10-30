import { RouteRecordRaw } from "vue-router";
import Room from "../views/room.vue"

export const roomRoutes: Array<RouteRecordRaw> = [
  {
    path: "/room/:id",
    name: "Room",
    component: Room
  }
];