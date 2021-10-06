<template>
    <div>
        <div class="list-post">
            <div class="article" v-for="(post, index) in posts" :key="index">
                {{ post.titre }}
                {{ post.intro }}
                {{ post.date }}
                <button class="btn btn-success">Lire +</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListPost',
    props: {
        posts: Array,
    }
    
}
</script>
<style>
    
</style>