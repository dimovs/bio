import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Bio from '../components/Bio.vue'
import Hobbies from '../components/Hobbies.vue'
import Family from '../components/Family.vue'
import Friends from '../components/Friends.vue'
import Application from '../components/Application.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'bio',
        component: Bio
      },
      {
        path: 'family',
        component: Family
      },
      {
        path: 'friends',
        component: Friends
      },
      {
        path: 'hobbies',
        component: Hobbies
      },
      {
        path: 'application',
        component: Application
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
