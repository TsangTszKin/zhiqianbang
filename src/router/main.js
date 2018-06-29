import VueRouter from "vue-router";
import routes from "@/config/routes";
import auth from "@/ssoAuth";
import http from "@/config/http";
import wsBus from "@/utils/wsBus";

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path:
        "/login/" +
        Math.random()
          .toString(36)
          .substring(7),
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
}

function beforeLogin(to, from, next) {
  if (auth.loggedIn()) {
    next({
      path: "/"
    });
  } else {
    next();
  }
}

function pop(rs) {
  var array = [];
  for (var r in rs) {
    var item = rs[r];
    var obj = {
      path: r,
      component: require("@/pages/" + item.templatePath + ".vue")
    };
    if (item.auth) {
      obj.beforeEnter = requireAuth;
    } else if (item.login) {
      obj.beforeEnter = beforeLogin;
    }
    if (item.title) {
      obj.name = item.title;
    }
    if (item.children) {
      obj.children = pop(item.children);
    }
    array.push(obj);
  }
  return array;
}

function getRoutes() {
  var arr = routes;
  //console.log(JSON.stringify(arr));
  arr.push({
    path: "/logout",
    beforeEnter(to, from, next) {
      auth.logout();
      next("/");
    }
  });
  arr.push({
    path: "/center/home",
    beforeEnter(to, from, next) {
      if (
        "STUDENT" === auth.userInfo().type ||
        "PERSON" === auth.userInfo().type
      ) {
        next("/center/person/project");
      } else {
        next("/center/company/home");
      }
    }
  });
  return arr;
}

const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: getRoutes(),
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});

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
      //把需要登录的路由拦截下来
      var userInfo = auth.userInfo();
      //alert(to.path+to.meta.role+userInfo.type);
      if (
        to.meta.role.indexOf("PERSON") >= 0 &&
        (userInfo.type == "STUDENT" || userInfo.type == "PERSON") //个人角色去个人的路由拦截判断
      ) {
        if (to.path === '/center/person/resume') {
          //简历的相关路由及其自路由的模块
          // alert(haveResume());
          if (haveResume()) {
            //有简历
            next();
          } else {
            //无简历
            next({
              path: "/center/person/resume/saveResume"
            });
          }
        } else {
          next();
        }
      } else if (
        to.meta.role.indexOf("COMPANY") >= 0 &&
        userInfo.type == "COMPANY"
      ) {
        //企业角色去企业的路由需要拦截下来判断
        if (to.path === "/shoppingMall/center") {
          //友商平台的跳到友商平台的SPA模块
          window.location.href =
            "http://" + window.location.host + "/views/shoppingMall/index.html#/center/trade/order";
        } else {
          next();
        }
      } else {
        //角色和路由不相符的，去该角色的用户中心第一个菜单
        if (userInfo.type == "STUDENT" || userInfo.type == "PERSON") {
          next({
            path: "/center/person/project"
          });
        } else if (userInfo.type == "COMPANY") {
          next({
            path: "/center/company/home"
          });
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

  //判断当前个人的简历状态
  function haveResume() {
    var rst = false;
    $.ajax({
      url:
        http.gwApiPrefix +
        "/api/resume/person/getPersonalResume?ticket=" +
        localStorage.ticket,
      async: false,
      dataType: "json",
      type: "get",
      success: function(result) {
        console.log(result);
        if (result.code == 0) {
          rst = true;
        }
      }
    });
    return rst;
  }
});

export default router;
