import Vue from 'vue'
import Vuex from 'vuex'
import articles from './articles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: articles
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
