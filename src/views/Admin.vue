
<template>
    <div>
        <router-link to="/add">Add</router-link> | 
        <router-link to="/modify">Modify</router-link> | 
        <router-link to="/suppr">Supprimé</router-link>
        <router-view> </router-view>
    </div>gi
  
</template>

<script>

export default {
    name:"Admin"
}
</script>

<style>

</style>