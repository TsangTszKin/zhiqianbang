<template>
	<router-link to="/trade/cart" :title="'您共有' + amount + '件商品'">
	
		<i class="iconfont icon-gouwuche" aria-hidden="true"></i>
			<b v-show="amount !== 0">{{amount}}</b>
		<!-- <span>购物车</span> -->
	</router-link>
</template>
<script>
import wsBus from "../utils/wsBus";
import service from "../api/tradeService";

export default {
  data: function() {
    return {
      amount: 0
    };
  },
  created: function() {
    var self = this;
    service.getMyShopsInCart().then(res => {
      self.amount = res.data.object.count;
    });
  },
  mounted: function() {
    wsBus.$on("trade.cart.amount", data => {
      this.amount = data.data;
    });
  }
};
</script>