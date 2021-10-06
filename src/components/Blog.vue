<template>
    <div class="tabs">
        <h1>Blog</h1>

        <router-link to="/Home">Home</router-link> |
        <router-link to="/About">About US</router-link> |
        <router-link to="/New">Admin</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

 
export default {
    name: 'Blog',

    components: {
    },


}

</script>

<style>
    .tabs{
        text-align: center;
    }
</style>