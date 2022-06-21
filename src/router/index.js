import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SinglePage from '../components/SinglePage.vue'
// import LocalFetch from '../views/LocalFetch.vue'
import SinglePageAPI from '../components/SinglePageAPI.vue'
import FavoritesList from '../views/FavoritesList.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/local',
  //   name: 'local',
  //   component: LocalFetch
  // },
  {
    path: '/single/:id',
    name: 'single',
    component: SinglePage
  },
  {
    path: '/singleAPI/:id',
    name: 'singleAPI',
    component: SinglePageAPI
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router