<template>
<!-- 弹框 -->
  <div class="pops" :style="{display: popShell?'block':'none'}" style="z-index: 99999999;">
	  <!-- 1， 投简历 -->
    <div class="popsBuild" style="overflow:hidden;width:600px;height:450px;position:absolute;top:0;right:0;left:0;bottom:0;margin:auto">
      <div class="popsToper">
        <i class="fa fa-file-text fa-lg" aria-hidden="true"></i>职位推荐</div>
      <div class="popsClose" @click="popShell = false">
        <button title="关闭" @click="popShell = false"></button>
      </div>
      <div class="apply-model layui-form" style="padding-top: 0px;">
        <dl class="position-check">
          <select  lay-verify="required" name="job" lay-filter="job">
            <option v-for="(item, index) in jobList" :value="index">{{item.name}}</option>
          </select>
        </dl>
        <div class="buts" style="padding-left: 0px;text-align: center;position: absolute;bottom: 100px;width: 100%;right: 0px;">
          <button class="blueBtn" @click="selectedOneJob()">确定</button>
          <button class="blueBtn-o" @click="popShell = false">返回</button></div>
      </div>
    </div>

    <!-- end of popSucceed --></div>
</template>

<script>
import wsBus from "@/utils/wsBus";
import env from "@/config/env.js";
import ssoAuth from "@/ssoAuth";
import jobService from "@/api/jobService";
import messageService from "@/api/messageService";

export default {
  data() {
    return {
      userInfoData: JSON.parse(localStorage.userInfo),
      layim: null,
      msgCount: {},
      tool: [],
      popShell: false,
      jobList: [],
      selectedJob: {},
      insert: null,
      msgbox: 0
    };
  },
  methods: {
    //基础配置
    config() {
      this.layim.config({
        init: {
          mine: {
            username: this.userInfoData.displayName,
            id: this.userInfoData.id,
            status: "online",
            sign: "",
            avatar: this.userInfoData.avatar
          }
        },

        isAudio: false, //开启聊天工具栏音频
        isVideo: false, //开启聊天工具栏视频
        uploadImage: false,
        uploadFile: true,
        uploadFile: {
          url: env.gwApiPrefix + "/api/scapi/zhisuUploadFile?uploadType=doc", //（返回的数据格式见下文）
          type: "post" //默认post
        },
        //扩展工具栏
        tool: this.tool,
        title: this.userInfoData.displayName, //自定义主面板最小化时的标题
        initSkin: "2.jpg", //1-5 设置初始背景
        isfriend: false, //是否开启好友
        isgroup: false, //是否开启群组
        notice: false, //是否开启桌面消息提醒，默认false
        msgbox: layui.cache.dir + "css/modules/layim/html/msgbox.html", //消息盒子页面地址，若不开启，剔除该项即可
        chatLog: layui.cache.dir + "css/modules/layim/html/chatlog.html" //聊天记录页面地址，若不开启，剔除该项即可
      });
    },
    getCurrentChatMan() {
      var id = $(".layim-chat-box .layui-show #current-chat-man").attr(
        "data-id"
      )
        ? $(".layim-chat-box .layui-show #current-chat-man").attr("data-id")
        : null;
      var name = $(".layim-chat-box .layui-show #current-chat-man").attr(
        "data-name"
      )
        ? $(".layim-chat-box .layui-show #current-chat-man").attr("data-name")
        : null;
      return { id: id, name: name };
    },
    getMessage(msg) {
      console.log(msg);
      this.layim.getMessage(msg);

      //以下拿到当前聊天窗口的联系人Id
      var id = this.getCurrentChatMan().id;
      if (id && msg.id == id) {
        // alert(msg.username + ":全部消息已读");
        $("ul.layim-chat-list li.layim-friend" + msg.id + " span.friend-count")
          .hide()
          .text(0);
        $(
          "ul.layim-list-history li.layim-friend" +
            msg.id +
            " span.friend-count"
        )
          .hide()
          .text(0);
        this.messageRead(id);
      } else {
        wsBus.$emit("message.amount.+", { data: 1 });
        if (this.msgCount[msg.id]) {
          this.msgCount[msg.id] = this.msgCount[msg.id] + 1;
        } else {
          this.msgCount[msg.id] = 1;
        }
        // alert(msg.username + ":一条消息未读");
        $(
          "ul.layim-chat-list li.layim-chatlist-MESSAGEINFO" +
            msg.id +
            " span.friend-count"
        )
          .show()
          .text(this.msgCount[msg.id]);
        $(
          "ul.layim-list-history li.layim-MESSAGEINFO" +
            msg.id +
            " span.friend-count"
        )
          .show()
          .text(this.msgCount[msg.id]);
      }
    },
    getUnreadMessage() {
      messageService.getUnreadMessage().then(res => {
        console.log(res.data);

        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          if (element.sendId == 0) {
            sessionStorage.msgbox_no_unRead_list = '0';
            this.msgbox++;
            wsBus.$emit("message.amount.+", { data: 1 });
            if (this.msgCount.sys) {
              this.msgCount.sys++;
            } else {
              this.msgCount.sys = 1;
            }
            continue;
          }
          var msg = {
            type: "MESSAGEINFO",
            username: "",
            avatar: "",
            id: "",
            content: element.content,
            sign: ""
          };
          if (!element.user.avatar) {
            element.user.avatar = "/static/img/timg.jpg";
          } else {
            element.user.avatar =
              env.sftpPathPrefix + "/" + element.user.avatar;
          }
          msg.username = element.user.name;
          msg.avatar = element.user.avatar;
          msg.id = element.user.id;

          this.getMessage(msg);
        }
      });
    },
    sendMessageListener() {
      this.layim.on("sendMessage", function(data) {
        data.to.type = "MESSAGEINFO";
        console.log(data);
        data.to.content = data.mine.content;
        wsBus.send(JSON.stringify(data.to));
      });
    },
    messageCountDisListener() {
      let self = this;
      //关闭左边联系人事件
      $("body").on(
        "click",
        "ul.layim-chat-list li i.layui-icon",
        function() {}
      );
      //点击左边联系人的事件
      $("body").on("click", ".layim-chat-list li", function(e) {
        setTimeout(() => {
          var id = self.getCurrentChatMan().id;
          var thisId = $(this).attr("data-id");
          var thhisUsername = $(this)
            .find("span")
            .text();
          if (id && thisId === id && self.msgCount[id] > 0) {
            wsBus.$emit("message.amount.-", { data: self.msgCount[id] });
            self.messageRead(id);
            // alert(
            //   thhisUsername + ":全部消息已读,刚读了" + self.msgCount[id] + "条"
            // );
            self.msgCount[id] = 0;

            $(
              "ul.layim-chat-list li.layim-chatlist-MESSAGEINFO" +
                id +
                " span.friend-count"
            )
              .hide()
              .text(0);
            $(
              "ul.layim-list-history li.layim-MESSAGEINFO" +
                id +
                " span.friend-count"
            )
              .hide()
              .text(0);
          }
        }, 100);
      });
      //点击底部消息盒子的事件
      $("body").on("click", ".span-showChat", function() {
        setTimeout(() => {
          var id = self.getCurrentChatMan().id;
          var thhisUsername = self.getCurrentChatMan().name;
          wsBus.$emit("message.amount.-", { data: self.msgCount[id] });
          self.messageRead(id);
          //   alert(
          //     thhisUsername + ":全部消息已读,刚读了" + self.msgCount[id] + "条"
          //   );
          self.msgCount[id] = 0;
          $(
            "ul.layim-chat-list li.layim-chatlist-MESSAGEINFO" +
              id +
              " span.friend-count"
          )
            .hide()
            .text(0);
          $(
            "ul.layim-list-history li.layim-MESSAGEINFO" +
              id +
              " span.friend-count"
          )
            .hide()
            .text(0);
        }, 100);
      });
      //点击主面板的联系人的事件
      $("body").on("click", "ul.layim-list-history li", function(e) {
        setTimeout(() => {
          var id = self.getCurrentChatMan().id;
          var thisId = $(this).attr("data-id");
          var thhisUsername = $(this)
            .find("span")
            .text();
          if (id && thisId === id && self.msgCount[id] > 0) {
            wsBus.$emit("message.amount.-", { data: self.msgCount[id] });
            self.messageRead(id);
            // alert(
            //   thhisUsername + ":全部消息已读,刚读了" + self.msgCount[id] + "条"
            // );
            self.msgCount[id] = 0;
            $(
              "ul.layim-chat-list li.layim-chatlist-MESSAGEINFO" +
                id +
                " span.friend-count"
            )
              .hide()
              .text(0);
            $(
              "ul.layim-list-history li.layim-MESSAGEINFO" +
                id +
                " span.friend-count"
            )
              .hide()
              .text(0);
          }
        }, 100);
      });
      //点击推荐简历，跳转职位详情
      $("body").on(
        "click",
        "div.layim-chat-main ul li .layim-chat-text pre.layui-code",
        function() {
          window.open(
            "http://localhost:8080/#/jobDetail/" + $(this).attr("data")
          );
        }
      );
      //点击消息盒子的方法监听点击消息盒子的方法监听
      $("body").on("click", "ul li.layim-tool-msgbox", function() {
        sessionStorage.setItem("msgbox_unRead", "1");
        self.msgbox = 0;
        wsBus.$emit("message.amount.-", { data: self.msgCount.sys });
        self.msgCount.sys = 0;
      });
    },
    getMyJobList() {
      jobService.getMyCompanyJobList(1, 100, "open", {}).then(res => {
        if (res.data.code !== 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.jobList = res.data.object.data.resultList;
        this.selectedJob = this.jobList[0];
        this.$layuiRender.form();
      });
    },
    updateDataListener: function() {
      let self = this;
      layui.form.on("select", function(data) {
        self.selectedJob = self.jobList[data.value];
      });
    },
    selectedOneJob() {
      console.log(this.selectedJob);
      let content =
        "推荐职位[pre class=layui-code data=" +
        this.selectedJob.id +
        " style=cursor:pointer;]" +
        this.selectedJob.name +
        "&nbsp;&nbsp;" +
        this.selectedJob.salaryRangeLabel +
        "&nbsp;&nbsp;" +
        this.selectedJob.company.name +
        "&nbsp;&nbsp;" +
        this.selectedJob.city +
        "[/pre]";
      this.insert(content);
      this.popShell = false;
    },
    messageRead(userId) {
      var obj = {
        sendId: userId,
        type: "MESSAGEREAD"
      };
      wsBus.send(JSON.stringify(obj));
    }
  },
  mounted() {
    //判断是否已经登录，没登录的话不往下初始化layim组件
    if (!ssoAuth.httpLoggedIn()) {
      return;
    }

    setTimeout(() => {
      this.layim = layui.layim;
      if (this.userInfoData.type === "PERSON") {
        this.tool = [];
      } else {
        this.tool = [
          {
            alias: "job",
            title: "选择职位",
            icon: "&#xe63c;"
          }
        ];
      }

      this.config();

      //监听自定义工具栏点击，以发送简历为例
      var self = this;
      this.layim.on("tool(job)", function(insert) {
        self.getMyJobList();
        self.updateDataListener();
        self.popShell = true;
        // insert("发送简历回调"); //将内容插入到编辑器
        self.insert = insert;
      });

      //监听发送消息
      this.sendMessageListener();

      //监听接受消息
      wsBus.$on("MESSAGEINFO", data => {
        console.log(data);
        if (data.id == 0) {
          sessionStorage.msgbox_no_unRead_list = "0";
          this.msgbox++;
          wsBus.$emit("message.amount.+", { data: 1 });
          if (this.msgCount[sys]) {
            this.msgCount.sys++;
          } else {
            this.msgCount.sys = 1;
          }
          return;
        }
        if (
          !data.avatar ||
          data.avatar === "null" ||
          data.avatar.indexOf("null") != -1
        ) {
          data.avatar = "/static/img/timg.jpg";
        }
        data.sign = "";

        this.getMessage(data);
      });

      //已看消息的监听操作
      this.messageCountDisListener();

      this.getUnreadMessage();

      //以下两段代码为模拟收到两个消息
      //  this.getMessage({
      //     username: "adederd",
      //     avatar:
      //       "http://qzapp.qlogo.cn/qzapp/100280987/56ADC83E78CEC046F8DF2C5D0DD63CDE/100",
      //     id: 888,
      //     sign: "职前帮",
      //     type: "MESSAGEINFO",
      //     content: "临时：" + new Date().getTime()
      //   });
    }, 1000);
  },
  watch: {
    msgbox: function(newVal, oldVal) {
      // console.log(oldVal);
      // console.log(newVal);
      if (newVal != 0) this.layim.msgbox(newVal);
    }
  }
};
</script>
<style scoped>

</style>
