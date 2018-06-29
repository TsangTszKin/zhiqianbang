<template>
	<div>
		<div class="content-list" >
			<template v-if="filteredValues.length>0">
				<template v-for="item in filteredValues">
					<dl>
						<dt><sftp-img :src="item.practicePlan.imgUrl" alt="" /><span>
								<template v-if="item.status=='LEARNING'">进行中</template>
								<template v-else="item.status=='LEARNED'">已完成</template>
							</span></dt>
						<dd class="d-1">
							<h3 @click="planDetail(item.practicePlan.id)">{{item.practicePlan.name}}</h3>
							
							<div class="clearfix">
								<p class="fl"><span v-bind:style="{width:item.progess+'%'}"></span></p><b class="fl"><template v-if="item.status=='LEARNING'">正在学习...</template></b>
							</div>
							<!-- <p class="p-1">您已超<i>83</i>%小伙伴</p>
							<p class="p-2"><i>1</i>篇实验报告</p> -->
						</dd>
						<dd class="d-2">
							<button class="blueBtn" @click="progress(item.planId)">查看进度</button>
							<!-- <button class="blueBtn-o">查看报告</button>
							<button class="grayBtn-o">退出任务</button> -->
						</dd>
					</dl>
				</template>
			
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
		
	</div>
</template>
<script>
import VueListBase from './VueListBase.vue'
import SftpImg from './SftpImg';
import pagination from './Pagination'
export default{
	mixins:[VueListBase],
	components:{
		VueListBase,
		SftpImg,
		pagination
	},
	data:function(){
		return{
		}
	},
	methods:{
		//查看进度
		progress:function(planId){
			this.$router.push({path:"/center/person/practice/progress/"+planId})
		},
		//实训计划详情
		planDetail:function(planId){
			this.$router.push({path:"/practice/"+planId})
		}
	},
	watch: {
    	filteredSize: function() {
    		this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
    	}
    },
}


</script>