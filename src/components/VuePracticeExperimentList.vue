<template>
	<div>
		<table class="table tableList"><!-- if you want a grid table, please add ClassName "tableGrid" -->
			<thead>
				<tr>
					<td>实验名称</td>
					<td>实验时长</td>
					<td>难度</td>
					<td>状态</td>
					<td>实训报告</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<template v-for="(item,index) in filteredValues">
					<template v-if="item.userExperiment">
					<tr>
						<td>
							<router-link :to="{path:'/center/person/practice/experiment/'+item.id}">{{item.name}}</router-link>
						</td>
						<td>{{item.minutes}}分钟	</td>
						<td>
							<template v-if="item.difficulty == 'SIMPLE'">初级</template>
							<template v-if="item.difficulty == 'MEDIUM'">中级</template>
							<template v-if="item.difficulty == 'ADVANCED'">高级</template>
						</td>
						<td>
							<span class="active">
									<template v-if="item.userExperiment.status == 'LEARNING'">进行中</template>
									<template v-else-if="item.userExperiment.status == 'PENDING_LEARN'">未开始</template>
									<template v-else-if="item.userExperiment.status == 'LEARNED'">已结束</template>
									<template v-else="item.userExperiment.status == 'NEW'">未激活</template>
							</span>
						</td>
						<td>
							<button title="编辑"  @click="editReport(item,index)"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i></button>
						</td>
						<td>
							<template v-if="item.userExperiment.status === 'LEARNING' || item.userExperiment.status === 'PENDING_LEARN'">
								<button title="开始实验" @click="startExperiment(item.userExperiment.id)"><i class="fa fa-desktop fa-lg" aria-hidden="true"></i></button>
							</template>
							<template v-else>--</template>
						</td>
					</tr>
				</template>
				</template>
			</tbody>
		</table>
		
		<!-- 分页 -->
		<div class="pages clearfix">
			<pagination ref="pagination" 
				@current-page="updateCurrentPage" 
			></pagination>
		</div>
		<vue-dialog ref="dialog0" title="实验报告" :width="width">
			<ul class="form">
				<li class="clearfix">
					<textarea id="editor"></textarea>
				</li>
				<li class="clearfix">
					<div class="formIpt fr">
						<button class="blueBtn" @click="submit">提交</button>
						<button class="blueBtn-o" @click="cancel">取消</button>
					</div>
				</li>
			</ul>
		</vue-dialog>
	</div>
	
</template>
<style scoped>
</style>
<script>
import VueListBase from './VueListBase.vue';
import studentPracticeService from '../api/studentPracticeService';
import vmService from '../api/vmService';
import pagination from './Pagination';
import http from '../config/http';
import VueDialog from './VueDialog';
export default {
	mixins: [VueListBase],
	components: {
		pagination,
		VueDialog
	},
	data:function(){
		return{
			index : 0,
			valueIndex:0,
			width:700
		}
	},
	methods:{
		editReport:function(item,index){
			this.$refs.dialog0.show();
			$("#editor").val(item.userExperiment.reportContent)
			this.valueIndex = index;

			layui.use('layedit', function(){
			  var layedit = layui.layedit;
			  layedit.set({
                  uploadImage: {
                       url: `${http.gwApiPrefix}/api/scapi/zhisuLayeditUploadFile` //接口url
                      ,type: 'post' //默认post
                  },
                
              });
			  var index = layedit.build('editor'); //建立编辑器
			  this.index = index;
			});
		},
		cancel:function(){
			this.$refs.dialog0.close();
		},
		submit:function(){
			var content = '';
			layui.use('layedit', function(){
				var layedit = layui.layedit;
				content = layui.layedit.getContent(this.index);
			});
			const item = this.filteredValues[this.valueIndex];
			item.userExperiment.reportContent = content;
			this.filteredValues[this.valueIndex] = item;
			const data = {
				userExperimentId : item.userExperiment.id,
				reportContent : content
			}
			studentPracticeService.addExperimentReport(data).then(response =>{
				this.$refs.dialog0.close();
			});
		},
		startExperiment: function(userExperimentId) {
			var self = this;
			vmService.startExperiment(userExperimentId).then(res => {
				if(res.data.code != "0") {
					self.$pop.error(res.data.message);
					return;
				};
				var tokens = res.data.object.split(',');
				var url = "/views/desktop/tunnel.html?id=" + userExperimentId;
				for(var i in tokens) {
					if(tokens[i]) {
						url += '&token=' + tokens[i];
					}
				}
				window.open(url, 'myExperiment' + userExperimentId);
			})
		}
	}, 
	watch: {
    	filteredSize: function() {
    		this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
    	}
    }
}
</script>