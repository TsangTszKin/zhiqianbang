<template>
<li>
<a href="javascript:;" :path="itemKey" :name="item.label" @click="mianClick($event, itemKey)" :class="{menus_main:true,menus_mainOn:mainOn||isActive(itemKey)}">
	<i :class="item.cssClass" aria-hidden="true"></i>
	{{item.label}}
</a>
<div v-if="item.children" class="menus_sub" :style="getStyle(itemKey)">
	<template v-for="(subItem, subKey) in item.children">
		<a href="javascript:;" :path="subItem.path" :name="subItem.label"  :class="{menus_subOn:isActive(subItem.path)}"  @click="subClick($event,subItem.path)">
			<i class="fa fa-angle-right" aria-hidden="true"></i>
			{{subItem.label}}
		</a>
	</template>
</div>
</li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
    	mainOn: false
    };
  },
  methods: {
    getStyle: function(path) {
      if (this.isActive(path)||this.mainOn){
        return "overflow: hidden; display: block;";
      }
    },
    isActive: function(path,label,type) {
      //var on = this.$root.currentRoute.startsWith(href);
      var on = this.$route.path.startsWith(path);
      this.mainOn = this.mainOn || on;
      if(this.mainOn){
	      $(".menusList li a.menus_main").removeClass("menus_mainOn");
	      $(".menus_sub").slideUp();
      }
      return on;
    },
    expend: function(prefix, suffix) {
      return (prefix + "/" + suffix).replace("/$", "");
    },
    mianClick: function(event, path) {
      if (path != "menuFlag") this.$router.push({ path: path });
      var target = $(event.target);
      $(".menusList li a.menus_main").removeClass("menus_mainOn");
      $(".menus_sub").slideUp();
      target.addClass("menus_mainOn");
      var iclass = target.attr("class");
      if($(".menus_sub").size()==0||$(".menus_sub").is(":hidden")){
      	this.$parent.fixNav();
      }
      if (iclass == "current") {
        target.next().slideUp();
      } else {
        target
          .addClass("current")
          .next()
          .slideDown()
          .parent()
          .siblings()
          .children("a")
          .removeClass("current")
          .next()
          .slideUp();
        return false;
      }
    },
    subClick: function(event,path) {
      $(".menus_sub a").removeClass("menus_subOn");
      $(event.target).addClass("menus_subOn");
      this.$router.push({ path: path });
      this.$parent.fixNav();
    }
  }
};
</script>