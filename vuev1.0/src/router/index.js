import Vue from "vue";
import VueRouter from "vue-router";
import Store1 from "../views/store/storev1"
import Login from "../views/login/login";//通过component主键绑定目标模板
import Register from "../views/register/register"
import Nav from"../views/nav/nav"
import Test from"../views/htmltemp/tesst"
import Data from "../views/managesys"
import User from  "../views/user/info"




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
        //第二种导入方式component:()=>import("../views/register.vue")
    },//路由重定向入口，用于配置多个vue组件模板
    {
        path:"/store",
        name:"store",
        component: Store1
    },
    {
        path:"/register",
        name:"register",
        component:Register
    },
    {
        path:"/navv",
        name:"navv",
        component:Nav
    },
    {
        path:"/test",
        name:"test",
        component:Test
    },
    {
        path:"/manage",
        name:"managesys",
        component:Data
    },
    {
        path:"/info",
        name:"info",
        component:User
    },

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
