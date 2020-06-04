/*
 * @Author: your name
 * @Date: 2020-06-04 11:38:55
 * @LastEditTime: 2020-06-04 13:43:46
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
    import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/tag",
    name:"Tag",
    component:() =>
    import(/* webpackChunkName: "about" */ "../views/Tag.vue")
  },
  {
    path:"/send",
    name:"Send",
    component:() =>
    import(/* webpackChunkName: "about" */ "../views/Send.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
