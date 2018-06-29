/*
 * @Author: Tsang 
 * @Date: 2018-04-28 11:42:47 
 * @Last Modified by: Tsang
 * @Last Modified time: 2018-04-28 13:33:20
 * 说明： accept="image/*"在Chrome和Safari等Webkit浏览器下却出现了响应滞慢的问题，可能要等 6~10s ，IE和Firefox中使用 accept=”image/*” 属性则没有发现响应延迟的问题
    解决办法是：
    accept=”image/*” 属性的问题，删掉它或者将 * 通配符修改为指定的MIME类型，就可以解决Webkit浏览器下的对话框显示滞慢的问题
 */
<template>
  <input type="file" :accept="getMIME()" @change="fileUpload" />
</template>
<script>
import fileUploadService from "@/api/fileUploadService";
export default {
  props: ["accept"],
  data() {
    return {
      MIME: ""
    };
  },
  methods: {
    getMIME() {
      switch (this.accept) {
        case "pic":
          this.MIME = "image/jpg, image/png, image/jpeg, image/gif, image/svg";
          break;
        case "doc":
          this.MIME =
            "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document";
          break;
        case "ppt":
          this.MIME =
            "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation";
          break;
        case "xls":
          this.MIME =
            "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
          break;
        case "txt":
          this.MIME = "text/plain";
          break;
        case "pdf":
          this.MIME = "application/pdf";
          break;
        case "html":
          this.MIME = "text/html";
          break;
        case "mp3":
          this.MIME = "audio/mpeg";
          break;
        case "mp4":
          this.MIME = "audio/mp4, video/mp4";
          break;
        default:
          break;
      }
      return this.MIME;
    },
    fileUpload(e) {
      let loadingIndex = layui.layer.load(2);
      //   this.resumeBaseInfo.personalImage = e.target.files[0].name;
      fileUploadService
        .fileUpload(e, this.accept)
        .then(res => {
          // console.log(res.data);
          if (res.data.code != 0) {
            layui.layer.msg(res.data.message);
            return;
          }
          this.$emit("getFileUploadpath", res.data.object);
          layui.layer.close(loadingIndex);
        })
        .catch(res => {
          layui.layer.close(loadingIndex);
        });
    }
  }
};
</script>
<style scoped>
input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
