<template>
  <div id="delList">
    <!-- affiche les post suivit d'un bouton DELETE -->
      <div v-for="(post, index) in getPosts.posts" :key="index">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8" style="margin-top:20px">
            <span> {{ getPosts.posts[index].titre }} </span> | 
            <span> {{ getPosts.posts[index].author }} </span> | 
            <span> {{ getPosts.posts[index].date }} </span>
          </div>
          <div class="col-sm-2">
            <button id="btnDelPost" @click="supprPost(index) " class="btn btn-dark">X</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      titre: '',
      author:'',
      intro:'',
      contenu:'',
      date:new Date()
    }
  },

  methods: {
    //supprime le post
    supprPost(index) {
      this.$store.dispatch('removePostById', index)
        .then(() => {
          alert('Post Deleted')
        })
    }
  },

  computed: {
    getPosts() {
      return this.$store.state.posts
    },
  }
}
</script>

<style>
  #btn{
    color: black;
  }

  .template{
      font-size: 16px;
  }

  #delList{
    margin-top: 50px;
  }

  #btnDelPost{
    background-color : bisque;
    color: black;
  }
</style>