/*
 * @Author: Tsang 
 * @Date: 2017-12-06 14:44:10 
 * @Last Modified by: Tsang
 * @Last Modified time: 2018-04-20 10:28:42
 */
import http from "../config/http";
const sftpPathPrefix = http.sftpPathPrefix;
//时间格式化
export var formatTime = (pattern, time) => {
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
    case "yyyy-MM":
      returnTime = Y + M.substring(0,M.length-1);
      break;
    case "yyyy-MM-dd hh:mm":
      returnTime = Y + M + D + h + m;
      break;
    default:
      break;
  }
  return returnTime;
};
// 判断是否为手机号
export var isPoneAvailable = phone => {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phone)) {
    return false;
  } else {
    return true;
  }
};
// 判断是否为电话号码
export var isTelAvailable = tel => {
  var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (!myreg.test(tel)) {
    return false;
  } else {
    return true;
  }
};
// 判断是否为邮箱
export var isEmailAvailable = email => {
  var myreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  if (!myreg.test(email)) {
    return false;
  } else {
    return true;
  }
};
//计算时间差（天、小时、分钟、秒）
export var timeDiff = timeStamp => {
  var dateNow = new Date(); //开始时间
  var dateFuture = timeStamp; //结束时间

  var date3 = dateFuture - dateNow.getTime(); //时间差的毫秒数

  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));

  //计算出小时数

  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  // alert(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
  var timeObj = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };

  let timeDiffStr = "";

  if (timeObj.days <= 0) {
    if (timeObj.hours <= 0) {
      if (timeObj.minutes <= 0) {
        if (timeObj.seconds <= 0) {
          timeDiffStr = "已截止";
        } else {
          timeDiffStr = timeObj.seconds + "秒后截止";
        }
      } else {
        timeDiffStr = timeObj.minutes + "分钟后截止";
      }
    } else {
      timeDiffStr = timeObj.hours + "小时后截止";
    }
  } else {
    timeDiffStr = timeObj.days + "天后截止";
  }

  return timeDiffStr;
};

//计算时间差（天-小时-分钟）
export var timeDiff_link = timeStamp => {
  var dateNow = new Date(); //开始时间
  var dateFuture = timeStamp; //结束时间

  var date3 = dateFuture - dateNow.getTime(); //时间差的毫秒数

  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));

  //计算出小时数

  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  // alert(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
  var timeObj = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };

  let timeDiffStr =
    "<b>" +
    days +
    "</b>" +
    "天 " +
    "<b>" +
    hours +
    "</b>" +
    "小时 " +
    "<b>" +
    minutes +
    "</b>" +
    " 分钟";

  return timeDiffStr;
};
//获取input file 本地文件显示的路径
export var getObjectURL = file => {
  let url = null;
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
};

//获取上传的图片路径
export var getUploadFilePath = path => {
  return `${sftpPathPrefix}/${path}`;
};

export const findGetParameter = function(parameterName) {
  var result = [],
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result.push(decodeURIComponent(tmp[1]));
    });
  return result;
};
