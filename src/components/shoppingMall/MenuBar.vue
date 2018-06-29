<template>
<div class="menus">
					<ul class="menusList">
						<li v-for="item in menu">
							<div class="menus_main menus_bold">
								<i :class="item.class"></i>
								{{item.name}}
							</div>
							<div class="menus_sub">
								<router-link v-for="(child , index) in item.children" :to="child.path" :key="index" :class="{'menus_subOn': isActive(child.path)}">{{child.name}}</router-link>
							</div>
						</li>
					</ul>
				</div><!-- end of menus -->
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "交易管理",
          class: "iconfont icon-jiaoyiguanli",
          children: [
            {
              name: "订单管理",
              path: "/center/trade/order"
            }
          ]
        },
        {
          name: "课程管理",
          class: "iconfont icon-kechengguanli",
          children: [
            {
              name: "课程计划",
              path: "/center/lesson/plan"
            },
            {
              name: "课程发布",
              path: "/center/lesson/publish"
            },
            {
              name: "视频管理",
              path: "/center/lesson/video"
            }
          ]
        },
        {
          name: "促销管理",
          class: "iconfont icon-kechengguanli",
          children: [
            {
              name: "促销列表",
              path: "/center/sale/list"
            }
          ]
        }
      ]
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path.indexOf(path) >= 0;
    }
  }
};
</script>


