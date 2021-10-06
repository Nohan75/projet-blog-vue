import Vue from 'vue'
import Vuex from 'vuex'
import articles from './articles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: articles
  },
  mutations: {
    addArticle(state, data){
      state.posts.posts.push(data)
    },
    editPost(state, data){
      console.log(data);
      state.posts.posts[data.id] = data
    }
  },
  actions: {
  },
  modules: {
  }
})
