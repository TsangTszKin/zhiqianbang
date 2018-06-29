import Vue from 'vue';
import env from '../config/env';

const prefix = env.gwApiPrefix.replace("https://", "ws://").replace("http://", "ws://");
var websocket;

const wsBus = new Vue({
	data: {
		ticket: '',
	},
	methods: {
		init: function() {
			var self = this;
			if(!localStorage.ticket)
				return;
			if(this.ticket === localStorage.ticket && websocket && websocket.readyState !== WebSocket.CLOSED)
				return;
			
			this.ticket = localStorage.ticket;
			if(websocket)
				websocket.close();
			
			 //判断当前浏览器是否支持WebSocket
	        if('WebSocket' in window){
	            websocket = new WebSocket(prefix + "/websocket/zs/" + this.ticket);
	        }
	        else{
				alert('Not support websocket');
				return;
	        }

	        //连接发生错误的回调方法
	        websocket.onerror = function(error){
	        	console.log("websocket error");
	        	console.log(error);
	        };

	        //连接成功建立的回调方法
	        websocket.onopen = function(event){
	        }

	        //接收到消息的回调方法
	        websocket.onmessage = function(event){
				var data = event.data;
	        	if((typeof data) == "string" && data.substr(0,1) == "{"){
					var type = (JSON.parse(data)).type
	        		data = JSON.parse(data).data;
	        		self.$emit(type, data);
	        	} else {
	        		console.log(data);
	        	}
	        }

	        //连接关闭的回调方法
	        websocket.onclose = function(){
	        }
		},
		send: function(content) {
			websocket.send(content);
		}
	}
});

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function(){
	if(websocket)
		websocket.close();
}
export default wsBus;