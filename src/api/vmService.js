import pop from '../utils/pop';
import http from '../config/http';
const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	startExperiment(userExperimentId) {
		return axios.post(`${prefix}/api/zsapi/practice/userExperiments/statrt?ticket=${ticket()}`, {
			userExperimentId: userExperimentId,
		});
	}
}