<template>
	<a @click="loginAuth" id="TopMessage" href="javascript:void(0);" :title="'您共有' + amount + '个消息'">
		
		<i class="iconfont icon-xiaoxitongzhi"></i>
    <b v-show="amount !== 0">{{amount}}</b>
		<!-- <span>消息</span> -->
	</a>
</template>
<script>
import wsBus from "../utils/wsBus";
import service from "../api/tradeService";
import ssoAuth from "@/ssoAuth";
export default {
  data: function() {
    return {
      amount: 0
    };
  },
  created: function() {
    var self = this;
    // service.getMyShopsInCart().then(res => {
    // 	self.amount = res.data.object.count;
    // })
    self.amount = 0;
  },
  methods: {
    loginAuth() {
      if (!ssoAuth.httpLoggedIn()) {
        ssoAuth.goLogin();
      }
    }
  },
  mounted: function() {
    wsBus.$on("message.amount.+", data => {
      this.amount = this.amount + data.data;
    });
    wsBus.$on("message.amount.-", data => {
      if (this.amount > 0 && this.amount - data.data >= 0) {
        this.amount = this.amount - data.data;
      } else {
        this.amount = 0;
      }
    });
    wsBus.$on("message.amount.set", data => {
      this.amount = data.data;
    });
  }
};
</script>