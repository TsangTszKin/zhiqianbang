<template>
    <div class="navbread">
        	<router-link style="height: 38px !important;"  to="/" class="fa fa-chevron-right">首页</router-link>
          <a style="height: 38px !important;"  class="fa fa-chevron-right" v-for="(nav,index) in navList" href="javascript:void(0)" @click="goPath(nav.path)" :class="{persent:index==navList.length-1}"> {{nav.name}}</a>
    </div>
</template>

<script>
export default {
  methods: {
    goPath: function(path) {
      this.$router.push(path);
    }
  },
  mounted: function() {
    this.navList = this.$route.meta.nav;
  },
  data: function() {
    return {
      navList: []
    };
  }
};
</script>
<style scoped>
</style>
