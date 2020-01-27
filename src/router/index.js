import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'views/Home.vue'
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const ShopCart = () => import('views/shopcart/shopcart')
const Profile = () => import('views/profile/profile')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    redirect:'/home'
  },{
    path:'/home',
    component:Home
  },{
    path:'/category',
    component:Category
  },{
    path:'/shopcart',
    component:ShopCart
  },{
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
  // base: process.env.BASE_URL,
})

export default router
