import { createRouter, createWebHashHistory } from 'vue-router'

// 导入路由的相关模块包
const Home = () => import ('../views/Home/Home.vue');
const Cart = () => import ('../views/cart/Cart.vue');
const Category = () => import ('../views/category/Category.vue');
const Profile = () => import ('../views/profile/Profile.vue');


// 设置路由的相关参数
const routes = [
  // 设置默认路由
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
