
import Vue from 'vue'
import App from './App'
import router from '@/router/shoppingMall'
import auth from "@/ssoAuth";
import wsBus from "@/utils/wsBus";
import layuiRender from "@/utils/layuiRender";
import '@/utils/vueFilters'

Vue.prototype.$layuiRender = layuiRender;
Vue.prototype.$httpProtocol = 'http';
//登录拦截
router.beforeEach((to, from, next) => {
  var ticket = to.query.ticket;
  if (ticket) {
    auth.checkTicket(ticket);
  }
  if (to.meta.requiresAuth && !auth.httpLoggedIn()) {
    auth.goLogin();
  } else {
    //要求登录的，判断角色权限
    if (to.meta.requiresAuth && to.meta.role) {
      var userInfo = auth.userInfo();
      //alert(to.path+to.meta.role+userInfo.type);
      if (
        to.meta.role.indexOf("PERSON") >= 0 &&
        (userInfo.type == "STUDENT" || userInfo.type == "PERSON")
      ) {
        next();
      } else if (
        to.meta.role.indexOf("COMPANY") >= 0 &&
        userInfo.type == "COMPANY"
      ) {
        next();
      } else {
        //去用户中心第一个菜单
        if (userInfo.type == "STUDENT" || userInfo.type == "PERSON") {
          // next({
          //   path: "/center/person/project"
          // });
          window.location.href = "http://"+ window.location.host + '/#/center/person/project';
        } else if (userInfo.type == "COMPANY") {
          // next({
          //   path: "/center/company/home"
          // });
          window.location.href = "http://"+ window.location.host + '/#/center/company/home';
        }
      }
    } else {
      next();
    }

    // check websocket connection
    setTimeout(function() {
      wsBus.init(ticket);
    }, 200);
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

