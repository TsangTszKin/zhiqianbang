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
	getUserInfo(id){
		return axios.get(`${prefix}/api/auth/getUserDetail/${id}?ticket=`+getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	getLoginUser(){
		return axios.get(`${prefix}/api/auth/getLoginUser?ticket=`+getTicket()).catch(errorHandler);
	},
	modifyUser(user){
		return axios.post(`${prefix}/api/auth/modifyUser/STUDENT?ticket=`+getTicket(),user).catch(errorHandler);
	},
	//企业用户的首页信息接口
	getCompanyHomeMsg(){
		return axios.get(`${prefix}/api/zsapi/recruitment/company/companyIndex?ticket=`+getTicket()).catch(errorHandler);
	}
}