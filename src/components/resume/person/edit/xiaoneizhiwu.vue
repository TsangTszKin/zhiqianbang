<template>
  <ol>
                <li class="li-1">校内职务
                    <span class="active" @click="addOneFillEdit()">
                        <i class="iconfont icon-xinzeng"></i>新增职务</span>
                </li>
                <li>
                    <span class="default-content" v-show="data.resumeSchoolDutyList.length == 0">
                        <i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！</span>
                    <div class="exist-content" v-show="data.resumeSchoolDutyList.length > 0">
                        <div class="user-project">
                            <ul class="item-list" v-for="(item, index) in data.resumeSchoolDutyList">
                                <li class="bolds">
                                    <span class="s-1">{{item.startTime}}-{{item.endTime}}</span>
                                    <span class="s-2">{{item.duty}}</span>
                                    <span class="s-3"></span>
                                    <span class="s-4"></span>
                                    <p class="handle-btn fr">
                                        <i class="iconfont icon-bianji" title="编辑" @click="editOne(index)"></i>
                                        <i class="iconfont icon-shanchu" title="删除"  @click="deleteOne(item.id)"></i>
                                    </p>
                                </li>
                                <li>
                                    <span>职务描述：</span>
                                    <ol>
                                        <li>
                                            <pre v-html="item.dutyDesc"></pre>    
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compile-content " v-show="showEdit">
                        <div class="zsFrom my-resume-form">
                            <div class="layui-form clearfix" action="">
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>职务</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <input type="text" name="duty" v-model="fill.duty" lay-verify="required|duty" placeholder="请填写所担任职务" autocomplete="off" class="layui-input "></div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label ">
                                        <span>时间</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block layuiDate">
                                        <input type="text" class="layui-input" readonly lay-verify="required" id="startEnd_xiaoneizhiwu" placeholder="请选择开始时间和截止时间" >
                                        <i class="iconfont icon-paibanbiao"></i>
                                    </div>
                                </div>
                                <div class="layui-form-item layui-form-text">
                                    <label class="layui-form-label ">
                                        <span>职责描述</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <textarea name="dutyDesc" lay-verify="required|dutyDesc" v-model="fill.dutyDesc" placeholder="请描述你在校期间所担任职位的主要工作内容及职责等" class="layui-textarea" style="height:190px;"></textarea>
                                        <p class="font-qty">
                                            <i>0</i>/
                                            <i>200</i>
                                        </p>
                                    </div>
                                </div>
                                <div class="buttons clearfix fl">
                                    <button class="grayBtn-o"  @click="hideEdit()">取消</button>
                                    <button class="blueBtn" style="float:right" lay-submit lay-filter="submitxiaoneizhiwu">保存</button></div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
</template>

<script>
import resumeService from "@/api/resumeService";
import * as common from "@/utils/common";
export default {
  data() {
    return {
      data: {
        resumeSchoolDutyList: [
          // {
          //   duty: "学习委员",
          //   dutyDesc: "协助老师工作，帮助同学提升学习成绩。",
          //   endTime: "2018-04",
          //   id: "",
          //   resumeId: "string",
          //   startTime: "2018-04"
          // }
        ]
      },
      fill: {
        duty: "",
        dutyDesc: "",
        endTime: "",
        resumeId: "",
        startTime: ""
      },
      showEdit: false,
      resumeId: "",
      editOrAdd: 2, //1编辑2新增
      editIndex: ""
    };
  },
  methods: {
    addOneFillEdit() {
      this.showEdit = true;
      this.fill = {
        duty: "",
        dutyDesc: "",
        endTime: "",
        resumeId: "",
        startTime: ""
      };
      window.document.getElementById("startEnd_xiaoneizhiwu").value = "";
      this.editOrAdd = 2;
    },
    layuiListener() {
      let self = this;
      layui.form.on("submit(submitxiaoneizhiwu)", function() {
        console.log(self.fill);
        self.pushOne();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        intramuralHonor: function(value) {
          if (value.length > 20) {
            return "荣誉名称不得多于20个字符啊";
          }
        }
      });
    },
    editListData() {
      console.log(this.data);
      this.updateResume();
    },
    addOneData() {
      //后台返回id，补充本地最新的数据
      console.log(this.fill);
      this.updateResume();
    },
    hideEdit() {
      this.fill = {
        duty: "",
        dutyDesc: "",
        endTime: "",
        resumeId: "",
        startTime: ""
      };
      window.document.getElementById("startEnd_xiaoneizhiwu").value = "";

      this.showEdit = false;
    },
    pushOne() {
      if (this.editOrAdd == 2) {
        this.data.resumeSchoolDutyList.push(this.fill);
        this.addOneData();
      } else if (this.editOrAdd == 1) {
        this.data.resumeSchoolDutyList[this.editIndex] = this.fill;
        this.editListData();
      }
      this.hideEdit();
    },
    deleteOne(id) {
      resumeService.deleteResumeSchoolDuty(this.resumeId, id).then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.getResume();
      });
    },
    editOne(index) {
      this.editIndex = index;
      this.fill = this.data.resumeSchoolDutyList[index];
      window.document.getElementById("startEnd_xiaoneizhiwu").value =
        this.fill.startTime + "~" + this.fill.endTime;
      this.showEdit = true;
      this.editOrAdd = 1;
    },
    getResume() {
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
        this.data.resumeSchoolDutyList = res.data.object.resumeSchoolDutyList;
        this.data.resumeSchoolDutyList.forEach(element => {
          element.startTime = common.formatTime("yyyy-MM", element.startTime);
          element.endTime = common.formatTime("yyyy-MM", element.endTime);
        });
      });
    },
    updateResume() {
      this.data.resumeSchoolDutyList.forEach(element => {
        element.startTime = $.trim(element.startTime) + "-01";
        element.endTime = $.trim(element.endTime) + "-01";
      });
      resumeService.updateResume(this.resumeId, this.data).then(res => {
        this.data.resumeSchoolDutyList = res.data.object.resumeSchoolDutyList;
        this.data.resumeSchoolDutyList.forEach(element => {
          element.startTime = common.formatTime("yyyy-MM", element.startTime);
          element.endTime = common.formatTime("yyyy-MM", element.endTime);
        });
      });
    }
  },
  mounted() {
    this.getResume();
    setTimeout(() => {
      let self = this;

      this.$layuiRender.form();

      layui.laydate.render({
        elem: "#startEnd_xiaoneizhiwu",
        type: "month",
        range: "~",
        done: function(value) {
          self.fill.startTime = value.split("~")[0];
          self.fill.endTime = value.split("~")[1];
        }
      });
    }, 200);

    this.layuiListener();
    this.verify();
  }
};
</script>
<style scoped>
@import url("/static/css/pupil/fillResume.css");
@import url("/static/css/formCommon.css");
@import url("/static/css/portal/success.css");
@import url("/static/css/pupil/resume-2.1.css");
</style>

