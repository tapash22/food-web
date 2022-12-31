import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/homemade',
    name: 'homemade',
    component: () => import(/* webpackChunkName: "homemade" */ '../views/HomeMade.vue')
  },
  {
    path: '/dryfood',
    name: 'dryfood',
    component: () => import(/* webpackChunkName: "dryfood" */ '../views/DryFood.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
  },
  {
    path: '/readytocook',
    name: 'readytocook',
    component: () => import(/* webpackChunkName: "readytocook" */ '../views/ReadyToCook.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import(/* webpackChunkName: "restaurant" */ '../views/Restaurant.vue')
  },
  {
    path: '/userlocation',
    name: 'userlocation',
    component: () => import(/* webpackChunkName: "userlocation" */ '../views/UserLocation.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
