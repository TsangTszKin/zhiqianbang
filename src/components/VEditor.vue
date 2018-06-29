<template>
	<textarea :id="id" :placeholder="placeholder" autofocus rows="1" cols="100" class="layui-textarea">{{modelValue}}</textarea>
</template>
<script>
import http from "../config/http";

export default {
  model: {
    prop: "modelValue"
  },
  props: {
    placeholder: String,
    modelValue: String,
    fullEditor: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "full" //none,simple,full
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      id: Math.random()
        .toString(36)
        .substring(7),
      build: 0
    };
  },
  methods: {
    init: function() {
      if (this.build++ > 1) return;
      var self = this;
      self.editor = $("#" + self.id);
      if (this.fullEditor) {
        self.editor.val(this.modelValue);
        layui.use("layedit", function() {
          var layedit = layui.layedit;
          layedit.set({
            uploadImage: {
              url: http.gwApiPrefix + "/api/scapi/zhisuLayeditUploadFile", //接口url
              type: "post" //默认post
            }
          });
          var options = {};
          if (self.height) {
            options.height = self.height;
          }
          if (self.type == "none") {
            options.tool = null;
          }
          self.index = layedit.build(self.id, options); //建立编辑器
          setInterval(function() {
            self.$emit("input", layedit.getContent(self.index));
          }, 2000);
        });
      } else {
        this.editor.prop("value", this.modelValue);
        this.editor.on("input", (e, src) => {
          self.$emit("input", self.editor.prop("value"));
        });
      }
    }
  },
  mounted: function() {
    this.init();
  },
  watch: {
    modelValue() {
      this.init();
    }
  }
};
</script>

<style scoped>
.layui-layedit-iframe {
  background-color: white !important;
}
iframe {
	background-color: white !important;
}
</style>

