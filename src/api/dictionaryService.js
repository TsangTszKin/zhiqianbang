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

	getList(parentCode) {
		return axios.get(`${prefix}/api/zsapi/kindconfig/listByParentCode/${parentCode}?ticket=` + getTicket()).catch(res => {
			errorHandler(res.data);
		});
	}

}