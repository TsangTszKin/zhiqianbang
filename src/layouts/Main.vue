<template>
  <div class="container">
    <div class="header">
				<div class="main clearfix">
					<div class="logo fl">
						<img src="/static/img/logo.png" />
					</div>
					
					<top-nav></top-nav>
					<div class="header_person fr" v-if="isLoggedIn()">
						<div class="header_personName" :title="userInfo().displayName" style="max-width: 170px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
							<img :src="userInfo().avatar" :title="userInfo().displayName" />
							<!-- <span>{{userInfo().displayName}}</span> -->
						</div>
						<ul class="header_personList">
							<li>
								<router-link to="/center/home"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>用户中心</router-link>
							</li>
							<li>
								<router-link to="/center/person/setting"><i class="fa fa-cog fa-lg" aria-hidden="true"></i>个人设置</router-link>
							</li>
							<!--<li>
								<router-link to="/center/table"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Table Demo</router-link>
							</li>
							<li>
								<router-link to="/center/pop"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Pop Demo</router-link>
							</li>

							<li>
								<router-link to="/center/table2"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Table Demo2</router-link>
							</li>

							<li>
								<router-link to="/center/layer"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Layer Demo</router-link>
							</li>-->
							<li class="header_personExit">
								<router-link to="/logout"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>退出</router-link>
							</li>	
							<!--<li>
								<router-link to="/trade/cart"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>我的购物车</router-link>
							</li>-->
						</ul>
					</div>
					<div class="header_tips fr" v-else>
						<a href="javascript:void()" @click="goLogin()">登录</a>
						<a href="javascript:void()" @click="goReg()">注册</a>
					</div>
					<div class="header_tips fr">
						<TopShoppingCart v-if="showShoppingCart()"></TopShoppingCart>
						<TopMessage v-if="showMessage"></TopMessage>
					</div>
				</div>
			</div><!-- end of header -->
			
		<div class="contant">
			<div id="indexPanel">
				<router-view></router-view>
			</div>
    	<footerL v-show="showFooterType == 1"></footerL>
			<footerS v-show="showFooterType == 2"></footerS>
    </div>

		<Message></Message>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import VLink from "../components/VLink.vue";
import auth from "../ssoAuth";
import TopShoppingCart from "../components/TopShoppingCart.vue";
import TopMessage from "@/components/TopMessage";
import Message from "@/pages/Message";
import footerL from "@/components/footerL";
import footerS from "@/components/footerS";
import bus from "@/utils/bus";
export default {
  data() {
    return {
      showFooterType: 1
    };
  },
  // mixins: [Message],
  components: {
    TopNav,
    VLink,
    TopShoppingCart,
    TopMessage,
    Message,
    footerL,
    footerS
  },
  methods: {
    isLoggedIn: function() {
      return auth.loggedIn();
    },
    userInfo: function() {
      auth.checkTicket(auth.getTicket());
      return auth.userInfo();
    },
    goLogin: function() {
      return auth.goLogin();
    },
    goReg: function() {
      return auth.goReg();
    },
    showShoppingCart: function() {
      var userInfo = this.userInfo();
      return (
        this.isLoggedIn() &&
        userInfo &&
        (userInfo.type == "STUDENT" || userInfo.type == "PERSON")
      );
    },
    showMessage: function() {
      var userInfo = this.userInfo();
      return this.isLoggedIn() && userInfo;
    }
  },
  mounted() {
    let winHeight = null;
    if (window.innerHeight) winHeight = window.innerHeight;
    else if (document.body && document.body.clientHeight)
      winHeight = document.body.clientHeight;
    // window.document.getElementById("personCont").style.minHeight = winHeight;
    $("#indexPanel").css("min-height", winHeight - 60);
  },
  beforeCreate() {
    bus.$on("footerType", data => {
      this.showFooterType = data;
    });
  }
};
</script>
