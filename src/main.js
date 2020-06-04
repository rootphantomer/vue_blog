import Vue from "vue";
import App from "./App.vue";
import Manger from "./Manager.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#header");

new Vue({
  router,
  store,
  render: h => h(Manger)
}).$mount("#body");