<template>
    <!-- afficher un seul post, quand on click sur 'Lire +' -->
    <div id="postSimple">
        <div class="card">
            <h1 class="card-title"> {{ getPosts.posts[getId].titre }} </h1>
            <p class="card-text"> {{ getPosts.posts[getId].intro }} </p>
            <p class="card-text"> {{ getPosts.posts[getId].author }} </p>
            <p class="card-text"> {{ getPosts.posts[getId].date }} </p>
            <p class="card-body" v-html="markContent"></p>
        </div>
    </div>
</template>

<script>
import Marked from 'marked'

const marked = Marked.default;

export default {
    name: 'SinglePost',

    computed: {
        getPosts() {
            return this.$store.state.posts
        },

        getId() {
            return this.$route.params.id
        },

        markContent() {
            return marked(this.getPosts.posts[this.getId].content)
        }   
    }   
}
</script>

<style>
    #postSimple{
        margin-top: 70px;
    }

    h1{
        color: bisque;
        text-decoration: underline;
    }
</style>