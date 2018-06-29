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
	getStudentOrderList(){
		return `${prefix}/api/zsapi/trade/userOrders?ticket=`+getTicket();
	}
}