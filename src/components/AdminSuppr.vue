<template>
  <div>
      Suppr
      <div v-for="(post, index) in getPosts.posts" :key="index">
        <p>
          <span> {{ getPosts.posts[index].titre }} </span> | 
          <span> {{ getPosts.posts[index].author }} </span> | 
          <span> {{ getPosts.posts[index].date }} </span>
          <button @click="supprPost(index)" class="btn btn-danger">supprimer</button>
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

</style>