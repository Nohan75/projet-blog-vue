<template>
  <div id="delList">
      <div v-for="(post, index) in getPosts.posts" :key="index">
        <p>
          <span> {{ getPosts.posts[index].titre }} </span> | 
          <span> {{ getPosts.posts[index].author }} </span> | 
          <span> {{ getPosts.posts[index].date }} </span>
          <button id="btn" @click="supprPost(index)" class="btn btn-dark">X</button>
        </p>
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
    margin-top: 70px;
  }
</style>