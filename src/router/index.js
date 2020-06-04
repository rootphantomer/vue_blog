/*
 * @Author: your name
 * @Date: 2020-06-04 11:38:55
 * @LastEditTime: 2020-06-04 15:19:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\vuetest\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "/" */ "../views/reception/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/reception/About.vue")
  },
  {
    path: "/tag",
    name: "Tag",
    component: () =>
      import(/* webpackChunkName: "tag" */ "../views/reception/Tag.vue")
  },
  {
    path: "/send",
    name: "Send",
    component: () =>
      import(/* webpackChunkName: "send" */ "../views/reception/Send.vue")
  },
  {
    path: "/manager",
    name: "Manager",
    component: () => import("../views/manager/Index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
