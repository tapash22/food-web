import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientView from '../views/ClientView.vue';
import AdminView from '../views/admin/AdminView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'client-view',
    component: ClientView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'homemade',
        name: 'homemade',
        component: () => import(/* webpackChunkName: "homemade" */ '../views/HomeMade.vue')
      },
      {
        path: 'dryfood',
        name: 'dryfood',
        component: () => import(/* webpackChunkName: "dryfood" */ '../views/DryFood.vue')
      },
      {
        path: 'readytocook',
        name: 'readytocook',
        component: () => import(/* webpackChunkName: "readytocook" */ '../views/ReadyToCook.vue')
      },
      {
        path: 'fooddetails/:id',
        name: 'fooddetails',
        component: () => import(/* webpackChunkName: "fooddetails" */ '../views/FoodDetails.vue')
      },
      {
        path: 'restaurants',
        name: 'restaurant-list',
        component: () => import(/* webpackChunkName: "restaurant-list" */ '../views/RestaurantList.vue')
      },
      {
        path: 'restaurantdetails/:id',
        name: 'restaurantdetails',
        component: () => import(/* webpackChunkName: "restaurantdetails" */ '../views/RestaurantDetails.vue')
      },
      {
        path: 'resturentfooddetails/:id',
        name: 'resturentfooddetails',
        component: () => import(/* webpackChunkName: "resturentfooddetails" */ '../views/ResturentFoodDetails.vue')
      },
      // {
      //   path: '/login',
      //   name: 'login',
      //   component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      // },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckOut.vue')
      },
    ]
  },

  {
    path:'/admin',
    name:'admin-view',
    redirect:'/admin/dashboard',
    component: AdminView,
    children:[
      {
        path:'dashboard',
        name:'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/pages/DashBoard.vue')
      },
      {
        path:'/admin/inbox',
        name:'inbox',
        component: () => import(/* webpackChunkName: "inbox" */ '../views/admin/pages/InboxView.vue')
      }
    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
