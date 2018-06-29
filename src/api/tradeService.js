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
	//购物车列表
	carts(){
		return `${prefix}/api/zsapi/trade/carts?ticket=`+getTicket();
	},
	//加入购物车
	joinCart(goodsId){
		const data = {
			 goodsId : goodsId,
			 num : 1
		}
		return axios.post(`${prefix}/api/zsapi/trade/carts?ticket=`+getTicket(),data).catch(errorHandler);
	},
	//移除购物车
	deleteCart(id){
		return axios.delete(`${prefix}/api/zsapi/trade/carts/${id}?ticket=`+getTicket()).catch(errorHandler);
	},
	submitList(goodsIds){
		return `${prefix}/api/zsapi/trade/orders/submits/${goodsIds}?ticket=`+getTicket();
	},
	//立即购买、添加订单
	submit(data){
		return axios.post(`${prefix}/api/zsapi/trade/orders?ticket=`+getTicket(),data).catch(errorHandler);
	},
	//订单详情
	orders(orderId){
		return axios.get(`${prefix}/api/zsapi/trade/orders/${orderId}?ticket=`+getTicket()).catch(errorHandler);
	},
	//支付
	pay(data){
		return axios.post(`${prefix}/api/zsapi/trade/orders/pay?ticket=`+getTicket(),data).catch(errorHandler);
	},
	//回调测试接口
	notify(orderIds){
		return axios.get(`${prefix}/api/zsapi/trade/payments/notifyForTest/${orderIds}?ticket=`+getTicket()).catch(errorHandler);
	},
	//取消订单
	cancel(orderId){
		return axios.get(`${prefix}/api/zsapi/trade/orders/cancel/${orderId}?ticket=`+getTicket()).catch(errorHandler);
	},
	
	getMyShopsInCart() {
		return axios.get(this.carts()).catch(errorHandler);
	}
	
}