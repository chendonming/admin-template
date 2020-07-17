import Vue from "vue";

// 日期格式化
Vue.filter("dateFormate", function(value) {
  // 2020-02-03
  if (value.length === 10) {
    return (
      value.substring(0, 4) +
      "年" +
      value.substring(5, 7) +
      "月" +
      value.substring(8, 10) +
      "日"
    );
  }

  return value;
});

// 日期时间格式化
Vue.filter("dateTimeFormate", function(value) {
  // 2020-02-03 04:09:56
  if (value.length === 19) {
    return (
      value.substring(0, 4) +
      "年" +
      value.substring(5, 7) +
      "月" +
      value.substring(8, 10) +
      "日 " +
      value.substring(11, 13) +
      "时" +
      value.substring(14, 16) +
      "分" +
      value.substring(17, 19) +
      "秒"
    );
  }

  return value;
});
