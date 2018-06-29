import pop from '../utils/pop';
import http from '../config/http';

const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	console.log(error);
	pop.error("加载数据失败！");
}

export default {
	getPaperInfo(estimateExamId) {
		return axios.get(`${prefix}/api/zsapi/estimate/exams/${estimateExamId}/paper?ticket=${ticket()}`).catch(errorHandler);
	},
	getMyPaper(estimateExamId) {
		return axios.post(`${prefix}/api/zsapi/estimate/estimateUsers?ticket=${ticket()}`, {
			estimateExamId: estimateExamId,
		});
	},
	getMyEstimateInfo(estimateUserId) {
		return axios.get(`${prefix}/api/zsapi/estimate/estimateUsers/${estimateUserId}?ticket=${ticket()}`).catch(errorHandler);
	},
	// 试题分页，返回试题和已经保存的答案
	getMyPaperInfo(myPaperId) {
		return axios.get(`${prefix}/api/zsapi/exam/paperUsers/${myPaperId}`).catch(errorHandler);
	},
	// 开始做题，返回剩余时间
	startMyExam(myPaperId) {
		return axios.get(`${prefix}/api/zsapi/exam/paperUsers/${myPaperId}/surplusTime?ticket=${ticket()}`).catch(errorHandler);
	},
	// 提交分页答案
	submitMyAnswer(model) {
		return axios.post(`${prefix}/api/zsapi/exam/userInfo?ticket=${ticket()}`, model);
	},
	// 完成答题，返回评分
	completeMyPaper(myPaperId) {
		return axios.post(`${prefix}/api/zsapi/exam/paperUsers/${myPaperId}?ticket=${ticket()}`);
	},
	getCareerDirections() {
		return axios.get(`${prefix}/api/zsapi/career/directions`).catch(errorHandler);
	},
	listEstimatesByUser(userId) {
		return axios.get(`${prefix}/api/zsapi/estimate/users/${userId}/estimates?ticket=${ticket()}`).catch(errorHandler);
	}
}