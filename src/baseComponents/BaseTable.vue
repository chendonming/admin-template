<template>
  <div>
    <el-table v-bind="$attrs">
      <el-table-column
        v-for="(column, index) in columns"
        :label="column.label"
        :prop="column.prop"
        :key="index"
        :width="column.width"
      >
        <template #default="scope">
          <table-render
            v-if="column.render"
            :row="scope.row"
            :render="column.render"
          ></table-render>
          <div v-else-if="column.opreat">
            <el-button @click="update(scope.row)">修改</el-button>
            <el-button @click="del(scope.row)">删除</el-button>
          </div>
          <span v-else>{{ scope.row[column.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-bind="Pagination" v-if="Pagination"></el-pagination>
  </div>
</template>

<script>
import TableRender from "./table";

export default {
  inheritAttrs: false,
  name: "BaseTable",
  components: { TableRender },
  props: {
    Pagination: Object,
    columns: Array
  },
  methods: {
    update(row) {
      this.$emit("edit", row);
    },
    del(row) {
      this.$emit("del", row);
    }
  }
};
</script>
