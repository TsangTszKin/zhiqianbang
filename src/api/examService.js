import pop from '../utils/pop';
import http from '../config/http';
import {
	error
} from 'util';

let getTicket = () => {
	return localStorage.ticket;
}
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
	getMyExamList(pageNum, pageSize) {
		return axios.get(`${prefix}/api/zsapi/exam/facade/paperFacades?pageNum=${pageNum}&pageSize=${pageSize}&ticket=`+getTicket()).catch(res => {
			errorHandler(res.data);
		});
	}


}