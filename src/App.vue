<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">IE测试</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  watch: {
    ajaxError(val) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (val) {
          this.$notify({
            title: "提示",
            message: this.ajaxContent.message
          });
          this.setAjaxError(false);
        }
        this.$once("hook:beforeDestroy", () => {
          clearTimeout(this.timer);
        });
      }, 500);
    }
  },
  computed: {
    ...mapGetters("event", ["ajaxError", "ajaxContent"])
  },
  methods: {
    ...mapMutations("event", ["setAjaxError"])
  }
};
</script>

<style scoped>
/deep/.el-button {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
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
