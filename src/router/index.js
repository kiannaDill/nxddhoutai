import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "data",
    redirect: '/login',
  },
  {
    path: "/home",
    name: "home",
    redirect: '/home/index',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/DataView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    // 登录界面不设权限
    next()
  } else {
    const token = localStorage.getItem("token")
    // 非登录界面设置权限
    if (token) {
      next()
    } else {
      next({
        name: "login"
      })
    }
  }
})
export default router
