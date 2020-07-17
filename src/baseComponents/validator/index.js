/**
 * Verifier
 */
export default {
  mobile: () => (rule, value, callback) => {
    if (!/^1[0-9]{10}$/.test(value)) {
      callback(new Error("手机号码错误"));
    } else {
      callback();
    }
  },

  email: () => (rule, value, callback) => {
    if (!/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
      callback(new Error("电子邮箱格式错误"));
    } else {
      callback();
    }
  }
};
