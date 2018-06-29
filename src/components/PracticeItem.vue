<template>
<dl class="dl-cell">
	<dt @click="imgClickHandler($event,item)">
		<sftp-img :src="item.imgUrl"></sftp-img>
	</dt>
	<dd class="d-1"><a @click="imgClickHandler($event,item)">{{item.name}}</a></dd>
	<dd class="clearfix d-2">
		 <p class="fl">
			难度: 
			<template v-if="item.difficulty == 'SIMPLE'"><i v-for="n in 2" class="iconfont icon-nandu"></i></template>
			<template v-if="item.difficulty == 'MEDIUM'"><i v-for="n in 3" class="iconfont icon-nandu"></i></template>
			<template v-if="item.difficulty == 'ADVANCED'"><i v-for="n in 4" class="iconfont icon-nandu"></i></template>
			
		 </p>
		 <p class="fr p-2"><span>{{item.viewTimes}}</span>人已浏览</p>
	</dd>	{{item.companyName}}
	<dd class="d-3" v-if="item.tradeGoods">￥{{item.tradeGoods.promotePrice|money}}</dd><!-- {{item.rmb|money}} -->

	<dd class="d-3" v-else>免费</dd>
	<div class="like" @click="collect(item)">
		<p class="iconfont icon-store" v-bind:class="{fav:item.fav==1}"></p>
		<p>收藏</p>
	</div>
	<div v-if="!item.tradeGoods" class="z-icon free">免费</div>
	<div v-else class="z-icon">会员</div>
</dl>
</template>
<style scoped>
	.fav{
		color:#FF6666;
	}
	.icon-nandu {
	    top: 0px !important;
	}
</style>
<script>
import SftpImg from './SftpImg';
import studentPracticeService from '../api/studentPracticeService';
import pop from '../utils/pop'
import ssoAuth from '../ssoAuth'
export default {
	components: {
		SftpImg,
	},
	data:function(){
		return{
		}
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
		imgClickHandler: {
			type: Function,
			required: false,
			default: function() {}
		}
	},
	methods:{
		collect:function(practice){
			const self = this;
   		 	if(!ssoAuth.loggedIn()) {
				self.$pop.confirm({
					message: "请先登录",
					ok: {
						label: '去登录',
						callback: function() {
							ssoAuth.goLogin();
						}
					},
				});
				return;
			};
			studentPracticeService.collectPractice(practice.id).then(response =>{
				if(response.data.code == 0){
					practice.fav = practice.fav==1?0:1;
				}else{
					pop.error("加载数据失败")
				}
				
			})
		}
	}
}
</script>