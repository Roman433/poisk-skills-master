import Vue from 'vue'
import Vuex from 'vuex'
// import photos from './modules/photos'
import API from './modules/forAPI'
import favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    API,
    favorites
  }
})