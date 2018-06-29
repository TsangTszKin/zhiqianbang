import pop from '../utils/pop';
import http from '../config/http';
import {
	error
} from 'util';
const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	getQuestion(id) {
		return axios.get(`${prefix}/api/zsapi/exam/questions/${id}?ticket=${ticket()}`).catch(errorHandler);
	},
	saveOrUpdate(params) {
		return axios.post(`${prefix}/api/zsapi/exam/questions/saveOrUpdate?ticket=${ticket()}`, params).catch(errorHandler);
	},
	delete(questionId) {
		return axios.get(`${prefix}/api/zsapi/exam/questions/delete/${questionId}?ticket=${ticket()}`).catch(errorHandler);
	},
	getMyQuestionList(contentLike, status, pageNum, pageSize, echo, questionType, level) {
		return axios.get(`${prefix}/api/zsapi/exam/questions?status=${status}&contentLike=${contentLike}&questionType=${questionType}&level=${level}&pageNum=${pageNum}&pageSize=${pageSize}&echo=${echo}&ticket=${ticket()}`).catch(errorHandler);
	},
	//人工组卷提交
	savePersonalSelectPaper(params) {
		return axios.post(`${prefix}/api/zsapi/exam/facade/paperFacades/select/questions?ticket=${ticket()}`, params).catch(errorHandler);
	},
	//根据多个试题的id，获取多个试题的具体信息
	examQuestionPreview(idString) {
		return axios.get(`${prefix}/api/zsapi/exam/questions/view?idString=${idString}&pageNum=1&pageSize=200&ticket=${ticket()}`).catch(errorHandler);
	}

}