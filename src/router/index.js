import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:id',
    name: 'SinglePost',
    component: () => import('../components/SinglePost.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children:[
      {
        path:"/add",
        name:"add",
        component:()=> import('../components/AdminNew.vue')
      },
      {
        path:"/modify",
        name:"modify",
        component: ()=> import('../components/AdminModify.vue')
      },
      {
        path:"/suppr",
        name:"suppr",
        component: ()=> import('../components/AdminSuppr.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
