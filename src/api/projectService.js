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
	getList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/projectInfo/pageList/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getTypeList() {
		return axios.post(`${prefix}/api/zsapi/projectInfo/typeList?ticket=` + getTicket(), {}).catch(errorHandler);
	},
	getProjectDetail(id) {
		return axios.get(`${prefix}/api/zsapi/projectInfo/detail/${id}?ticket=` + getTicket()).catch(errorHandler);
	},
	joinProject(params) {
		return axios.post(`${prefix}/api/zsapi/projectApply/save?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getMyList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/projectInfo/myPageList/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(errorHandler);
	},
	getProjectApplyList(pageNum, pageSize, params) {
		return axios.post(`${prefix}/api/zsapi/projectApply/pageList/${pageNum}/${pageSize}?ticket=` + getTicket(), params).catch(errorHandler);
	}

}