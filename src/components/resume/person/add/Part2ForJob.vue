<template>
<div class="layui-form" action="">
    <div class="fillTop clearfix">
        <div class="fillTop_title fl">
            <i class="pupilIcons iconsJob">
            </i>
            <span>
                工作经验
            </span>
            <sub>
                （请填写你的最近一份工作/项目经验）
            </sub>
        </div>
    </div>
    <!-- end of fillTop -->
    <div class="fillPart5" v-show="data.resumeJobExperienceList.length > 0" v-for="(item, index) in data.resumeJobExperienceList">
        <ul class="fill_jobList">
            <div class="fillPart_edit">
                <a href="#" class="fillPart_editIcon" title="编辑" @click="edit(index)">
                    <i class="iconfont icon-bianji">
                    </i>
                </a>
                <a href="javascript:void(0);" class="fillPart_deteleIcon" title="删除" @click="deleteOne(index)">
                    <i class="iconfont icon-shanchu">
                    </i>
                </a>
            </div>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        时间
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                    {{item.startTime}}-{{item.endTime}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        公司
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                   {{item.companyName}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        公司性质
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                     {{item.companyProperty}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        职能
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                    {{item.duty}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        行业
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                    {{item.profession}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        职位
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                    {{item.position}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        部门
                    </span>
                </label>
                <div class="fill_jobDetail fl">
                    {{item.department}}
                </div>
            </li>
            <li class="clearfix">
                <label class="layui-form-label">
                    <span>
                        工作描述
                    </span>
                </label>
                <div class="fill_jobDetail fill_lineHight fl">
                    <pre v-html="item.description"></pre>
                </div>
            </li>
        </ul>
    </div>
    <!-- end of fillPart5 -->
    <div class="fillPart1">
        <div class="fillJob clearfix" :class="{'fillJob_on': data.resumeJobExperienceList.length>0}" v-show="showEdit">
			<div class="fillSchool_delete">
				<a href="javascript:void(0)" @click="showEdit = false" title="删除工作经验"><i class="iconfont icon-quxiao"></i></a>
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
                    <input type="text" readonly="readonly" class="layui-input" id="educate" lay-verify="required" placeholder="请选择开始工作时间和截止时间">
                    <i class="iconfont icon-paibanbiao">
                    </i>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        公司
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <input type="text" name="companyName" lay-verify="required|companyName" v-model="fill.companyName" placeholder="请填写公司名称" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        公司性质
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <select name="companyProperty" lay-filter="companyProperty" v-model="fill.companyProperty">
                        <option value="0">
                            上市
                        </option>
                        <option value="1">
                            A轮
                        </option>
                    </select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        职能
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block layuiChoose">
                    <input type="text" name="duty"  lay-verify="required|duty" v-model="fill.duty" placeholder="请填写/选择职能"
                    autocomplete="off" class="layui-input">
                    <i class="iconfont icon-dianjixuanze">
                    </i>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        行业
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block layuiChoose">
                    <input type="text" name="profession" lay-verify="required|profession" v-model="fill.profession" placeholder="请填写/选择行业"
                    autocomplete="off" class="layui-input">
                    <i class="iconfont icon-dianjixuanze">
                    </i>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        职位
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <input type="text" name="position" lay-verify="required|position" v-model="fill.position" placeholder="请填写职位" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        部门
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <input type="text" name="department" lay-verify="required|department" v-model="fill.department" placeholder="请填写部门" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label essential">
                    <span>
                        工作描述
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <textarea name="description" lay-verify="required|description" v-model="fill.description" placeholder="请详细填写你的职责范围、工作任务以及取得的成绩等" class="layui-textarea"
                    style="height:190px;">
                    </textarea>
                    <p class="font-qty">
                        <i  class="em">
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
        <!-- end of layui-form -->
    </div>
    <!-- end of fillPart1 -->
    <div class="fillPart3">
        <a href="javascript:void(0);" class="fill_addJob" lay-submit lay-filter="submit2" @click="showEdit?'':showEdit = true">
            <i class="iconfont icon-xinzeng">
            </i>
            保存并继续添加
        </a>
    </div>
    <!-- end of fillPart3 -->

    <div class="fillPart3">
		  <button class="blueBtn" @click="submitData()">保存并下一步</button>
	  </div><!-- end of fillPart3 -->
</div>
</template>

<script>
import bus from "@/utils/bus";
import resumeService from "@/api/resumeService";
export default {
  data() {
    return {
      data: {
        resumeJobExperienceList: []
      },
      fill: {
        companyName: "",
        department: "", //部门
        description: "", //工作描述
        duty: "", //职能
        endTime: "",
        position: "", //职位
        profession: "", //行业
        resumeId: "",
        startTime: "",
        companyProperty: 0
      },
      showEdit: true,
      resumeId: "8080808062b41ff00162d8492a100004"
    };
  },
  methods: {
    layuiListener() {
      let self = this;
      layui.form.on("select(companyProperty)", function(data) {
        self.fill.companyProperty = data.value;
      });
      layui.form.on("submit(submit2)", function() {
        console.log(self.fill);
        self.pushOne();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        companyName: function(value) {
          if (value.length > 20) {
            return "公司名称不得多于20个字符啊";
          }
        },
        department: function(value) {
          if (value.length > 20) {
            return "部门名称不得多于20个字符啊";
          }
        },
        description: function(value) {
          if (value.length > 200) {
            return "工作描述不得超过200个字符";
          }
        },
        duty: function(value) {
          if (value.length > 20) {
            return "职能名称不得超过20个字符";
          }
        },
        position: function(value) {
          if (value.length > 20) {
            return "职位名称不得超过20个字符";
          }
        },
        profession: function(value) {
          if (value.length > 20) {
            return "行业名称不得超过20个字符";
          }
        }
      });
    },
    submitData() {
      this.data.resumeJobExperienceList.forEach(element => {
        delete element.dateId;
        element.startTime = $.trim(element.startTime) + "-01";
        element.endTime = $.trim(element.endTime) + "-01";
      });

      console.log(this.fill);
      this.$loading.show();
      resumeService
        .save2step(this.resumeId, this.data)
        .then(res => {
          this.$loading.hide();
          if (res.data.code != 0) {
            layui.layer.msg(res.data.message);
            return;
          }
          bus.$emit("resume.resumeId", this.fill.resumeId);
          bus.$emit("resume.step", 3);
        })
        .catch(res => {
          this.$loading.hide();
        });
    },
    hideEdit() {
      this.fill = {
        companyName: "",
        department: "", //部门
        description: "", //工作描述
        duty: "", //职能
        endTime: "",
        position: "", //职位
        profession: "", //行业
        resumeId: this.resumeId,
        startTime: "",
        companyProperty: 0
      };
      if (!this.showEdit) {
        this.showEdit = true;
        return;
      }
    },
    pushOne() {
      this.data.resumeJobExperienceList.push(this.fill);
      var resumeId = this.fill.resumeId;
      this.fill = {
        companyName: "",
        department: "", //部门
        description: "", //工作描述
        duty: "", //职能
        endTime: "",
        position: "", //职位
        profession: "", //行业
        resumeId: resumeId,
        startTime: "",
        companyProperty: 0
      };
      window.document.getElementById("educate").value = "";
    },
    deleteOne(index) {
      var tempArrary = [];
      for (let i = 0; i < this.data.resumeJobExperienceList.length; i++) {
        const element = this.data.resumeJobExperienceList[i];
        if (index == i) {
          continue;
        }
        var temp = {
          companyName: element.companyName,
          department: element.department, //部门
          description: element.description, //工作描述
          duty: element.duty, //职能
          endTime: element.endTime,
          position: element.position, //职位
          profession: element.profession, //行业
          resumeId: element.resumeId,
          startTime: element.startTime,
          companyProperty: element.companyProperty
        };
        tempArrary.push(temp);
      }
      this.data.resumeJobExperienceList = tempArrary;
    },
    edit(index) {
      this.fill = this.data.resumeJobExperienceList[index];
      window.document.getElementById("educate").value =
        this.fill.startTime + "~" + this.fill.endTime;
      this.deleteOne(index);
    }
  },
  mounted() {
    setTimeout(() => {
      let self = this;

      setTimeout(() => {
        this.$layuiRender.form();
      }, 200);

      layui.laydate.render({
        elem: "#educate",
        type: "month",
        range: "~",
        format: "yyyy-MM",
        done: function(value) {
          self.fill.startTime = value.split("~")[0];
          self.fill.endTime = value.split("~")[1];
        }
      });

      bus.$on("resume.resumeId", data => {
        this.file.resumeId = data;
        this.resumeId = data;
      });
    }, 200);

    this.layuiListener();
    this.verify();
  }
};
</script>
<style scoped>
.layui-form-label {
  width: 180px !important;
}
</style>

