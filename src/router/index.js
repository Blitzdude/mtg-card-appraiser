import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Stats from "../views/Stats.vue";
import Error404 from "../views/Error404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/stats",
    name: "stats",
    component: Stats
  },
  {
    path: "/error404",
    name: "error404",
    component: Error404
  }
];

const router = new VueRouter({
  routes
});

export default router;
