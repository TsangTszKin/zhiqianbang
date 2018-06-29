import pop from "../utils/pop";
import http from "../config/http";
import { error } from "util";
import { read } from "fs";
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
  //新建课程计划
  addLessonPlan(params) {
    return axios.post(
      `${prefix}/api/zsapi/practice/otherPlans?ticket=` + getTicket(),
      params
    ).catch(errorHandler);
  },
  //获取课程计划列表
  getLessonPlanList(pageNum, pageSize, keyWords) {
    return axios.get(`${prefix}/api/zsapi/practice/otherPlans?keyWords=${keyWords}&pageNum=${pageNum}&pageSize=${pageSize}&careerCategory=COMPUTER_TECHNOLOGY&ticket=`+getTicket()).catch(errorHandler);
  },
  //修改课程计划
  updateLessonPlan(params) {
    return axios.put(`${prefix}/api/zsapi/practice/otherPlans?ticket=`+getTicket(), params).catch(errorHandler);
  },
  //修改课程状态
  updateLessonPlanStatus(status, ids) {
    return axios.post(`${prefix}/api/zsapi/practice/otherPlans/changeStatus?status=${status}&ids=${ids}&ticket=`+getTicket()).catch(errorHandler)
  },
  //查看课程计划详情
  getLessonPlanDetail(practiceId) {
    return axios.get(`${prefix}/api/zsapi/practice/otherPlans/${practiceId}?ticket=`+getTicket()).catch(errorHandler);
  },
  //阿里云视频上传参数获取
  aliyunParams(id) {
    return axios
      .get(`${prefix}/api/zsapi/vod/platforms/${id}?ticket=` + getTicket())
      .catch(errorHandler);
  },
  //新建课程
  addLesson(params) {
    return axios.post(
      `${prefix}/api/zsapi/practice/otherExperiments?ticket=` + getTicket(),
      params
    ).catch(errorHandler);
  },
  //获取课程列表
  getLessonPlanList(pageNum, pageSize, keyWords) {
    return axios.get(`${prefix}/api/zsapi/practice/otherPlans?keyWords=${keyWords}&pageNum=${pageNum}&pageSize=${pageSize}&careerCategory=COMPUTER_TECHNOLOGY&ticket=`+getTicket()).catch(errorHandler);
  },
};
