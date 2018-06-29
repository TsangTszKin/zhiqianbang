<template>
<div>
    <div class="fillTop clearfix">
        <div class="fillTop_title fl">
            <i class="pupilIcons iconsEducate">
            </i>
            <span>
                教育经历
            </span>
            <sub>
                （完善校内荣誉、校内活动，让HR更了解你的能力）
            </sub>
        </div>
    </div>
    <!-- end of fillTop -->
    <div class="layui-form" action="" style="padding-top: 0;">
        <div class="fillPart2" style="border-top: none;">
            <div class="fillTop_sub clearfix">
                <h1>
                    校内荣誉
                </h1>
                <a href="javascript:void(0);" @click="addOneRongyu()" class="fillTop_subLink">
                    <i class="iconfont icon-xinzeng">
                    </i>
                    新增荣誉
                </a>
            </div>
            <!-- 凡是添加的都是有默认一个，不能删 !!!!!! -->
            <!-- 删除hover 效果 是 fillSchool_hover -->
            <div class="fillSchool clearfix" :class="{'fillSchool_hover':data.resumeEduExperienceList.length>1}" v-for="(item, index) in data.resumeEduExperienceList">
                <div class="fillSchool_delete">
                    <a href="javascript:void(0)" @click="delOneRongyu(index)" title="删除校内荣誉" v-if="data.resumeEduExperienceList.length>1">
                        <i class="iconfont icon-quxiao">
                        </i>
                    </a>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">
                        <span>
                            荣誉
                        </span>
                        <i>
                            *
                        </i>
                    </label>
                    <div class="layui-input-block">
                        <input type="text" name="intramuralHonor" lay-verify="required|intramuralHonor" placeholder="请填写所获荣誉"
                        autocomplete="off" class="layui-input" v-model="item.intramuralHonor">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">
                        <span>
                            时间
                        </span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block layuiDate">
                        <input type="text" readonly="readonly" lay-verify="required" class="layui-input layuiDate" :id="item.dateId" :dataIndex="index" placeholder="请选择时间">
                        <i class="iconfont icon-paibanbiao">
                        </i>
                    </div>
                </div>
            </div>
            <!-- end of fillSchool -->
            
        </div>
        <!-- end of fillPart2 -->
        <div class="fillPart2">
            <div class="fillTop_sub">
                <h1>
                    校内职务
                </h1>
                <a href="javascript:void(0);" @click="addOneZhiwu()" class="fillTop_subLink">
                    <i class="iconfont icon-xinzeng">
                    </i>
                    新增职务
                </a>
            </div>
            <div class="fillSchool clearfix" :class="{'fillSchool_hover':data.resumeSchoolDutyList.length>1}" v-for="(item, index) in data.resumeSchoolDutyList">
                  <div class="fillSchool_delete">
                    <a href="javascript:void(0)" @click="delOneZhiwu(index)" title="删除校职务" v-if="data.resumeSchoolDutyList.length>1">
                        <i class="iconfont icon-quxiao">
                        </i>
                    </a>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">
                        <span>
                            职务
                        </span>
                        <i>
                            *
                        </i>
                    </label>
                    <div class="layui-input-block">
                        <input type="text" name="duty" lay-verify="required|duty" placeholder="请填写在校担任职务"
                        autocomplete="off" class="layui-input " v-model="item.duty">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>
                            时间
                        </span>
                        <i>
                            *
                        </i>
                    </label>
                    <div class="layui-input-block layuiDate">
                        <input type="text" class="layui-input" readonly="readonly" :id="item.dateId" placeholder="请选择开始时间和截至时间" :dataIndex="index">
                        <i class="iconfont icon-paibanbiao">
                        </i>
                    </div>
                </div>
                <div class="layui-form-item layui-form-text">
                    <label class="layui-form-label essential">
                        <span>
                            职责描述
                        </span>
                        <i>
                            *
                        </i>
                    </label>
                    <div class="layui-input-block">
                        <textarea name="dutyDesc" placeholder="请描述你在校期间所担任职位的主要工作内容及职责等" lay-verify="required|dutyDesc" class="layui-textarea"
                        style="height:190px;" v-model="item.dutyDesc">
                        </textarea>
                        <p class="font-qty">
                            <i class="em">
                                0
                            </i>
                            /
                            <i>
                                200
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            <!-- end of -->
        </div>
        <!-- end of fillPart2 -->
        <div class="fillPart3">
            <button class="blueBtn" lay-submit lay-filter="submit" style="opacity: .5; cursor: no-drop;">
                保存并下一步
            </button>
        </div>
        <!-- end of fillPart3 -->
    </div>
    <!-- end of layui-form -->
</div>
</template>

<script>
import bus from "@/utils/bus";
import resumeService from "@/api/resumeService";
export default {
  data() {
    return {
      data: {
        resumeEduExperienceList: [
          {
            awardTime: "",
            intramuralHonor: "",
            resumeId: "",
            dateId: ""
          }
        ],
        resumeSchoolDutyList: [
          {
            duty: "",
            dutyDesc: "",
            endTime: "",
            resumeId: "",
            startTime: "",
            dateId: ""
          }
        ]
      },
      resumeId: "8080808062b41ff00162d8492a100004",
      dateId: [],
      rongyuDate: 1,
      zhiwuDate: 1
    };
  },
  methods: {
    ronghuDateRender(id) {
      let self = this;
      setTimeout(() => {
        layui.laydate.render({
          elem: id,
          type: "month",
          done: function(value) {
            var index = Number(this.elem[0].getAttribute("dataindex"));
            self.data.resumeEduExperienceList[index].awardTime = value;
          }
        });
      }, 200);
    },
    zhiwuDateRender(id) {
      let self = this;
      setTimeout(() => {
        layui.laydate.render({
          elem: id,
          type: "month",
          range: "~",
          format: "yyyy-MM",
          done: function(value) {
            var index = Number(this.elem[0].getAttribute("dataindex"));
            self.data.resumeSchoolDutyList[index].startTime = value.split(
              "~"
            )[0];
            self.data.resumeSchoolDutyList[index].endTime = value.split("~")[1];
            // console.log(value.split("~")[0] + "   " + value.split("~")[1]);
          }
        });
      }, 200);
    },
    addOneRongyu() {
      let tempObj = {
        awardTime: "",
        intramuralHonor: "",
        resumeId: this.resumeId,
        dateId: ""
      };
      this.data.resumeEduExperienceList.push(tempObj);
      this.updateRongyuData();
    },
    addOneZhiwu() {
      let tempObj = {
        duty: "",
        dutyDesc: "",
        endTime: "",
        resumeId: this.resumeId,
        startTime: "",
        dateId: ""
      };
      this.data.resumeSchoolDutyList.push(tempObj);
      this.updateZhiwuData();
    },
    delOneRongyu(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.resumeEduExperienceList.length; i++) {
        const element = this.data.resumeEduExperienceList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          awardTime: element.awardTime,
          intramuralHonor: element.intramuralHonor,
          resumeId: element.resumeId,
          dateId: element.dateId
        };
        tempArrary.push(tempObj);
      }
      this.data.resumeEduExperienceList = tempArrary;
      this.updateRongyuData();
    },
    delOneZhiwu(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.resumeSchoolDutyList.length; i++) {
        const element = this.data.resumeSchoolDutyList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          duty: element.duty,
          dutyDesc: element.dutyDesc,
          endTime: element.endTime,
          resumeId: element.resumeId,
          startTime: element.startTime,
          dateId: element.dateId
        };
        tempArrary.push(tempObj);
      }
      this.data.resumeSchoolDutyList = tempArrary;
      this.updateZhiwuData();
    },
    updateRongyuData() {
      this.data.resumeEduExperienceList.forEach(element => {
        element.dateId = "rongyuDate" + this.rongyuDate++;
        element.resumeId = this.resumeId;
        this.ronghuDateRender("#" + element.dateId);
      });
    },
    updateZhiwuData() {
      this.data.resumeSchoolDutyList.forEach(element => {
        element.dateId = "zhiwuDate" + this.rongyuDate++;
        element.resumeId = this.resumeId;
        this.zhiwuDateRender("#" + element.dateId);
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        intramuralHonor: function(value) {
          if (value.length > 20) {
            return "荣誉名字不得多于20个字符啊";
          }
        },
        duty: function(value) {
          if (value.length > 20) {
            return "职务名字不得多于20个字符啊";
          }
        },
        dutyDesc: function(value) {
          if (value.length > 200) {
            return "职务描述不得多于200个字符啊";
          }
        }
      });
    },
    layuiListener() {
      let self = this;
      layui.form.on("submit(submit)", function() {
        self.submitData();
        return false;
      });
    },
    submitData() {
      this.data.resumeEduExperienceList.forEach(element => {
        delete element.dateId;
        element.awardTime = $.trim(element.awardTime) + "-01";
      });
      this.data.resumeSchoolDutyList.forEach(element => {
        delete element.dateId;
        element.endTime = $.trim(element.endTime) + "-01";
        element.startTime = $.trim(element.startTime) + "-01";
      });

      console.log(this.data);

      this.$loading.show();
      resumeService
        .save2step(this.resumeId, this.data)
        .then(res => {
          this.$loading.hide();
          if (res.data.code != 0) {
            layui.layer.msg(res.data.message);
            return;
          }
          bus.$emit("resume.resumeId", this.resumeId);
          bus.$emit("resume.step", 3);
        })
        .catch(res => {
          this.$loading.hide();
        });
    }
  },
  mounted() {
    this.updateRongyuData();
    this.updateZhiwuData();
    this.verify();
    this.layuiListener();

    bus.$on("resume.resumeId", data => {
      this.resumeId = data;
    });
  }
};
</script>
<style scoped
.layui-form-label {
  width: 180px !important;
}
</style>

