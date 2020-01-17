import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/login";//通过component主键绑定目标模板

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"login"
  },//最初重定向的网页
    //路由重定向入口，用于配置多个vue组件模板
    {
        path: "/login",
        name: "login",
        component: Login
        //第二种导入方式component:()=>import("../views/login.vue")
    },//路由重定向入口，用于配置多个vue组件模板
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
