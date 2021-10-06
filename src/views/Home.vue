<template>
  <div class="home">
    <ListPost />
  </div>
</template>

<script>
// @ is an alias to /src
import ListPost from '@/components/ListPost.vue'

export default {
  name: 'Home',
  components: {
    ListPost
  }
}
</script>
