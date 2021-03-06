import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RuleView from '../views/RuleView.vue'
import ToolsView from '../views/ToolsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rulebook',
    name: 'rulebook',
    component: RuleView
  },
  {
    path: '/about',
    name: 'about',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contribute',
    name: 'contribute',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContributeView.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    // which is lazy-loaded when the route is visited.
    component: ToolsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
