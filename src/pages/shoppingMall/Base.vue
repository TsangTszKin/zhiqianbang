<script>
import bus from "@/utils/bus";
export default {
  mounted() {
    bus.$emit("shoppingMall.nav", this.$route.meta.nav);
  }
};
</script>

