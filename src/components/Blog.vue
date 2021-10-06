<template>
    <div class="tabs">
        <h1>Blog</h1>

        <router-link to="/Home">Home</router-link>
        <router-link to="/About">About US</router-link>
        <router-link to="/New">Nouveau Post</router-link>
    </div>
</template>

<script>
import TabsMenu from './TabsMenu.vue'
import AboutUsVue from './AboutUs.vue'
import AdminVue from './Admin.vue'
import ListPostVue from './ListPost.vue'

 
export default {
    name: 'Blog',

    components: {
        TabsMenu,
    },

    data() {
        return {
            lastIndex: 0,
            links: [
                {
                    title: 'Admin',
                    compo: AdminVue
                },
                {
                    title: 'List Post',
                    compo: ListPostVue
                },
                {
                    title: 'About US',
                    compo: AboutUsVue
                },
            ]
        }
    },

    methods: {
        changeTab(index) {
            console.log('change tab', index)
            this.lastIndex = index
        }
    },


}

</script>

<style>
    .tabs{
        text-align: center;
    }
</style>