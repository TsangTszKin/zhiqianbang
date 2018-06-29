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

	getCompanyMessageList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentinvite/company/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getPersonalMessageList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/recruitmentinvite/personal/list/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getUnreadMessage(){
		return axios.get(`${prefix}/api/zsapi/messageRecord/getUnreadList?ticket=`+getTicket()).catch(errorHandler);
	},
	//获取站内信
	getSysMsg(pageNum, pageSize) {
		return axios.get(`${prefix}/api/zsapi/messageRecord/getSystemMessagePage/${pageNum}/${pageSize}?ticket=`+getTicket()).catch(errorHandler);
	}

}