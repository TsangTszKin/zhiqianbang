import Vue from "vue";
import { formatDate } from "./dateFormat.js";

Vue.filter("alibaba-json-date", function(value) {
  if (value) {
    var year = value.year + 1990;
    var month = value.month + 1;
    return year + "-" + month + "-" + value.date;
  }
});

Vue.filter("miliseconds-date", function(value, pattern = "yyyy-MM-dd") {
  if (value) {
    return formatDate(new Date(value), pattern);
  }
});

Vue.filter("money", function(val) {
  val = val.toString().replace(/\$|\,/g, "");
  if (isNaN(val)) {
    val = "0";
  }
  let sign = val == (val = Math.abs(val));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if (cents < 10) {
    cents = "0" + cents;
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val =
      val.substring(0, val.length - (4 * i + 3)) +
      "," +
      val.substring(val.length - (4 * i + 3));
  }

  return (sign ? "" : "-") + val + "." + cents;
});

Vue.filter("formatTime", function(time, pattern) {
  if (!time) return "";
  let returnTime = "未定义";
  var date = new Date(time);
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D =
    date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
  let h =
    date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
  let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  switch (pattern) {
    case "yyyy-MM-dd":
      returnTime = Y + M + D;
      break;
    case "yyyy-MM-dd hh:mm":
      returnTime = Y + M + D + h + m;
      break;
    case "yyyy-MM":
      returnTime = Y + M.split("-")[0];
      break;
    default:
      break;
  }
  return returnTime;
});

Vue.filter("questionLevel", function(level) {
  switch (level) {
    case "SIMPLE":
      level = "简单";
      break;
    case "COMMON":
      level = "中等";
      break;
    case "DIFFICULT":
      level = "困难";
      break;
    default:
      level = "未定义";
      break;
  }
  return level;
});

Vue.filter("sex", function(value) {
  switch (value) {
    case "男":
      value = "男";
      break;
    case "女":
      value = "女";
      break;
    case "MALE":
      value = "男";
      break;
    case "FEMALE":
      value = "女";
      break;
    case "male":
      value = "男";
      break;
    case "female":
      value = "女";
      break;
    default:
      value = "未定义";
      break;
  }
  return value;
});

Vue.filter("timeGap", function(time, type) {
  var timers = new Date(time);
  var nowTime = new Date();

  var rs = "";
  switch (type) {
    case "y":
      rs = timers.getFullYear() - nowTime.getFullYear();
      break;
    case "M":
      rs = "未定义";
      break;
    default:
      rs = "未定义";
      break;
  }
  return rs;
});
