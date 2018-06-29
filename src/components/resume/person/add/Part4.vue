<template>
<div>
<div class="fillTop clearfix">
    <div class="fillTop_title fl">
        <i class="pupilIcons iconsSkill"></i>
        <span>技能培训</span>
        <sub>（根据你已填写的简历，我们为你推荐了以下信息）</sub></div>
</div>
<!-- end of fillTop -->
<div class="layui-form" action="" style="padding-top: 0;">
    <div class="fillPart2" style="border-top: none;">
        <div class="fillTop_sub clearfix">
            <h1>擅长技能</h1>
            <a href="javascript:void(0)" class="fillTop_subLink" @click="addOneJineng()">
                <i class="iconfont icon-xinzeng"></i>新增技能</a>
        </div>
        <!-- 凡是添加的都是有默认一个，不能删 !!!!!! -->
        <!-- 删除hover 效果 是 fillSchool_hover -->
        <div class="fillSchool clearfix" :class="{'fillSchool_hover': data.resumeHandleSkillList.length > 1}" v-for="(item, index) in data.resumeHandleSkillList">
            <div class="fillSchool_delete">
                <a href="javascript:void(0)" title="删除技能" @click="delOneJineng(index)">
                    <i class="iconfont icon-quxiao"></i>
                </a>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>办公技能</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <select name="skillName" lay-filter="skillName" v-model="item.skillName">
                        <option value="0">word</option>
                        <option value="1">execl</option></select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>掌握程度</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <div class="xy-radio">
                        <input type="radio" name="sikllLevel" value="一般" v-model="item.sikllLevel" title="一般">
                        <input type="radio" name="sikllLevel" value="良好" v-model="item.sikllLevel" title="良好">
                        <input type="radio" name="sikllLevel" value="熟悉" v-model="item.sikllLevel" title="熟悉">
                        <input type="radio" name="sikllLevel" value="精通" v-model="item.sikllLevel" title="精通">
                    </div>
                </div>
            </div>
        </div>
        <!-- end of fillSchool -->
        
        <!-- end of fillSchool -->
    </div>
    <!-- end of fillPart2 -->
    <div class="fillPart2">
        <div class="fillTop_sub">
            <h1>擅长语言</h1>
            <a href="javascript:void(0)" class="fillTop_subLink" @click="addOneYuyan()">
                <i class="iconfont icon-xinzeng"></i>新增语言</a>
        </div>
        <div class="fillSchool clearfix" :class="{'fillSchool_hover': data.resumeHandleSkillList2.length > 1}" v-for="(item, index) in data.resumeHandleSkillList2">
             <div class="fillSchool_delete">
                <a href="javascript:void(0)" title="删除语言" @click="delOneYuyan(index)">
                    <i class="iconfont icon-quxiao"></i>
                </a>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>语言技能</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <select name="skillName" lay-filter="skillName" v-model="item.skillName">
                        <option value="0">粤语</option>
                        <option value="1">国语</option>
                        <option value="2">英语</option></select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>掌握程度</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <div class="xy-radio">
                        <input type="radio" name="sikllLevel2" v-model="item.sikllLevel" value="一般" title="一般">
                        <input type="radio" name="sikllLevel2" v-model="item.sikllLevel" value="良好" title="良好">
                        <input type="radio" name="sikllLevel2" v-model="item.sikllLevel" value="熟悉" title="熟悉">
                        <input type="radio" name="sikllLevel2" v-model="item.sikllLevel" value="精通" title="精通"></div>
                </div>
            </div>
        </div>
        <!-- end of fillSchool --></div>
    <!-- end of fillPart2 -->
    <div class="fillPart2">
        <div class="fillTop_sub">
            <h1>获取证书</h1>
            <a href="javascript:void(0)" class="fillTop_subLink" @click="addOneZhengshu()">
                <i class="iconfont icon-xinzeng"></i>新增证书</a>
        </div>
        <div class="fillSchool clearfix fillSchool_hover" v-for="(item, index) in data.skillsCertificateList">
             <div class="fillSchool_delete">
                <a href="javascript:void(0)" title="删除证书" @click="delOneZhengshu(index)">
                    <i class="iconfont icon-quxiao"></i>
                </a>
            </div>
            <div class="layui-form-item clearfix">
                <label class="layui-form-label">
                    <span>证书名称</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block layuiChoose clearfix">
                    <input type="text" name="title" lay-verify="required|title" v-model="item.title" placeholder="请选择证书" autocomplete="off" class="layui-input">
                    <i class="iconfont icon-dianjixuanze"></i>
                </div>
                <div class="bookUpload clearfix">
                    <span class="book" id="upload">上传证书</span>
                    <span class="tips">（只支持JPG、png、gif、pdf文件）</span></div>
                <div class="bookImg clearfix">
                    <div class="bookImg_cont">
                        <img src="/static/img/onlinejob3.jpg" /></div>
                    <a href="javascript:void(0)">删除</a></div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">
                    <span>时间</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block layuiDate">
                    <input type="text" readonly="readonly" class="layui-input" lay-verify="required" :id="item.dateId" placeholder="请选择时间" :dataIndex="index">
                    <i class="iconfont icon-paibanbiao"></i>
                </div>
            </div>
        </div>
        <!-- end of fillSchool --></div>
    <!-- end of fillPart2 -->
    <div class="fillPart2">
        <div class="fillTop_sub">
            <h1>培训经历
                <span>（选填）</span></h1>
            <a href="javascript:void(0)" class="fillTop_subLink" @click="addOnePeixun()">
                <i class="iconfont icon-xinzeng"></i>新增培训</a>
        </div>
        <div class="fillSchool clearfix fillSchool_hover" v-for="(item, index) in  data.resumeTrainingExperienceList" >
             <div class="fillSchool_delete">
                <a href="javascript:void(0)" title="删除培训" @click="delOnePeixun(index)">
                    <i class="iconfont icon-quxiao"></i>
                </a>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">
                    <span>时间</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block layuiDate">
                    <input type="text"  readonly="readonly"  class="layui-input" name="startTime" lay-verify="required|startTime" :id="item.dateId" :dataIndex="index" placeholder="请选择开始时间和截止时间">
                    <i class="iconfont icon-paibanbiao"></i>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">
                    <span>课程</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <input type="text" name="courseName" lay-verify="required|courseName" v-model="item.courseName" placeholder="请输入课程名称" autocomplete="off" class="layui-input "></div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">
                    <span>机构</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <input type="text" name="orgName" lay-verify="required|orgName" v-model="item.orgName" placeholder="请输入培训机构名称" autocomplete="off" class="layui-input "></div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">
                    <span>培训描述</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <textarea name="courseDetail" lay-verify="required|courseDetail" v-model="item.courseDetail" placeholder="请描述培训课程内容和培训心得" class="layui-textarea" style="height:190px;"></textarea>
                    <p class="font-qty">
                        <i class="em">0</i>/
                        <i>200</i>
                    </p>
                </div>
            </div>
        </div>
        <!-- end of fillSchool --></div>
    <!-- end of fillPart2 -->
    <div class="fillPart3">
        <button class="blueBtn" lay-submit lay-filter="submit">完成</button></div>
    <!-- end of fillPart3 -->
</div>
<!-- end of layui-form -->
</div>
</template>

<script>
import resumeService from "@/api/resumeService";
import bus from "@/utils/bus";
export default {
  data() {
    return {
      data: {
        resumeHandleSkillList: [
          {
            resumeId: "",
            sikllLevel: "一般",
            skillName: "0",
            skillType: "PROFESSIONAL" //技能
          }
        ],
        resumeHandleSkillList2: [
          {
            resumeId: "",
            sikllLevel: "一般",
            skillName: "0",
            skillType: "LANGUAGE" //语言
          }
        ],
        resumeTrainingExperienceList: [
          {
            courseDetail: "",
            courseName: "",
            endTime: "",
            orgName: "",
            resumeId: "",
            startTime: "",
            dateId: ""
          }
        ],
        skillsCertificateList: [
          {
            fileSize: 0,
            fileType: "",
            path: "",
            pdfPath: "",
            sortOrder: 0,
            title: "",
            dateId: "",
            issuingTime: ""
          }
        ]
      },
      peixunDate: 1,
      zhengshuDate: 1,
      resumeId: "8080808062b41ff00162d8492a100004"
    };
  },
  methods: {
    addOneJineng() {
      let tempObj = {
        resumeId: this.resumeId,
        sikllLevel: "一般",
        skillName: "0",
        skillType: "PROFESSIONAL" //技能
      };
      this.data.resumeHandleSkillList.push(tempObj);
      this.$layuiRender.form();
    },
    addOneYuyan() {
      let tempObj = {
        resumeId: this.resumeId,
        sikllLevel: "一般",
        skillName: "0",
        skillType: "LANGUAGE" //语言
      };
      this.data.resumeHandleSkillList2.push(tempObj);
      this.$layuiRender.form();
    },
    addOneZhengshu() {
      let tempObj = {
        fileSize: 0,
        fileType: "",
        path: "",
        pdfPath: "",
        sortOrder: 0,
        title: "",
        dateId: "",
        issuingTime: ""
      };
      this.data.skillsCertificateList.push(tempObj);
      this.updateZhengshuData();
    },
    addOnePeixun() {
      let tempObj = {
        courseDetail: "",
        courseName: "",
        endTime: "",
        orgName: "",
        resumeId: "",
        startTime: "",
        dateId: ""
      };
      this.data.resumeTrainingExperienceList.push(tempObj);
      this.updatePeixunData();
    },
    delOneJineng(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.resumeHandleSkillList.length; i++) {
        const element = this.data.resumeHandleSkillList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          resumeId: element.resumeId,
          sikllLevel: element.sikllLevel,
          skillName: element.skillName,
          skillType: element.skillType
        };
        tempArrary.push(tempObj);
      }
      this.data.resumeHandleSkillList = tempArrary;
    },
    delOneYuyan(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.resumeHandleSkillList2.length; i++) {
        const element = this.data.resumeHandleSkillList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          resumeId: element.resumeId,
          sikllLevel: element.sikllLevel,
          skillName: element.skillName,
          skillType: element.skillType
        };
        tempArrary.push(tempObj);
      }
      this.data.resumeHandleSkillList2 = tempArrary;
    },
    delOneZhengshu(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.skillsCertificateList.length; i++) {
        const element = this.data.skillsCertificateList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          fileSize: element.fileSize,
          fileSize: element.fileSize,
          path: element.path,
          pdfPath: element.pdfPath,
          sortOrder: element.sortOrder,
          title: element.title,
          dateId: element.dateId,
          issuingTime: element.issuingTime
        };
        tempArrary.push(tempObj);
      }
      this.data.skillsCertificateList = tempArrary;
      this.updateZhengshuData();
    },
    delOnePeixun(index) {
      let tempArrary = [];
      for (let i = 0; i < this.data.resumeTrainingExperienceList.length; i++) {
        const element = this.data.resumeTrainingExperienceList[i];
        if (i == index) {
          continue;
        }
        let tempObj = {
          courseDetail: element.courseDetail,
          courseName: element.courseName,
          endTime: element.endTime,
          orgName: element.orgName,
          resumeId: element.resumeId,
          startTime: element.startTime,
          dateId: element.dateId
        };
        tempArrary.push(tempObj);
      }
      this.data.resumeTrainingExperienceList = tempArrary;
      this.updatePeixunData();
    },
    zhengshuDateRender(id) {
      let self = this;
      setTimeout(() => {
        layui.laydate.render({
          elem: id,
          type: "month",
          done: function(value) {
            var index = Number(this.elem[0].getAttribute("dataIndex"));
            // self.data.skillsCertificateList[index].awardTime = value;
          }
        });
      }, 200);
    },
    peixunDateRender(id) {
      let self = this;
      setTimeout(() => {
        layui.laydate.render({
          elem: id,
          type: "month",
          range: "~",
          format: "yyyy-MM",
          done: function(value) {
            var index = Number(this.elem[0].getAttribute("dataIndex"));
            self.data.resumeTrainingExperienceList[
              index
            ].startTime = value.split("~")[0];
            self.data.resumeTrainingExperienceList[index].endTime = value.split(
              "~"
            )[1];
            // console.log(value.split("~")[0] + "   " + value.split("~")[1]);
          }
        });
      }, 200);
    },
    updateZhengshuData() {
      this.data.skillsCertificateList.forEach(element => {
        element.dateId = "zhengshuDate" + this.zhengshuDate++;
        element.resumeId = this.resumeId;
        this.zhengshuDateRender("#" + element.dateId);
      });
    },
    updatePeixunData() {
      this.data.resumeTrainingExperienceList.forEach(element => {
        element.dateId = "peixunDate" + this.peixunDate++;
        element.resumeId = this.resumeId;
        this.peixunDateRender("#" + element.dateId);
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        title: function(value) {
          if (value.length > 20) {
            return "证书名字不得多于20个字符啊";
          }
        },
        courseName: function(value) {
          if (value.length > 20) {
            return "课程名字不得多于20个字符啊";
          }
        },
        orgName: function(value) {
          if (value.length > 20) {
            return "机构名字不得多于20个字符啊";
          }
        },
        courseDetail: function(value) {
          if (value.length > 200) {
            return "培训描述不得多于200个字符啊";
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
      this.data.skillsCertificateList.forEach(element => {
        delete element.dateId;
        element.issuingTime = $.trim(element.issuingTime) + "-01";
      });
      this.data.resumeTrainingExperienceList.forEach(element => {
        delete element.dateId;
        element.startTime = $.trim(element.startTime) + "-01";
        element.endTime = $.trim(element.endTime) + "-01";
      });

      this.data.resumeHandleSkillList2.forEach(element => {
        this.data.resumeHandleSkillList.push(element);
      });
      delete this.data.resumeHandleSkillList2;

      console.log(this.data);

      this.$loading.show();
      resumeService
        .save4step(this.resumeId, this.data)
        .then(res => {
          this.$loading.hide();
          if (res.data.code != 0) {
            layui.layer.msg(res.data.message);
            return;
          }
          this.$router.push({ path: "/center/person/resume" });
        })
        .catch(res => {
          this.$loading.hide();
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$layuiRender.form();
    }, 200);

    //自定义薪资
    $(".tailPay").on("click", function() {
      $(this).html("取消自定义薪资");
      $(".fillPay_num").hide();
      $(".fillPay_self").show();
    });

    //判断年月薪
    var select = $(".fillPay select").val();
    console.log(select);

    this.updateZhengshuData();
    this.updatePeixunData();
    this.verify();
    this.layuiListener();

    bus.$on("resume.resumeId", data => {
      this.resumeId = data;
    });
  }
};
</script>
<style scoped>
.layui-form-label {
  width: 180px !important;
}
</style>

