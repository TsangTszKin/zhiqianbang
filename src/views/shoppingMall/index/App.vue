<template>
    <div class="container">
        <div class="header">
            <div class="main clearfix">
                <div class="logo fl">
                    <img src="/static/img/logo.png" />
                </div>
                    
                <div class="header_person fr" v-if="isLoggedIn()">
                    <div class="header_personName" :title="userInfo().displayName" style="max-width: 170px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                        <img :src="userInfo().avatar" :title="userInfo().displayName" />
                        <span>{{userInfo().displayName}}</span></div>
                    <ul class="header_personList">
                        <li>
                            <a @click="goPage('/center/home')" href="javascript:void(0);">
                                <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>用户中心</a>
                        </li>
                        <li>
                            <a @click="goPage('/center/person/setting')" href="javascript:void(0);">
                                <i class="fa fa-cog fa-lg" aria-hidden="true"></i>个人设置</a>
                        </li>
                        <li class="header_personExit">
                            <a @click="goPage('/logout')" href="javascript:void(0);">
                                <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>退出</a>
                        </li>
                    </ul>
                </div>
                <div class="header_login fr" v-else>
                    <a href="javascript:void()" @click="goLogin()">登录</a>
                    <a href="javascript:void()" @click="goReg()">注册</a>
                </div>

                <div class="header_tips fr">
						<a href="javascript:void(0);" title="职前帮首页" @click="goPage('/')">职前帮首页</a>
						<TopMessage></TopMessage>
				</div>

            </div>
        </div>
        <!-- end of header -->
        
                <template>
                <router-view></router-view>
                </template>
           

         <div class="footer">
				广东轩辕网络科技股份有限公司©版权所有2017
            </div><!-- end of footer -->

            <Message></Message>
    </div>
</template>

<script>
import auth from "@/ssoAuth";
import http from "@/config/http";
import Message from "@/pages/Message";
import TopMessage from "@/components/TopMessage";
export default {
  components: {
    Message,TopMessage
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
    goPage(path) {
      if (path === "/logout") {
         auth.logout();
         window.location.href = "http://" + window.location.host + "/#/";
      } else {
        window.location.href = "http://" + window.location.host + "/#" + path;
      }
    }
  },
  mounted() {
    
  }
};
</script>
