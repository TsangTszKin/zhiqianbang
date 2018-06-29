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
	addOneFavorite(targetType, targetId){
		return axios.post(`${prefix}/api/zsapi/favorite/favorites?targetType=${targetType}&targetId=${targetId}&ticket=`+getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	delOneFavorite(id){
		return axios.delete(`${prefix}/api/zsapi/favorite/favorites/${id}?ticket=`+ getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	//职位
	getJobList(pageNum,pageSize){
		return axios.get(`${prefix}/api/zsapi/recruitment/myfavorate/${pageNum}/${pageSize}?ticket=`+getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	//项目
	getProjectList(pageNum,pageSize){
		return axios.get(`${prefix}/api/zsapi/favorite/myfavorateproject/${pageNum}/${pageSize}?ticket=`+getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	//实训
	getPracticeList(pageNum,pageSize){
		return axios.get(`${prefix}/api/zsapi/favorite/myfavoratepractice/${pageNum}/${pageSize}?ticket=`+getTicket()).catch(res=>{
			errorHandler(res.data);
		});
	},
	//删除职位收藏
	delOneJobFavorite(objectId, favoriteType){
		return axios.delete(`${prefix}/api/zsapi/favorite/deleteByTypeAndId/${objectId}/${favoriteType}?ticket=`+getTicket()).catch(errorHandler);
	}
}