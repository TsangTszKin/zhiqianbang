<template>
  <div class="contant main clearfix">

      <NavBar></NavBar>
      <MenuBar></MenuBar>
      <router-view></router-view>

  </div>
</template>
<script>
import NavBar from "@/components/shoppingMall/NavBar";
import MenuBar from "@/components/shoppingMall/MenuBar";
import bus from "@/utils/bus";
export default {
  components: {
    NavBar,
    MenuBar
  },
  mounted() {},
};
</script>

