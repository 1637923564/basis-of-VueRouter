import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Work from "./views/Workbench.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/workbench/:option",
      name: "workbench",
      props: true,
      component: Work
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
