import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
    hidden: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login")
  },
  {
    path: "/service",
    name: "layout",
    component: () => import("@/views/service"),
    children: [
      {
        path: "userInfo",
        name: "userInfo",
        component: () => import("@/views/service/userInfo"),
        children: [
          {
            path: "",
            redirect: "basic"
          },
          {
            path: "basic",
            component: () => import("@/views/service/userInfo/basic"),
            hidden: true
          },
          {
            path: "extension",
            component: () => import("@/views/service/userInfo/extension")
          }
        ]
      },
      {
        path: "resume",
        name: "resume",
        component: () => import("@/views/service/resume"),
        children: [
          {
            path: "",
            redirect: "onlineGeneration"
          },
          {
            path: "autoGeneration",
            name: "autoGeneration",
            component: () => import("@/views/service/resume/auto_generation")
          },
          {
            path: "onlineGeneration",
            name: "onlineGeneration",
            component: () => import("@/views/service/resume/online_generation")
          }
        ]
      }
    ]
  },
  {
    path: "/",
    redirect: "home",
    hidden: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
