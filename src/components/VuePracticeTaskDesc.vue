<template>
	<!--简介-->
	<div class="introduce" v-show="isActive">	
			<p class="p-1">{{title}}</p>
			<dl>
				<dt>课程介绍</dt>
				<dd v-html="content">
				</dd>
			</dl>
			
			<dl>
				<dt>实验列表</dt>
				<dd>
					<p v-for="item in items">{{item.name}}</p>
				</dd>
			</dl>
	</div>
</template>
<script>
export default {
	components: {
	},
	props:{
		title:{
			type:String,
			required:false
		},
		content:{
			type:String,
			required:false
		},
		isActive:{
			type:Boolean,
			required:true
		},
		items:{
			type:Array,
			required:false
		}
	},
	data:function(){
		return{
		}
	}
}
</script>