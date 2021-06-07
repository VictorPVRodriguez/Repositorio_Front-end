import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import Episodes from '../views/Episodes.vue'
import Locations from '../views/Locations.vue'
import Didyouknow from '../views/Didyouknow.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/Locations',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/Didyouknow',
    name: 'Didyouknow',
    component: Didyouknow
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/Login')
      } else {
        next()
      }
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router