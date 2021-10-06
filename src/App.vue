<template>
  <div id="app">
      <h1>Blog</h1>
    <div id="nav">

        <router-link id="home" to="/"> HOME </router-link> |
        <router-link id="about" to="/About"> ABOUT US </router-link> |
        <router-link id="admin" to="/admin"> ADMIN </router-link>

        <router-view></router-view>
    </div>
  </div>
</template>

<style>
#home:hover{
  font-size: 20px;
}

#about:hover{
  font-size: 20px;
}

#admin:hover{
  font-size: 20px;
}

#home{
  margin-right: 5px;
}

#about{
  margin-right: 5px;
  margin-left: 5px;
}

#admin{
  margin-left: 5px;
}

h1{
  color: bisque;
  padding: 30px;
}

#app {
  font-family: "Gill Sans";
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  font-family: "Gill Sans";

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: bisque;
  margin-top: 40px;
}
</style>
