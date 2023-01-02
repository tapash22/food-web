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
    path: '/readytocook',
    name: 'readytocook',
    component: () => import(/* webpackChunkName: "readytocook" */ '../views/ReadyToCook.vue')
  },
  {
    path: '/fooddetails/:id',
    name: 'fooddetails',
    component: () => import(/* webpackChunkName: "fooddetails" */ '../views/FoodDetails.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurant-list',
    component: () => import(/* webpackChunkName: "restaurant-list" */ '../views/RestaurantList.vue')
  },
  {
    path: '/restaurantdetails/:id',
    name: 'restaurantdetails',
    component: () => import(/* webpackChunkName: "restaurantdetails" */ '../views/RestaurantDetails.vue')
  },
  {
    path: '/userlocation',
    name: 'userlocation',
    component: () => import(/* webpackChunkName: "userlocation" */ '../views/UserLocation.vue')
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
    path: '/carousel',
    name: 'carousel',
    component: () => import(/* webpackChunkName: "carousel" */ '@/components/Carousel.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
