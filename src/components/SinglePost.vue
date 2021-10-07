<template>
    <div id="postSimple">
        <div class="card">
            <h1 class="card-title"> {{ getPosts.posts[getId].titre }} </h1>
            <p class="card-text"> {{ getPosts.posts[getId].intro }} </p>
            <p class="card-text"> {{ getPosts.posts[getId].author }} </p>
            <p class="card-text"> {{ getPosts.posts[getId].date }} </p>
            <p class="card-body"> {{ getPosts.posts[getId].content }} </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SinglePost',
    computed: {
        getPosts() {
            return this.$store.state.posts
        },
        getId() {
            return this.$route.params.id
        },
        
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