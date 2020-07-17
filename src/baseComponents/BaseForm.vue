<template>
  <el-form ref="form" v-bind="$attrs" :rules="defaultRules">
    <slot></slot>
  </el-form>
</template>

<script>
import validator from "./validator";
/**
 * Basic Form Components
 */
export default {
  inheritAttrs: false,
  data() {
    return {
      defaultRules: {}, // Default configuration made by interception
      validateList: []
    };
  },
  created() {
    // 读取规则列表
    this.readRuleList();

    const arr = this.$slots.default.map(v => ({
      ...v.componentOptions.propsData,
      ...v.data.attrs
    }));
    arr.forEach(v => {
      if (Object.prototype.hasOwnProperty.call(v, "required")) {
        if (!this.defaultRules[v.prop]) {
          this.$set(this.defaultRules, v.prop, []);
        }
        this.defaultRules[v.prop].push({
          required: true,
          message: `${v.label}${this.$t("canntNull")}`,
          trigger: "blur"
        });
      }

      this.validateList.forEach(val => {
        if (Object.prototype.hasOwnProperty.call(v, val)) {
          if (!this.defaultRules[v.prop]) {
            this.$set(this.defaultRules, v.prop, []);
          }
          this.defaultRules[v.prop].push({
            validator: validator[val](this),
            trigger: "blur"
          });
        }
      });
    });
  },
  methods: {
    validate(fn) {
      return this.$refs.form.validate(fn);
    },
    reset() {
      this.$refs.form.resetFields();
    },
    readRuleList() {
      this.validateList = Object.keys(require("./validator/index").default);
    }
  }
};
</script>
