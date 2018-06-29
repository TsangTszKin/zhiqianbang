<template>
	<div id="app" class="container">
    		<div class="virtual">
				<template v-for="token in tokens">
					<virtual :ref="token" :token="token"></virtual>
				</template>
				
				<div class="virtualMenu">
					<a href="javascript:;" class="virtualHidden">隐藏工具栏</a>
					
					<div class="virtual_time" id="timer"></div>
					
					<div class="virtual_top">
						<a href="javascript:;" @click="terminal">暂停实验</a>
					</div>
					<ul class="virtualList">
						<li>
							<a href="javascript:;" class="num"><i class="fa fa-comments-o fa-lg" aria-hidden="true"></i>实验任务</a>
							
							<div class="virtualPop">
								<i class="virtualIcon"></i>
								<form class="layui-form" action="">
								  <div class="layui-form-item">
								    <label class="layui-form-label">名称</label>
								    <div class="layui-input-block">
								      {{experiment.name}}
								    </div>
								  </div>
								  <div class="layui-form-item">
								    <label class="layui-form-label">描述</label>
								    <div class="layui-input-block" v-html="experiment.description">
								    </div>
								  </div>
								</form>
							</div>
						</li>
						<li>
							<a href="javascript:;" class="num" @click="showClipboard">
								<i class="fa fa-clipboard" aria-hidden="true"></i>
								剪切板
							</a>
						</li>
						<li>
							<a href="javascript:;" class="num" id="fullScreenBtn" @click="switchScreen"><i class="fa fa-arrows-alt fa-lg" aria-hidden="true"></i>全屏</a>
						</li>
					</ul>
				</div>
			</div>
    	</div>
</template>

<script>
import virtual from './virtual';
import env from '@/config/env';
import {findGetParameter} from '@/utils/common';

const urlPrefix = env.gwApiPrefix;

export default {
	components: {
		virtual,
	},
	data() {
		return {
			tokens: findGetParameter('token'),
			clipboards: {},
			activeToken: '',
			lastToken: '',
			loadingId: '',
			experiment: '',
			maxtime: 3600,
			experimentId: findGetParameter('id')[0],
			timer: null,
			isFullScrean: false
		}
	},
	mounted() {
		this.loadingId = layer.load(1);
		var self = this;
		$('.virtual .virtualCont').first().show();
		this.activeToken = this.tokens[0];
		this.$on('recieveClipboardEvent', function(token, content) {
			self.clipboards[token] = content;
		});
		this.$on('virtualReadyEvent', function(token) {
			layer.close(self.loadingId);
			self.setClipboard("zhisu_resize_" + window.innerWidth + "x" + window.innerHeight);
		});
		this.$on('virtualErrorEvent', function(token) {
			layer.close(self.loadingId);
			self.$pop.error({
				message: "虚拟机连接失败，请联系管理员",
			})
		})
		
    	$.ajax({
    		url: `${urlPrefix}/api/zsapi/practice/userExperiments/${self.experimentId}/surplusTime`,
    		type: 'get',
    	}).done(data => {
    		self.maxtime = JSON.parse(data).object;
    	});
    	
    	$.ajax({
    		url: `${urlPrefix}/api/zsapi/practice/userExperiments/${self.experimentId}`,
    		type: 'get',
    	}).done(data => {
    		self.experiment = JSON.parse(data).object.experiment;
    	})
    	
        this.timer = setInterval(this.countDown,1000);
	},
	watch: {
		activeToken(newVal, oldVal) {
			this.lastToken = oldVal;
			this.$emit('activateTokenEvent', newVal);
		},
		isFullScrean() {
			setTimeout(() => {
				this.setClipboard("zhisu_resize_" + window.innerWidth + "x" + window.innerHeight);
			}, 500)
		}
	},
	methods: {
		setClipboard(data) {
			for(var token of this.tokens) {
				this.$emit('setClipboardEvent', token, data);
			}
		},
		showClipboard() {
			var self = this;
			var content = this.clipboards[this.activeToken];
			this.activeToken = '';
			var layId = layer.prompt({
				title: '读/写远端剪切板内容，暂不支持中文',
				formType: 2, // textarea
				value: content,
				end: function() {
					  self.activeToken = self.lastToken;
				},
			}, function(val, index){
			  self.setClipboard(val);
				  layer.msg('已经复制到远端剪切板，快去粘贴吧');
				  layer.close(index);
			});
		},
		terminalExperiment() {
			var self = this;
			var validTime = self.getValidTime();
			var minutes = Math.floor(validTime/60000);
			$.ajax({
				url: urlPrefix + "/api/zsapi/practice/userExperiments/over",
				type: 'post',
				contentType: 'application/json',
				data: JSON.stringify({
					userExperimentId: self.experimentId,
				})
			}).done(function(data) {
				var data = JSON.parse(data);
				if(data.code == "0") {
					self.$pop.ok({
						message: "成功结束该实验。有效实验时间为："+minutes+"分。",
						close: function() {
        					window.close();
						}
					});
				} else {
					self.$pop.error({
						message: "结束实验失败："  + data,
						close: function() {
							window.close();
						}
					});
				};
			});
		},
		terminal() {
			var self = this;
			self.$pop.confirm({
    			message: "是否结束该实验？",
    			ok: function() {
    				self.terminalExperiment();
    			},
    		})
		},
		countDown() {
			var self = this;
			if(this.maxtime>=0){   
		        var minutes = Math.floor(this.maxtime%3600/60);   
		        var seconds = Math.floor(this.maxtime%60); 
		        var hours = Math.floor(this.maxtime/60/60);
		        var msg = "";
		        if (minutes<10) {
		        	minutes = "0" + minutes;
		        }
		        if (seconds<10) {
		        	seconds = "0" + seconds;
		        }
		        if (hours > 0) {
		        	msg = hours + ":";
		        }
		        msg += minutes+":"+seconds;   
		        $("#timer").text(msg);  
		        --this.maxtime;   
		    }else{   
		        clearInterval(self.timer);
		        if (self.loadingId) {
		        	layer.close(self.loadingId);
		        }
		        self.$pop.warn({
		        	message: "时间到，结束实验！",
		        	close: function() {
		        		self.terminalExperiment();
		        	}
		        })
	        }  
		},
		fullScreen() {
		    var el = document.body;

		    // Supports most browsers and their versions.
		    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
		    || el.mozRequestFullScreen || el.msRequestFullScreen;

		    if (requestMethod) {

		      // Native full screen.
		      requestMethod.call(el);

		    } else if (typeof window.ActiveXObject !== "undefined") {

		      // Older IE.
		      var wscript = new ActiveXObject("WScript.Shell");

		      if (wscript !== null) {
		        wscript.SendKeys("{F11}");
		      }
		    }
		},
		exitFullScreen() {
		    if (document.exitFullscreen) {
		        document.exitFullscreen();
		    }
		    else if (document.mozCancelFullScreen) {
		        document.mozCancelFullScreen();
		    }
		    else if (document.webkitCancelFullScreen) {
		        document.webkitCancelFullScreen();
		    }
		    else if (document.msExitFullscreen) {
		        document.msExitFullscreen();
		    }
		},
		switchScreen() {
			if(this.isFullScrean) {
				this.exitFullScreen();
				this.isFullScrean = false;
				$("#fullScreenBtn").html('<i class="fa fa-arrows-alt"></i>全屏');
			} else {
				this.fullScreen();
				this.isFullScrean = true;
				$("#fullScreenBtn").html('<i class="fa fa-compress"></i>退出全屏');
			}
		},
		getValidTime() {
			var self = this;
			var validTime = 0;
			var userExperimentId = self.experimentId;
			var operateTimeString = localStorage.getItem(userExperimentId + "_operateTime");
			if (operateTimeString != null) {
				var operateTimeObject = JSON.parse(operateTimeString);
				validTime = operateTimeObject.validTime + operateTimeObject.lastTime - operateTimeObject.startTime;
			}
			$.ajax({
				type:"post",
				url:env.gwApiPrefix + "/api/zsapi/practice/userExperiments/validTime",
				data:JSON.stringify({"validTime": validTime, "userExperimentId": userExperimentId}),
				contentType:'application/json;charset=utf-8',
				dataType:"json",
			});
			return validTime;
		}
	}
}

</script>
