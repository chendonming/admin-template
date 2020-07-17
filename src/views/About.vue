<template>
  <div class="about">
    <h1>Flex布局测试</h1>
    <div class="wrapper">
      <div class="item"></div>
      <div class="item"></div>
    </div>
    a.companyName:{{ a.companyName }}== b.cName:{{ b.cName }}
    <el-input v-model="b.cName"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        companyName: ""
      },
      b: {}
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100px;
  justify-content: space-between;
  height: 200px;
}

.item {
  margin: 0 10px;
  flex: 1;
  background: #000;
}
</style>
