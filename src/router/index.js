import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../pages/User.vue')
  },
  {
    path: '/user/:userId',
    name: 'UserDetail',
    component: () => import('../pages/user-detail.vue')
  },
  {
    path: '/user/:userId/chat',
    name: 'chat',
    component: () => import('../pages/chat.vue')
  },
  {
    path: '/message-list',
    name: 'messageList',
    component: () => import('../pages/message-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
