import pop from "../utils/pop";
import http from "../config/http";
import { error } from "util";
import { read } from "fs";

let getTicket = () => {
  return localStorage.ticket;
};
const prefix = http.gwApiPrefix;
const errorHandler = error => {
  pop.error("加载数据失败！");
  console.log(error);
};

export default {
  getMyResume() {
    return axios
      .get(
        `${prefix}/api/resume/person/getP
		ersonalResume?ticket=` + getTicket()
      )
      .catch(errorHandler);
  },
  //新增简历第一步
  save1step(params) {
    return axios
      .post(
        `${prefix}/api/resume/person/stepOneSave?ticket=` + getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //新增简历第二步
  save2step(resumeId, params) {
    return axios
      .post(
        `${prefix}/api/resume/person/stepTwoSave/${resumeId}?ticket=` +
          getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //新增简历第三步
  save3step(resumeId, params) {
    return axios
      .post(
        `${prefix}/api/resume/person/stepThreeSave/${resumeId}?ticket=` +
          getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //新增简历第四步
  save4step(resumeId, params) {
    return axios
      .post(
        `${prefix}/api/resume/person/stepFourSave/${resumeId}?ticket=` +
          getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //编辑简历
  updateResume(resumeId, params) {
    return axios
      .post(
        `${prefix}/api/resume/person/update/${resumeId}?ticket=` + getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //是否公开简历
  isOpen(resumeId, isOpen) {
    return axios
      .get(
        `${prefix}/api/resume/person/${resumeId}/${isOpen}/isOpen?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //简历完整度
  fullPercent(resumeId) {
    return axios
      .get(
        `${prefix}/api/resume/common/fullPercent/${resumeId}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //给企业推荐简历列表
  getRecommendList(pageNum, pageSize, params) {
    return axios
      .post(
        `${prefix}/api/resume/company/recmommendlist/${pageNum}/${pageSize}?ticket=` +
          getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //企业的下载简历的列表（人才库）
  getDownloadedResumeList(pageNum, pageSize, params) {
    return axios
      .post(
        `${prefix}/api/resume/company/companylist/${pageNum}/${pageSize}?ticket=` +
          getTicket(),
        params
      )
      .catch(errorHandler);
  },
  //删除校内荣誉(单个）
  deleteResumeEduExperience(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeEduExperience/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //教育经验删除(单个）
  deleteResumeEducation(id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeEducation/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //删除掌握技能(单个）
  deleteResumeHandleSkill(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeHandleSkill/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //简历工作经验删除((单个）
  deleteResumeJobExperience(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeJobExperience/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //简历项目经验删除(单个）
  deleteResumeProjectExperience(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeProjectExperience/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //简历校内职务删除(单个）
  deleteResumeSchoolDuty(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeSchoolDuty/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //简历技能证书 删除(单个）
  deleteResumeSkillsCertificate(id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeSkillsCertificate/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //培训经历删除(单个）
  deleteResumeTrainingExperience(resumeId, id) {
    return axios
      .get(
        `${prefix}/api/resume/person/deleteResumeTrainingExperience/${resumeId}/${id}?ticket=` +
          getTicket()
      )
      .catch(errorHandler);
  },
  //人才查询字典列表
  getPersonQueryTypeList() {
      return axios.get(`${prefix}/api/resume/common/typelist?ticket=`+getTicket()).catch(errorHandler);
  }
};
