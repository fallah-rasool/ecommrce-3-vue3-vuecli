
import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category',
    name: 'category',

    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/product/:id',
    name: 'product',

    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'cart',

    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  }
]

const router = createRouter({
  history : createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
