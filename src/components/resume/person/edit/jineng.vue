<template>
              <ol>
                <li class="li-1">擅长技能
                    <span  @click="addOneFillEdit()">
                        <i class="iconfont icon-xinzeng"></i>新增技能</span></li>
                <li>
                    <span class="default-content" v-show="data.resumeHandleSkillList.length == 0">
                        <i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！</span>
                    <div class="exist-content" v-show="data.resumeHandleSkillList.length > 0">
                        <ul class="line-look">
                            <li v-for="(item, index) in data.resumeHandleSkillList">
                                <b>{{item.skillName}}</b>
                                <div>
                                    <i style="width:30%"></i>
                                </div>
                                <span>{{item.sikllLevel}}</span>
                                <p class="handle-btn fr">
                                    <i class="iconfont icon-bianji" title="编辑"  @click="editOne(index)"></i>
                                    <i class="iconfont icon-shanchu" title="删除" @click="deleteOne(item.id)"></i>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="compile-content " v-show="showEdit">
                        <div class="zsFrom my-resume-form ">
                            <div class="fillPart2 clearMP" style="border-top: none;">
                                <!-- 凡是添加的都是有默认一个，不能删 !!!!!! -->
                                <!-- 删除hover 效果 是 fillSchool -->
                                <div class="layui-form fillSchool clearfix" action="">
                                    <div class="layui-form-item">
                                        <label class="layui-form-label essential">
                                            <span>办公技能</span>
                                            <i>*</i>
                                        </label>
                                        <div class="layui-input-block">
                                            <select name="skillName" lay-filter="skillName" v-model="fill.skillName">
                                                <option value="word">word</option>
                                                <option value="execl">execl</option>
                                            </select>
                                            <!-- <div class="layui-unselect layui-form-select">
                                                <div class="layui-select-title">
                                                    <input type="text" placeholder="请选择擅长办公技能" value="" readonly="" class="layui-input layui-unselect">
                                                    <i class="layui-edge"></i>
                                                </div>
                                                <dl class="layui-anim layui-anim-upbit">
                                                    <dd lay-value="" class="layui-select-tips">请选择擅长办公技能</dd>
                                                    <dd lay-value="0" class="">word</dd>
                                                    <dd lay-value="1" class="">execl</dd></dl>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="layui-form-item">
                                        <label class="layui-form-label essential">
                                            <span>掌握程度</span>
                                            <i>*</i>
                                        </label>
                                        <div class="layui-input-block">
                                            <div class="xy-radio">
                                                <input type="radio" name="sikllLevel" lay-filter="sikllLevel" value="一般" title="一般" v-model="fill.sikllLevel">
                                                <div class="layui-unselect layui-form-radio layui-form-radioed">
                                                    <i class="layui-anim layui-icon"></i>
                                                    <span>一般</span></div>
                                                <input type="radio" name="sikllLevel" lay-filter="sikllLevel" value="良好" title="良好" v-model="fill.sikllLevel">
                                                <div class="layui-unselect layui-form-radio">
                                                    <i class="layui-anim layui-icon"></i>
                                                    <span>良好</span></div>
                                                <input type="radio" name="sikllLevel" lay-filter="sikllLevel" value="熟悉" title="熟悉" v-model="fill.sikllLevel">
                                                <div class="layui-unselect layui-form-radio">
                                                    <i class="layui-anim layui-icon"></i>
                                                    <span>熟悉</span></div>
                                                <input type="radio" name="sikllLevel" lay-filter="sikllLevel" value="精通" title="精通" v-model="fill.sikllLevel">
                                                <div class="layui-unselect layui-form-radio">
                                                    <i class="layui-anim layui-icon"></i>
                                                    <span>精通</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end of layui-form -->
                                <div class="layui-form clearfix">
                                    <div class="buttons clearfix fl">
                                        <button class="grayBtn-o" @click="hideEdit()">取消</button>
                                        <button class="blueBtn" style="float:right" lay-submit lay-filter="submitjineng">保存</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
</template>
<script>
import resumeService from "@/api/resumeService";
import bus from "@/utils/bus";
export default {
  data() {
    return {
      data: {
        resumeHandleSkillList: [
          // {
          //   createTime: "2018-04-12T10:20:59.676Z",
          //   id: "string",
          //   resumeId: "string",
          //   sikllLevel: "精通",
          //   skillName: "java",
          //   skillType: "PROFESSIONAL"
          // }
        ]
      },
      fill: {
        resumeId: "",
        sikllLevel: "熟悉",
        skillName: "execl",
        skillType: "PROFESSIONAL"
      },
      showEdit: false,
      resumeId: "",
      editOrAdd: 2, //1编辑2新增
      editIndex: "",
      resumeHandleSkillList2: []
    };
  },
  methods: {
    addOneFillEdit() {
      this.showEdit = true;
      this.fill = {
        resumeId: "",
        sikllLevel: "熟悉",
        skillName: "execl",
        skillType: "PROFESSIONAL"
      };
      this.editOrAdd = 2;
    },
    layuiListener() {
      let self = this;
      layui.form.on("select(skillName)", function(data) {
        self.fill.skillName = data.value;
      });
      layui.form.on("radio(sikllLevel)", function(data) {
        self.fill.sikllLevel = data.value;
      });
      layui.form.on("submit(submitjineng)", function() {
        console.log(self.fill);
        self.pushOne();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      //   layui.form.verify({
      //     intramuralHonor: function(value) {
      //       if (value.length > 20) {
      //         return "荣誉名称不得多于20个字符啊";
      //       }
      //     }
      //   });
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
        resumeId: "",
        sikllLevel: "熟悉",
        skillName: "execl",
        skillType: "PROFESSIONAL"
      };
      this.showEdit = false;
    },
    pushOne() {
      if (this.editOrAdd == 2) {
        this.fill.resumeId = this.resumeId;
        this.data.resumeHandleSkillList.push(this.fill);
        this.addOneData();
      } else if (this.editOrAdd == 1) {
        this.data.resumeHandleSkillList[this.editIndex] = this.fill;
        this.editListData();
      }
      this.hideEdit();
    },
    deleteOne(id) {
      resumeService.deleteResumeHandleSkill(this.resumeId, id).then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.getResume();
      });
    },
    editOne(index) {
      this.editIndex = index;
      this.fill = this.data.resumeHandleSkillList[index];

      this.showEdit = true;
      this.editOrAdd = 1;
    },
    getResume() {
      this.data.resumeHandleSkillList = [];
      this.resumeHandleSkillList2 = [];
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
        res.data.object.resumeHandleSkillList.forEach(element => {
          if (element.skillType == "PROFESSIONAL") {
            this.data.resumeHandleSkillList.push(element);
          } else {
            this.resumeHandleSkillList2.push(element);
          }
        });
      });
    },
    updateResume() {
      this.resumeHandleSkillList2.forEach(element => {
        this.data.resumeHandleSkillList.push(element);
      });
      resumeService.updateResume(this.resumeId, this.data).then(res => {
        var skillList1 = [];
        var skillList2 = [];
        res.data.object.resumeHandleSkillList.forEach(element => {
          if (element.skillType == "PROFESSIONAL") {
            skillList1.push(element);
          } else {
            skillList2.push(element);
          }
        });
        this.data.resumeHandleSkillList = skillList1;
        this.resumeHandleSkillList2 = skillList2;
        bus.$emit("resume_jineng_update", this.data.resumeHandleSkillList);
      });
    }
  },
  mounted() {
    bus.$on("resume_yuyan_update", function(data) {
      var list1 = [];
      var list2 = [];
      data.forEach(element => {
        if (element.skillType == "PROFESSIONAL") {
          list1.push(element);
        } else {
          list2.push(element);
        }
      });
      this.data.resumeHandleSkillList = list1;
      this.resumeHandleSkillList2 = list2;
    });
    this.getResume();
    setTimeout(() => {
      let self = this;

      this.$layuiRender.form();
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