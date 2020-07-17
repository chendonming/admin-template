<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button v-click="login" :loading="loading">登录</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { reqLogin } from "@/api";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async login() {
      await reqLogin({
        password: "123456",
        username: "gzp1"
      });
    }
  }
};
</script>
