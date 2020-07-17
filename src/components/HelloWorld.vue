<template>
  <div class="hello">
    <h2>{{ getTest }}</h2>
    <el-button v-click="dosth" :loading="loading">自动loading</el-button>
    <base-form :model="form" ref="form" label-width="110px" style="width: 550px;margin-top: 10px;">
      <el-form-item label="自动判断规则" prop="name" required>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username" email required>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="tel" prop="tel" mobile required>
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="弹窗picker">
        <base-popup-table-picker />
      </el-form-item>
      <el-button v-click:lod="save" :loading="lod">保存</el-button>
      <el-button @click="clear">清空</el-button>
    </base-form>

    <div
      v-move="{ className: 'wrapper', move: true }"
      style="height: 50px;width: 300px;background:red;position: absolute;left: 0;top: 0;"
    >
      <div class="wrapper">
        <h2>指令： 任意拖动我吧</h2>
      </div>
    </div>

    <div style="margin-top: 20px;">
      <el-button @click="visible = true">基础弹窗可移动</el-button>
      <el-button @click="visible1 = true">基础弹窗不可移动</el-button>
      <el-button @click="visible2 = true">基础弹窗滚动条</el-button>
    </div>
    <base-popup :visible.sync="visible" title="基础弹窗可移动" draggable>
      <h1>一些东西</h1>
    </base-popup>
    <base-popup :visible.sync="visible1" title="基础弹窗不可移动">
      <h1>一些东西</h1>
    </base-popup>
    <base-popup :visible.sync="visible2" title="基础弹窗滚动条">
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
      <h1>一些东西</h1>
    </base-popup>

    <h3>基础表格</h3>
    <base-table :columns="columns" :data="data" @edit="edit" @del="del" />
    {{ajaxError}}
    <el-button @click="clickvuex">点击vuex</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseForm from "@/baseComponents/BaseForm";
import BasePopup from "@/baseComponents/BasePopup";
import BaseTable from "@/baseComponents/BaseTable";
import BasePopupTablePicker from "@/baseComponents/BasePopupTablePicker";
import store from "@/store";

export default {
  name: "HelloWorld",
  components: { BasePopupTablePicker, BaseTable, BaseForm, BasePopup },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters("event", ["getTest", "ajaxError"])
  },
  data() {
    return {
      data: [{ username: "买买买", sex: "信息", address: "gggg" }],
      columns: [
        {
          label: "姓名",
          prop: "username"
        },
        {
          label: "性别",
          prop: "sex"
        },
        {
          label: "地址",
          prop: "address"
        },
        {
          label: "操作",
          opreat: true
        }
      ],
      loading: false,
      lod: false,
      form: {
        name: "",
        username: "",
        tel: ""
      },
      visible: false,
      visible1: false,
      visible2: false
    };
  },
  methods: {
    clickvuex() {
      store.commit("event/setAjaxError", true);
    },
    dosth() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.$notify({
            title: "标题名称",
            message: "我好想做点什么"
          });
          resolve();
        }, 1000);
      });
    },
    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$alert("通过");
        }
      });
    },
    clear() {
      this.$refs.form.reset();
    },
    edit(row) {
      this.$message({
        message: "修改成功" + JSON.stringify(row),
        type: "success"
      });
    },
    del(row) {
      this.$message({
        message: "删除成功" + JSON.stringify(row),
        type: "warning"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
