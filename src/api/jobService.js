import pop from '../utils/pop';
import http from '../config/http';
import {
	error
} from 'util';
import {
	read
} from 'fs';

let getTicket = () => {
	return localStorage.ticket;
}
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	addResume(params) {
		return axios.post(`${prefix}/api/zsapi/resume/add?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	jobApply(params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentapply/submit?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getResumeList() {
		return axios.get(`${prefix}/api/zsapi/resume/mylist?pageNum=1&pageSize=5&ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		})
	},
	delResume(id) {
		return axios.delete(`${prefix}/api/zsapi/resume/delete/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getJobList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		})
	},
	getJobTypeList() {
		return axios.get(`${prefix}/api/zsapi/recruitment/typelist?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompanyDetail(id) {
		return axios.get(`${prefix}/api/auth/getCompanyDetail/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getJobDetail(id) {
		return axios.get(`${prefix}/api/zsapi/recruitment/detail/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompanyList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/company/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompanyTypeList() {
		return axios.get(`${prefix}/api/zsapi/recruitment/company/typelist?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompnaytypelist(companyId) {
		return axios.get(`${prefix}/api/zsapi/recruitment/compnaytypelist/${companyId}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getMyCompanyJobList(pageNum, pageSize, status, params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/companylist/${status}/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getMyStudentJobList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentapply/personal/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	addJob(params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/save?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	updateJob(id, params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/update/${id}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getJobCategory() {
		return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/POSITION_CATEGORY?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompanyExpInfo(companyId) {
		return axios.get(`${prefix}/api/zsapi/recruitment/company/detail/${companyId}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getMyCompanyExpInfo() {
		return axios.get(`${prefix}/api/zsapi/recruitment/company/mydetail?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCompanyFuliType() {
		return axios.get(`${prefix}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	updatePublishStatus(jobId, status) {
		return axios.get(`${prefix}/api/zsapi/recruitment/updatePublishStatus/${jobId}/${status}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getMyInterviewList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentinvite/personal/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getResumeDetail(id) {
		return axios.get(`${prefix}/api/zsapi/resume/resumes/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	saveComapnyExpInfo(params) {
		return axios.post(`${prefix}/api/zsapi/recruitment/company/update?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getJobWantTypeList1() {
		return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/JOB_INTENTION?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getJobWantTypeList2(typeCode) {
		return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/${typeCode}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	geJobApplyList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentapply/company/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getTypeJobApplyTypeList() {
		return axios.get(`${prefix}/api/zsapi/recruitmentapply/typelist?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	companyInviteStudent(params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentinvite/add?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	changeApplyStatus(id, publishStatus) {
		return axios.get(`${prefix}/api/zsapi/recruitmentapply/updateApplyStatus/${id}/${publishStatus}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	personalInviteList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentinvite/personal/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	getPositionApplyDetail(applyId) {
		return axios.get(`${prefix}/api/zsapi/recruitmentapply/detail/${applyId}?ticket=${getTicket()}`).catch(errorHandler);
	},
	//证书开始
	addCertificate(params) {
		return axios.post(`${prefix}/api/skills/certificate/add?ticket=` + getTicket(), params).catch(res => {
			errorHandler(res.data);
		});
	},
	delCertificate(id) {
		return axios.delete(`${prefix}/api/skills/certificate/delete/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCertificateDetail(id) {
		return axios.get(`${prefix}/api/skills/certificate/detail/${id}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCertificateList(pageNum, pageSize) {
		return axios.get(`${prefix}/api/skills/certificate/mylist?pageNum=${pageNum}&pageSize=${pageSize}&ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	getCertificateListByUserId(pageNum, pageSize, userId) {
		return axios.get(`${prefix}/api/skills/certificate/list/${userId}?pageNum=${pageNum}&pageSize=${pageSize}&ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	},
	//证书结束
	saveJobWanted(params) {
		return axios.post(`${prefix}/api/zsapi/kindconfigrecord/saveJobIntention?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getMyJobWantedList() {
		return axios.get(`${prefix}/api/zsapi/kindconfigrecord/myJobIntention?ticket=` + getTicket()).catch(errorHandler);
	},
	deleteMyJobWanted(id) {
		return axios.delete(`${prefix}/api/zsapi/kindconfigrecord/delete/${id}?ticket=` + getTicket()).catch(errorHandler);
	},
	//检查是否可以答卷（条件：当前时间<申请时间+答题有效天数)
	checkPermitAnswerPaper(applyId) {
		return axios.get(`${prefix}/api/zsapi/recruitmentapply/checkPermitAnswerPaper/${applyId}`).catch(errorHandler);
	}


}