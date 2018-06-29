import pop from '../utils/pop';
import http from '../config/http';
import axios from "axios";
const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	//获取实训营列表
	getPracticeList(){
		return `${prefix}/api/zsapi/practice/plans`;
	},
	//获取实训营详情
	getPractice(practiceId){
		return axios.get(`${prefix}/api/zsapi/practice/plans/${practiceId}?ticket=${ticket()}`).catch(errorHandler);
	},
	//获取实训营推荐列表
	getPracticeRecommend(practiceId){
		return`${prefix}/api/zsapi/practice/plans/recommend?practiceId=${practiceId}`;
	},
	listPlanByUser(userId) {
		return axios.get(`${prefix}/api/zsapi/practice/users/${userId}/plans?ticket=${ticket()}`).catch(errorHandler);
	},
	//获取实训营详情
	getPracticeExperiment(experimentId){
		return axios.get(`${prefix}/api/zsapi/practice/experiments/${experimentId}?ticket=${ticket()}`).catch(errorHandler);
	},
	
}