<!--
 * @Author: your name
 * @Date: 2020-06-04 11:38:55
 * @LastEditTime: 2020-06-04 14:43:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\vuetest\src\views\reception\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
