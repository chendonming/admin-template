import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/i18n/i18n";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "nprogress/nprogress.css";
import "@/style/reset.css";
import "@/style/global.css";

import "@/directive/click";
import "@/directive/move";

import "@/polyfill";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
