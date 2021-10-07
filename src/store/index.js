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
      Vue.set(state.posts.posts, data.id, data)
    },
    removePostById(state, index){
      state.posts.posts.splice(index, 1)
    }
  },
  actions: {
    addArticle(context, data){
      context.commit('addArticle', data)
    },
    removePostById(context, id){
      id = parseInt(id)
      const index = context.state.posts.posts.findIndex((post) => { return post.id == id })
      context.commit('removePostById', index)
    },
    editPost(context, data){
      context.commit('editPost', data)
    }
  },
  modules: {
  }
})
