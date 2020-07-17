<template>
  <div class="base-popup-table-picker">
    <div class="base-popup-input">
      <input class="el-input__inner" />
      <div class="input-mask"></div>
    </div>
    <el-button @click="visible = true">选择</el-button>
  </div>
</template>

<script>
import BasePopup from "@/baseComponents/BasePopup";
import BaseTable from "@/baseComponents/BaseTable";
/**
 * 基础弹窗列表选择器
 * TODO 具体接口出来可以
 */
export default {
  name: "BasePopupTablePicker",
  components: { BaseTable, BasePopup }
};
</script>

<style scoped>
.base-popup-table-picker {
  display: flex;
  justify-content: space-between;
}

.base-popup-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  margin-right: 20px;
}

.input-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(3, 3, 3, 0.1);
}

.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
