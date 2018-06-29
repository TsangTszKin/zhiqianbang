import pop from '../utils/pop';
import http from '../config/http';
const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	getQuestionsInfo(facadeId) {
		return axios.get(`${prefix}/api/zsapi/exam/facade/paperFacades/${facadeId}/questions?ticket=${ticket()}`).catch(errorHandler);
	},
	getQuestion(id) {
		return axios.get(`${prefix}/api/zsapi/exam/questions/${id}?ticket=${ticket()}`).catch(errorHandler);
	},
	saveQuestion(model) {
		return axios.post(`${prefix}/api/zsapi/exam/questions?ticket=${ticket()}`, {
			id: model.id,
			facadeId: model.facadeId,
			awser: model.awser instanceof Array ? model.awser.join(',') : model.awser,
			awserOption: JSON.stringify(model.awserOption),
			questionType: model.questionType,
			content: model.content,
		});
	},
	donePaper(facadeId) {
		return axios.post(`${prefix}/api/zsapi/exam/facade/paperFacades/updatePaper?id=${facadeId}&ticket=${ticket()}`);
	},
	getPaperInfo(facadeId) {
		return axios.get(`${prefix}/api/zsapi/exam/facade/paperFacades/${facadeId}?ticket=${ticket()}`).catch(errorHandler);
	},
	deletePaper(facadeId) {
		return axios.post(`${prefix}/api/zsapi/exam/facade/paperFacades/deletePaper?id=${facadeId}&ticket=${ticket()}`)
	},
	createPaper(model) {
		return axios.post(`${prefix}/api/zsapi/exam/facade/paperFacades?ticket=${ticket()}`, model);
	},
	getMyInterviewPaper(facadeId, applyId) {
		return axios.post(`${prefix}/api/zsapi/exam/paperUsers?ticket=${ticket()}`, {
			paperFacadeID: facadeId,
			positionApplyId: applyId,
			paperType: 'FACE',
		});
	},
	getMyAllAnswers(paperUserId) {
		return axios.get(`${prefix}/api/zsapi/exam/userInfos?ticket=${ticket()}&paperUserId=${paperUserId}&pageSize=1000&pageNum=1`).catch(errorHandler);
	},
	// getJobWantTypeList1(){
	// 	return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/JOB_INTENTION?ticket=${ticket()}`).catch(res =>{
	// 		errorHandler(res.data);
	// 	});
	// },
	// getJobWantTypeList2(typeCode) {
	// 	return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/${typeCode}?ticket=${ticket()}`).catch(res => {
	// 		errorHandler(res.data);
	// 	});
	// },
	getMyInterviewPapers() {
		return axios.get(`${prefix}/api/zsapi/exam/myDonePapers?ticket=${ticket()}&paperType=FACE`).catch(errorHandler);
	}
}