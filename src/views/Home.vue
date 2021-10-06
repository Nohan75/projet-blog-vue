<template>
  <div class="container-fluid post-container">
      <div class="card m-4 p-2" style="width: 70%" v-for="(post, index) in getPosts.posts" :key="index">
          <h3 class="card-title">  {{ getPosts.posts[index].titre }} </h3>
          <p class="card-text">  {{ getPosts.posts[index].intro }} </p>
          <p class="card-text"> {{ getPosts.posts[index].date }}  </p>
          <button class="btn btn-success">Lire +</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      posts: [
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
        {
          titre: 'Titre du post',
          intro: 'Ceci est une intro de l\'article',
          date: new Date(),
        },
      ],
    }
  },
  computed: {
    getPosts() {
      return this.$store.state.posts
    }
  }
}
</script>
<style>
  .post-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
