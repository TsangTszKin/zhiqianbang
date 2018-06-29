<template>
<img :src="getSrc" :alt="alt"></img>
</template>
<script>
import http from "../config/http";

export default {
  props: ["src", "alt"],
  computed: {
    getSrc: function() {
      if (this.src.indexOf("/static/img/") >= 0) {
        return this.src;
      } else {
        return http.sftpPathPrefix + "/" + this.src;
      }
    }
  }
};
</script>