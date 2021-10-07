
<template>
<!-- Sous menu sous le ADMIN -->
    <div id="nav">
        <router-link id="add" to="/add">Add</router-link> | 
        <router-link id="modif" to="/modify">Modify</router-link> | 
        <router-link id="supp" to="/suppr">Delete</router-link>
        <router-view> </router-view>
    </div>
</template>

<script>
export default {
    name:"Admin"
}
</script>

<style>
    #add:hover{
        font-size: 20px;
    }

    #modif:hover{
        font-size: 20px;
    }

    #supp:hover{
        font-size: 20px;
    }

    #nav a.router-link-exact-active {
        color: bisque;
        margin-top: 40px;
    }

    #nav{
    padding: 10px;
    }
</style>