<!--
 * @Author: your name
 * @Date: 2020-06-04 15:26:18
 * @LastEditTime: 2020-06-04 15:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\vuetest\src\Manager.vue
--> 
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tag">Tag</router-link>|
      <router-link to="/send">Send</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/manager">Manager</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>