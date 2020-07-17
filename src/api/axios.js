import axios from "axios";
import store from "@/store";

const uid = sessionStorage.getItem("uid");

const ajax = axios.create({
  baseURL: "/api/",
  headers: {
    uid
  }
});

function throwError(message = "系统错误", code) {
  console.error({ message, code });
  store.commit("event/setAjaxError", true);
  store.commit("event/setAjaxContent", { message, code });
}

// 制造一个高阶函数完成
function axiosCommon() {
  return async function(url, type, params) {
    const getdata = await ajax({
      method: type,
      url,
      [type.toLowerCase() === "get" ? "params" : "data"]: params
    }).catch(e => {
      throwError(e.message, e.response.status);
    });
    // 检测到code===1即视为成功
    if (getdata.data.code === 1) {
      return getdata.data;
    }

    throwError(getdata.data.msg, getdata.data.code);
  };
}

export const get = (url, params) => axiosCommon()(url, "get", params);

export const post = (url, params) => axiosCommon()(url, "post", params);
