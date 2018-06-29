import Vue from "vue";
import VueRouter from "vue-router";
import "babel-polyfill";
import Main from "./layouts/Main.vue";
import auth from "./ssoAuth";
import router from "./router/main";
import pop from "./utils/pop";
// import layer from 'vue-layer'  //ie10和edge上有兼容性问题，remove未定义
import env from "./config/env";
// import '../static/layui/layui.all.js'
import "./utils/vueFilters";
import { setTimeout } from "timers";
import layuiRender from "./utils/layuiRender";

layui.config({
  dir: "/static/layui/"
});
//加了loading  会在一整个页面起了一层标签，loading期间禁止了用户一切操作
Vue.prototype.$loading = {
  show: function() {
    if (sessionStorage.getItem("form_submiting")) return false;
    sessionStorage.setItem("form_submiting", "true");
    var index = layui.layer.load(2, { time: 5000 });
    sessionStorage.setItem("zhushu_main_loading", index);
    return true;
  },
  hide: function() {
    sessionStorage.setItem("form_submiting", "");
    layui.layer.close(sessionStorage.zhushu_main_loading);
  }
};
// Vue.prototype.$wait = {
// 	flag: false,
// 	on: function () {
// 		if (this.flag === true){
// 			return
// 		}
// 		this.flag = true;
// 		setTimeout(() => {
// 			this.flag = false;
// 		}, 3000);
// 	},
// 	off: function () {
// 		this.flag = false;
// 	}
// }

Vue.config.$productionTip = false;

Vue.prototype.$pop = pop;
// Vue.prototype.$layer = layer(Vue);
Vue.prototype.$serverError = function(msg) {
  console.log("---- error message:  " + msg);
  pop.error("服务器繁忙，请稍候再试");
};
Vue.prototype.$fixUrl = apiUrl => {
  let prefix = env.gwApiPrefix;
  if (apiUrl.indexOf("?") <= 0) {
    return prefix + apiUrl + "?ticket=" + localStorage.ticket;
  } else {
    return prefix + apiUrl + "&ticket=" + localStorage.ticket;
  }
};
Vue.prototype.httpProtocol = "http";
Vue.use(VueRouter);
// 共享配置给desktop.html
localStorage.gwApiPrefix = env.gwApiPrefix;
localStorage.sftpPathPrefix = env.sftpPathPrefix;

const app = new Vue({
  el: "app",
  data: {
    currentRoute: window.location.pathname
  },
  router: router,
  render: h => h(Main),
  beforeCreate: function() {
    //ticket保存
    var ticket = this.$route.query.ticket;
    if (ticket) {
      auth.checkTicket(ticket);
    }
  }
});
router.afterEach((to, from) => {
  app.currentRoute = to.path;
  if (to.name) {
    window.document.title = to.name;
  }
});

Vue.prototype.$dialog = function(component, showNow = true) {
  var comp = Vue.extend(component);
  var instance = new comp();
  var mount = instance.$mount();
  var dialog = document.getElementById("vueDialog");
  dialog.innerHTML = "";
  dialog.appendChild(mount.$el);
  if (instance.show && showNow) instance.show();
  return instance;
};

Vue.prototype.$layuiRender = layuiRender;

Vue.prototype.$apiAction = res => {
  if (res.data.code == 0) {
    return true;
  } else {
    layui.layer.msg(res.data.message);
    return false;
  }
};
