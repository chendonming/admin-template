import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const modules = {};
const arrs = require.context("./modules", false, /\.js$/).keys();
arrs.forEach(v => {
  const name = v.substring(2, v.lastIndexOf("."));
  modules[name] = require(`./modules/${name}`).default;
});

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  modules
});
