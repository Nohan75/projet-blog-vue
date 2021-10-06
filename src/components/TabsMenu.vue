<template>
    <div class="menu">
        <nav>
            <button class="btn btn-primary m-4" v-for="(link, index) in links" :key="index" @click="clickLink(index)">
                {{ link.title }}
            </button>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TabMenu',

    props: {
        links: { type: Array, default: () => []}
    },

    methods: {
        clickLink(index) {
            this.$emit('changeTab', index)
        }
    }

}
</script>

<style>

</style>