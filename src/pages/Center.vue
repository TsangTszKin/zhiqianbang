<template>
<div id="personCont">
	<div class="main clearfix">
    <NavBread></NavBread>
		<div class="menus">
			<div class="menusPerson" style="cursor: pointer;" @click="brief">
				<div class="menusPerson_img"><img :src="userInfo().avatar" /></div>
				<h1 style="max-width: 170px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" :title="userInfo().displayName"><a href="javascript:void(0)" style="color: #3399ff;">{{userInfo().displayName}}</a></h1>
			</div>
			<ul class="menusList">
				<template v-for="(item, key) in getItems">
					<vue-menu :item="item" :itemKey="key"></vue-menu>
				</template>
			</ul>
		</div><!-- end of menus -->
    <div style="width: 1000px;float: right;background: #fff;" id="center-panel">
			<router-view></router-view>
    </div>
	</div>
</div><!-- end of main -->
</template>
<script>
import auth from "../ssoAuth";
import { person, company } from "../config/menu.js";
import VueMenu from "../components/VueMenu.vue";
import NavBread from '@/components/NavBread'
import bus from '@/utils/bus';
export default {
  components: {
    VueMenu,
    NavBread
  },
  destroyed () {
    bus.$emit("footerType", 1);
  },
  beforeCreate () {
    bus.$emit("footerType", 2);
  },
  mounted: function() {
    this.fixNav();
    this.fixMenu();
		// 获取窗口高度
		let winHeight = null;
		if (window.innerHeight) winHeight = window.innerHeight;
		else if (document.body && document.body.clientHeight)
			winHeight = document.body.clientHeight;
		// window.document.getElementById("personCont").style.minHeight = winHeight;
		$("#personCont").css("min-height", winHeight - 60);
    $("#center-panel").css("min-height", winHeight - 60);
  },
  computed: {
    getItems: function() {
      if ("COMPANY" === auth.userInfo().type) {
        return company;
      } else {
        return person;
      }
    }
  },
  methods: {
    pushNav: function(path, label) {
      this.navList = [];
      this.navList.push({ path: path, name: label });
    },
    pushSubNav: function(path, label) {
      this.navList[1] = { path: path, name: label };
    },
    fixNav: function(nav) {
      var base = this;
      setTimeout(function() {
        var menu = $(".menus_mainOn");
        var submenu = $(".menus_subOn");
        if (menu.size() > 0) {
          base.pushNav(menu.attr("path"), menu.attr("name"));
        }
        if (submenu.size() > 0) {
          base.pushSubNav(submenu.attr("path"), submenu.attr("name"));
        }
        if (nav) {
          base.navList = base.navList.concat(nav);
        }
      }, 10);
    },
    fixMenu: function() {
      var base = this;
      setInterval(function() {
        var path = base.$route.path;
        //if(!path.startsWith(base.crrentPath)){
        if (path != base.crrentPath) {
          var menu = $(".menus_mainOn");
          var submenu = $(".menus_subOn");
          if (
            !path.startsWith(menu.attr("path")) ||
            !path.startsWith(submenu.attr("path"))
          ) {
            //$("a[path='"+path+"']").trigger("click");
            var find = false;
            $(".menus_main").each(function() {
              var crrentMenu = $(this);
              if (path.startsWith(crrentMenu.attr("path"))) {
                $(".menusList li a.menus_main").removeClass("menus_mainOn");
                $(".menus_sub").slideUp();
                crrentMenu.addClass("menus_mainOn");
                find = true;
                return;
              }
            });
            if (!find) {
              $(".menusList li a.menus_main").removeClass("menus_mainOn");
              $(".menus_sub").slideUp();
            }
            /*var crrentMenu = $("a[path='"+path+"']");
		  			if(crrentMenu.size()>0){
			  			$(".menusList li a.menus_main").removeClass("menus_mainOn");
		      			$(".menus_sub").slideUp();
			  			crrentMenu.addClass("menus_mainOn");
		  			}*/
          }
          var nav = base.$route.meta.nav;
          base.fixNav(nav);
          base.crrentPath = path;
        }
      }, 600);
    },
    brief: function() {
      if (this.userInfo().type == "COMPANY") {
        this.$router.push("/center/company/brief");
      } else {
        this.$router.push({ path: "/center/person/userInfo" });
      }
    },
    userInfo: function() {
      return auth.userInfo();
    }
  },
  data: function() {
    return {
      navList: [],
      crrentPath: null
    };
  }
};
</script>