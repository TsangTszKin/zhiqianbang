<template>
  <ol>
                <li class="li-1">培训经历
                    <span class="active" @click="addOneFillEdit()">
                        <i class="iconfont icon-xinzeng"></i>新增经历</span></li>
                <li>
                    <span class="default-content" v-show="data.resumeTrainingExperienceList.length == 0">
                        <i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！</span>
                    <div class="exist-content" v-show="data.resumeTrainingExperienceList.length > 0">
                        <div class="user-project">
                            <ul class="item-list" v-for="(item, index) in data.resumeTrainingExperienceList">
                                <li class="bolds">
                                    <span class="s-1">{{item.startTime}}-{{item.endTime}}</span>
                                    <span class="s-2">{{item.courseName}}</span>
                                    <span class="s-3"></span>
                                    <span class="s-4">{{item.orgName}}</span>
                                    <p class="handle-btn fr">
                                        <i class="iconfont icon-bianji" title="编辑" @click="editOne(index)"></i>
                                        <i class="iconfont icon-shanchu" title="删除" @click="deleteOne(item.id)"></i>
                                    </p>
                                </li>
                                <li>
                                    <span>职务描述：</span>
                                    <ol>
                                        <li><pre v-html="item.courseDetail"></pre></li></ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compile-content "  v-show="showEdit">
                        <div class="zsFrom my-resume-form ">
                            <div class="layui-form clearfix" action="">
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>时间</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block layuiDate">
                                        <input readonly type="text" class="layui-input" lay-verify="required" id="startEnd_peixun" placeholder="请选择开始时间和截止时间" >
                                        <i class="iconfont icon-paibanbiao"></i>
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>课程</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <input type="text" name="courseName" lay-verify="required|courseName" v-model="fill.courseName" placeholder="请输入课程名称" autocomplete="off" class="layui-input "></div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>机构</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <input type="text" name="orgName" lay-verify="required|orgName" placeholder="请输入培训机构名称" autocomplete="off" class="layui-input " v-model="fill.orgName"></div>
                                </div>
                                <div class="layui-form-item layui-form-text">
                                    <label class="layui-form-label">
                                        <span>培训描述</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <textarea name="courseDetail" lay-verify="required|courseDetail" v-model="fill.courseDetail" placeholder="请描述培训课程内容和培训心得" class="layui-textarea" style="height:190px;"></textarea>
                                        <p class="font-qty">
                                            <i>0</i>/
                                            <i>200</i>
                                        </p>
                                    </div>
                                </div>
                                <div class="buttons clearfix fl">
                                    <button class="grayBtn-o" @click="hideEdit()">取消</button>
                                    <button class="blueBtn" style="float:right" lay-submit lay-filter="submitpeixun">保存</button></div>
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
        resumeTrainingExperienceList: [
          // {
          //   courseDetail:
          //     "大学会计的主要课程有：基础会计、会计电算化、财务管理学原理、微观经济学、宏观经济学、产业经济学、会计学基础",
          //   courseName: "会计资格培训",
          //   createTime: "2018-04-12T10:20:59.676Z",
          //   endTime: "2018-04",
          //   id: "string",
          //   orgName: "会计培训机构",
          //   resumeId: "string",
          //   startTime: "2018-04"
          // }
        ]
      },
      fill: {
        courseDetail: "",
        courseName: "",
        endTime: "2018-04",
        orgName: "",
        resumeId: "",
        startTime: "2018-04"
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
        courseDetail: "",
        courseName: "",
        endTime: "2018-04",
        orgName: "",
        resumeId: "",
        startTime: "2018-04"
      };
      window.document.getElementById("startEnd_peixun").value = "";
      this.editOrAdd = 2;
    },
    layuiListener() {
      let self = this;
      layui.form.on("submit(submitpeixun)", function() {
        console.log(self.fill);
        self.pushOne();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        courseName: function(value) {
          if (value.length > 20) {
            return "课程名称不得多于20个字符啊";
          }
        },
        orgName: function(value) {
          if (value.length > 20) {
            return "机构名称不得多于20个字符啊";
          }
        },
        courseDetail: function(value) {
          if (value.length > 200) {
            return "培训描述不得多于200个字符啊";
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
        courseDetail: "",
        courseName: "",
        endTime: "2018-04",
        orgName: "",
        resumeId: "",
        startTime: "2018-04"
      };
      window.document.getElementById("startEnd_peixun").value = "";

      this.showEdit = false;
    },
    pushOne() {
      if (this.editOrAdd == 2) {
        this.fill.resumeId = this.resumeId;
        this.data.resumeTrainingExperienceList.push(this.fill);
        this.addOneData();
      } else if (this.editOrAdd == 1) {
        this.data.resumeTrainingExperienceList[this.editIndex] = this.fill;
        this.editListData();
      }
      this.hideEdit();
    },
    deleteOne(id) {
      resumeService.deleteResumeTrainingExperience(this.resumeId, id).then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.getResume();
      });
    },
    editOne(index) {
      this.editIndex = index;
      this.fill = this.data.resumeTrainingExperienceList[index];
      window.document.getElementById("startEnd_peixun").value =
        this.fill.startTime + "~" + this.fill.endTime;
      this.showEdit = true;
      this.editOrAdd = 1;
    },
    getResume() {
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
        this.data.resumeTrainingExperienceList =
          res.data.object.resumeTrainingExperienceList;
        this.data.resumeTrainingExperienceList.forEach(element => {
          element.startTime = common.formatTime("yyyy-MM", element.startTime);
          element.endTime = common.formatTime("yyyy-MM", element.endTime);
        });
      });
    },
    updateResume() {
      this.data.resumeTrainingExperienceList.forEach(element => {
        element.startTime = $.trim(element.startTime) + "-01";
        element.endTime = $.trim(element.endTime) + "-01";
      });
      resumeService.updateResume(this.resumeId, this.data).then(res => {
        this.data.resumeTrainingExperienceList =
          res.data.object.resumeTrainingExperienceList;
        this.data.resumeTrainingExperienceList.forEach(element => {
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
        elem: "#startEnd_peixun",
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