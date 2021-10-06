<template>
  <div id="app">
    <Blog />
    <ListPost/>
  </div>
</template>

<script>

import Blog from './components/Blog.vue'
import ListPost from './components/ListPost'
export default {
  name: 'App',
  components: {
    Blog,
    ListPost
  
  }
}
</script>

<style>

</style>
