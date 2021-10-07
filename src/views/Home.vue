<template>
<!-- affiche tout les post -->
  <div class="container-fluid post-container">
      <div id="post" class="card m-4 p-2" v-for="(post, index) in getPosts.posts" :key="index">
          <h3 class="card-title">  {{ getPosts.posts[index].titre }} </h3>
          <p class="card-text">  {{ getPosts.posts[index].intro }} </p>
          <p class="card-text"> {{ getPosts.posts[index].date }}  </p>
          <router-link :to="`/article/${index}`"> <button class="btn btn-outline-dark">Lire +</button>  </router-link>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
  computed: {
    getPosts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
  #post{
    width: 70%;
    background-color: bisque;    
  }

  .post-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }

  #btn{
    background-color: bisque;
    margin-left: 700px;
  }
</style>
