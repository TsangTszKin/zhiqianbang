import pop from '../utils/pop';
import http from '../config/http';
let getTicket = () => {
	return localStorage.ticket;
}
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	//用户
	getStudentPracticeList(){
		return `${prefix}/api/zsapi/practice/userPlans?ticket=`+getTicket();
	}
	,
	getStudentPracticeExperimentList(planId){
		return `${prefix}/api/zsapi/practice/experiments?planId=${planId}`;
	},
	//购买课程
	addPractice(data){
		return axios.post(`${prefix}/api/zsapi/practice/userPlans?ticket=`+getTicket(),data).catch(errorHandler);
	},
	//添加实验报告
	addExperimentReport(data){
		return axios.post(`${prefix}/api/zsapi/practice/userExperiments/report?ticket=`+getTicket(),data).catch(errorHandler);
	},
	//获取实验内容
	getUserExperiment(id){
		return axios.get(`${prefix}/api/zsapi/practice/userExperiments/${id}?ticket=`+getTicket()).catch(errorHandler);
	},
	//收藏
	collectPractice(id){
		return axios.get(`${prefix}/api/zsapi/practice/userPlans/collect/${id}?ticket=`+getTicket()).catch(errorHandler);
	}
}