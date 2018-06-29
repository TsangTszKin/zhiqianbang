import pop from '../utils/pop';
import http from '../config/http';
import { error } from 'util';
const ticket = () => localStorage.ticket;
const prefix = http.gwApiPrefix;
const errorHandler = error => {
	pop.error("加载数据失败！");
	console.log(error);
}

export default {
    saveLabel(params) {
		return axios.post(`${prefix}/api/zsapi/label/save?ticket=${ticket()}`, params).catch(errorHandler);
	}
}