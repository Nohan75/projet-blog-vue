<template>
  <div class="container-fluid">
      <div class="card" style="width: 500px" v-for="(post, index) in posts" :key="index">
          <h3 class="card-title">  {{ post.titre }} </h3>
          <p class="card-text">  {{ post.intro }} </p>
          <p>  {{ post.date.getDate() }}/{{ post.date.getMonth() }}/{{ post.date.getYear() }} </p>
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
}
</script>
