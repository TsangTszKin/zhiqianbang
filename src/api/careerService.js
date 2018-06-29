import pop from '../utils/pop';
import env from '../config/env';

const ticket = () => localStorage.ticket;
const prefix = env.gwApiPrefix;
const errorHandler = error => {
	console.log(error);
	pop.error("加载数据失败！");
}

export default {
	getCareerDirections() {
		return axios.get(`${prefix}/api/zsapi/career/directions`).catch(errorHandler);
	},
	getCareerCategories() {
		return axios.get(`${prefix}/api/zsapi/career/categories`).catch(errorHandler);
	}
}