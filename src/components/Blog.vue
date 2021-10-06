<template>
    <div class="tabs">
        <TabsMenu :links="links" @changeTab="changeTab" />

        <component :is="links[lastIndex].compo"></component>
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