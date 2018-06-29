<template>
	<div>
		<template v-if="filteredValues.length>0">
			<tempalte v-for="order in filteredValues" :key="order.orderNo">
				<table>
					<thead>
						<tr>
							<td width="80%">订单号：{{order.orderNo}}<span class="span-1"><date-format :time="order.createTime"/></span></td>
							<td width="20%">
								<template v-if="order.status == 'NEW'">剩余:
									<span  class="span-2">
										<count-down 
											:currentTime="order.currentTime" 
											:startTime="order.currentTime" 
											:endTime="order.endTime" 
											:dayTxt="'天'" 
											:hourTxt="'小时'" 
											:minutesTxt="'分钟'" 
											:secondsTxt="'秒'">
									 	</count-down>
									</span> 
								</template>
								<template v-else-if="order.status=='PAYED'"><span class="span-3">已支付</span></template>
								<template v-else-if="order.status=='CANCEL' || order.status=='PAYEDOVERTIME'"><span class="span-3">已取消</span></template>
							</td>
						</tr>
					</thead>
					<tbody>
						<template v-for="(item, index) in order.orderItemResults">
							<tr>
								<td><sftp-img :src="item.image" alt="" />{{item.title}}</td>
								<template v-if="index==0">
									<!--rowspan="3" 根据数据行数 设置对应数值-->
								
									<td v-bind:rowspan="order.orderItemResults.length" class="pay"> 
										<p>￥{{order.payFee}}</p>
										<template v-if="order.status=='NEW'">
											<button class="blueBtn" @click="pay(order.orderId)">去支付</button>
											<button class="exitBtn" @click="cancel(order)">取消订单</button>
										</template>
									</td>
								</template>
							</tr>
						</template>
					</tbody>
				</table>
			</tempalte>
			
		</template>
		<template v-else>
			<div class="noDate">
               	暂无数据！是否马上	<router-link to="/practice">创建</router-link>
             </div>
		</template>
			<!-- 分页 -->
			<div class="pages clearfix">
				<pagination ref="pagination" 
					@current-page="updateCurrentPage" 
				></pagination>
			</div>
	</div>
</template>
<style scoped>
	@import url('/static/css/enterprise/enterprise.css');
</style>
<script>
import VueListBase from './VueListBase.vue';
import DateFormat from './VueDateFormat.vue';
import CountDown from '../components/VCountDown';
import SftpImg from './SftpImg';
import tradeService from '../api/tradeService';
import pop from '../utils/pop';
import pagination from './Pagination'
export default{
	mixins:[VueListBase],
	components:{
		DateFormat,
		CountDown,
		SftpImg,
		pagination
	},
	data:function(){
		return{
			
		}
	},
	methods:{
		pay:function(orderIds){
			this.$router.push({ path: "/trade/pay/"+orderIds});
		},
		//取消订单
		cancel:function(order){
			tradeService.cancel(order.orderId).then(response =>{
				if(response.data.code == 0){
					order.status = "CANCEL";
					pop.ok("取消成功");
				}
			})
		},
	},
	created:function(){
		this.$on("flush",function(){
			this.page = 1;
		})
	}, 
	watch: {
    	filteredSize: function() {
    		this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
    	}
    }
}
</script>