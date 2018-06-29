<template>
  <div class="navbread">
					<a href="javascript:void(0)" class="fa fa-chevron-right">您在这里：企业 </a>
					<a href="javascript:void(0)" class="fa fa-chevron-right">友商平台</a>
					<a href="javascript:void(0)" class="fa fa-chevron-right">{{nav.module}}</a>
					<router-link :to="item.path" class="fa fa-chevron-right" :class="{'persent': index === nav.itemList.length -1}" v-for="(item, index) in nav.itemList" :key="index">{{item.name}}</router-link>
				</div>
</template>
<script>
import bus from "@/utils/bus";
export default {
	data () {
		return {
			nav: {}
		}
	},
	beforeCreate () {
		bus.$on("shoppingMall.nav", data=>{
			this.nav = data;
		});
	}
};
</script>

