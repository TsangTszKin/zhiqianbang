<template>
  <ol>
                <li class="li-1">校内荣誉
                    <span @click="addOneFillEdit()">
                        <i class="iconfont icon-xinzeng"></i>新增荣誉</span></li>
                <li>
                    <span class="default-content" v-show="data.resumeEduExperienceList.length == 0">
                        <i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！</span>
                    <div class="exist-content" v-show="data.resumeEduExperienceList.length > 0">
                        <div class="user-project">
                            <ul class="item-list" v-for="(item, index) in data.resumeEduExperienceList">
                                <li class="bolds">
                                    <span class="s-1">{{item.awardTime}}</span>
                                    <span class="s-2">{{item.intramuralHonor}}</span>
                                    <span class="s-3"></span>
                                    <span class="s-4"></span>
                                    <p class="handle-btn fr">
                                        <i class="iconfont icon-bianji" title="编辑" @click="editOne(index)"></i>
                                        <i class="iconfont icon-shanchu" title="删除" @click="deleteOne(item.id)"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compile-content" v-show="showEdit">
                        <div class="zsFrom my-resume-form ">
                            <div class="layui-form fillSchool clearfix" action="">
                                <div class="fillSchool_delete">
                                    <a href="#" title="删除校内荣誉">
                                        <i class="iconfont icon-quxiao"></i>
                                    </a>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>荣誉</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block">
                                        <input type="text" name="intramuralHonor" lay-verify="required|intramuralHonor" v-model="fill.intramuralHonor" placeholder="请填写所获荣誉" autocomplete="off" class="layui-input "></div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>时间</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block layuiDate">
                                        <input type="text" readonly lay-verify="required" class="layui-input" id="awardTime_xiaoneirongyu" placeholder="请选择时间">
                                        <i class="iconfont icon-paibanbiao"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="layui-form clearfix">
                                <div class="buttons clearfix fl">
                                    <button class="grayBtn-o" @click="hideEdit()">取消</button>
                                    <button class="blueBtn" style="float:right" lay-submit lay-filter="submitxiaoneirongyu">保存</button></div>
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
        resumeEduExperienceList: [
          // {
          //   awardTime: "2018-04",
          //   intramuralHonor: "蓝桥杯一等奖",
          //   resumeId: "string"
          // }
        ]
      },
      fill: {
        awardTime: "",
        intramuralHonor: "",
        resumeId: ""
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
        awardTime: "",
        intramuralHonor: "",
        resumeId: ""
      };
      window.document.getElementById("awardTime_xiaoneirongyu").value = "";
      this.editOrAdd = 2;
    },
    layuiListener() {
      let self = this;
      layui.form.on("submit(submitxiaoneirongyu)", function() {
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
        awardTime: "",
        intramuralHonor: "",
        resumeId: ""
      };
      window.document.getElementById("awardTime_xiaoneirongyu").value = "";

      this.showEdit = false;
    },
    pushOne() {
      if (this.editOrAdd == 2) {
        this.fill.resumeId = this.resumeId;
        this.data.resumeEduExperienceList.push(this.fill);
        this.addOneData();
      } else if (this.editOrAdd == 1) {
        this.data.resumeEduExperienceList[this.editIndex] = this.fill;
        this.editListData();
      }
      this.hideEdit();
    },
    deleteOne(id) {
      resumeService.deleteResumeEduExperience(this.resumeId, id).then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.getResume();
      });
    },
    editOne(index) {
      this.editIndex = index;
      this.fill = this.data.resumeEduExperienceList[index];
      window.document.getElementById(
        "awardTime_xiaoneirongyu"
      ).value = this.fill.awardTime;
      this.showEdit = true;
      this.editOrAdd = 1;
    },
    getResume() {
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
        this.data.resumeEduExperienceList =
          res.data.object.resumeEduExperienceList;
        this.data.resumeEduExperienceList.forEach(element => {
          element.awardTime = common.formatTime("yyyy-MM", element.awardTime);
        });
      });
    },
    updateResume() {
      this.data.resumeEduExperienceList.forEach(element => {
        element.awardTime = $.trim(element.awardTime) + "-01";
      });
      resumeService.updateResume(this.resumeId, this.data).then(res => {
        this.data.resumeEduExperienceList =
          res.data.object.resumeEduExperienceList;
        this.data.resumeEduExperienceList.forEach(element => {
          element.awardTime = common.formatTime("yyyy-MM", element.awardTime);
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
        elem: "#awardTime_xiaoneirongyu",
        type: "month",
        done: function(value) {
          self.fill.awardTime = value;
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
