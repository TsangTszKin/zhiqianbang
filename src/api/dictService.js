/*
 * @Author: Tsang 
 * @Date: 2018-05-02 14:59:31 
 * @Last Modified by: Tsang
 * @Last Modified time: 2018-05-02 15:58:59
 * 数据字典接口
 */
import pop from "../utils/pop";
import http from "../config/http";
import Axios from "axios";

let getTicket = () => {
  return localStorage.ticket;
};
const prefix = http.gwApiPrefix;
const errorHandler = error => {
  pop.error("加载数据失败！");
  console.log(error);
};

export default {
  //数据字典,多个用逗号隔开
  getDict(codes) {
    return axios.get(`${prefix}/api/zsapi/dict/datacache/loadDict/${codes}?ticket=`+getTicket()).catch(errorHandler);
  }
};
