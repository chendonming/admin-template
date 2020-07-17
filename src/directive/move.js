import Vue from "vue";

/**
 * useCase:
 * v-move="'wrapper'"
 * v-move="{className: 'wrapper', width: 80, move: false}"
 */
Vue.directive("move", {
  bind: (el, binding) => {
    el.movedata = {
      initX: parseInt(el.style.left, 10),
      initY: parseInt(el.style.top, 10),
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      allowDrag: true
    };

    let value, width;
    if (binding.value.className) {
      value = binding.value.className;
      width = binding.value.width;
    } else {
      value = binding.value;
    }

    el.style.zIndex = 10;

    if (binding.value && !binding.value.move) {
      el.querySelector(`.${value}`).style.cursor = "pointer";
    } else {
      el.querySelector(`.${value}`).style.cursor = "move";
    }
    el.querySelector(`.${value}`).style.userSelect = "none";

    if (el.style.right) {
      const right = parseInt(el.style.right, 10);
      const left = document.body.clientWidth - right - width;
      el.style.right = "";
      el.style.left = `${left}px`;
      el.movedata.initX = left;
    }

    el.movemethod = {
      handleMousedown: e => {
        if (
          el.movedata.allowDrag &&
          e.target.closest(`.${value}`) &&
          el.contains(e.target.closest(`.${value}`))
        ) {
          Vue.prototype.zIndex++;
          el.style.zIndex = Vue.prototype.zIndex;
          el.movedata.allowDrag = false;
          el.movedata.startX = e.pageX;
          el.movedata.startY = e.pageY;
        }
      },
      handleMousemove: e => {
        if (!el.movedata.allowDrag) {
          const x = e.pageX;
          const y = e.pageY;
          el.movemethod.handleInstancePosition(
            el.movedata.initY + y - el.movedata.startY,
            el.movedata.initX + x - el.movedata.startX
          );
        }
      },
      handleMouseup: () => {
        if (!el.movedata.allowDrag) {
          el.movedata.allowDrag = true;
          el.movedata.initX = parseInt(el.style.left, 10);
          el.movedata.initY = parseInt(el.style.top, 10);
        }
      },
      handleInstancePosition(top, left) {
        el.style.top = `${top}px`;
        el.style.left = `${left}px`;
      }
    };
    document.addEventListener("mousedown", el.movemethod.handleMousedown);
    document.addEventListener("mousemove", el.movemethod.handleMousemove);
    document.addEventListener("mouseup", el.movemethod.handleMouseup);
  },
  unbind: (el, binding) => {
    document.removeEventListener("mousedown", el.movemethod.handleMousedown);
    document.removeEventListener("mousemove", el.movemethod.handleMousemove);
    document.removeEventListener("mouseup", el.movemethod.handleMouseup);
  }
});
