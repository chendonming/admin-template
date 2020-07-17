import Vue from "vue";

/**
 *  点击btn 自动显示隐藏loading
 */
Vue.directive("click", {
  bind(el, binding, vnode) {
    const _this = vnode.context;
    const loading = binding.arg || "loading";
    const r = async function() {
      _this._data[loading] = true;
      await binding.value
        .call(_this)
        .finally(() => (_this._data[loading] = false));
    };
    el.r = r;
    el.addEventListener("click", r);
  },
  unbind(el) {
    el.removeEventListener("click", el.r);
  }
});
