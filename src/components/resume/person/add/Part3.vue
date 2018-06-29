<template>
<div>
<div class="fillTop clearfix">
    <div class="fillTop_title fl">
        <i class="pupilIcons iconsWantjob">
        </i>
        <span>
            求职意向
        </span>
        <sub>
            （根据你已填写的简历，我们为你推荐了以下信息）
        </sub>
    </div>
</div>
<!-- end of fillTop -->
<div class="layui-form clearfix" action="">
    <div class="fillPart1">
        <div class="clearfix">
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>
                        期望薪资
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block clearfix">
                    <div class="fillPay fl">
                        <select name="dutyType" lay-filter="dutyType">
                            <option value="1">年薪</option>
                            <option value="2">月薪</option>
                        </select>
                    </div>
                    <div class="fillPay_num fl" style="display: block;">
                        <select name="salary" lay-filter="salary">
                            <option value="0">100w</option>
                            <option value="1">50w </option>
                            <option value="2">20w</option>
                        </select>
                    </div>
                    <div class="fillPay_self fl" style="display: none;">
                        <input type="text" name="" placeholder="请填写薪资下限" autocomplete="off" class="layui-input">
                        <span>
                            -
                        </span>
                        <input type="text" name="" placeholder="请填写薪资上限" autocomplete="off" class="layui-input">
                    </div>
                    <span class="tail">
                        元/年
                    </span>
                    <a href="javascript:void(0)" class="tailPay">
                        自定义薪资
                    </a>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="fillTag">
                    <span :title="item" v-for="(item, index) in pickDataShow.workPosition">
                        {{item}}
                        <a href="javascript:void(0);" title="删除标签" @click="delOneWorkPosition(index)">
                            <i class="iconfont icon-quxiao">
                            </i>
                        </a>
                    </span>
                </div>
                <label class="layui-form-label essential">
                    <span>
                        地点
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block layuiChoose">
                    <input type="text" name="workPosition"  lay-verify="required|workPosition" v-model="data.resumeJobIntention.workPosition" placeholder="请填写/选择地点"
                    autocomplete="off" class="layui-input" readonly="readonly" @click="$refs.CityPicker.show();">
                    <i class="iconfont icon-dianjixuanze">
                    </i>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="fillTag">
                    <span :title="item" v-for="(item, index) in pickDataShow.dutyType">
                        {{item.typeLabel}}
                        <a href="javascript:void(0);" title="删除标签" @click="delOneDutyType(index)">
                            <i class="iconfont icon-quxiao">
                            </i>
                        </a>
                    </span>
                </div>
                <label class="layui-form-label essential">
                    <span>
                        职能
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block layuiChoose">
                    <input type="text" readonly="readonly" @click="$refs.JobPicker.show()" name="dutyType" lay-verify="required|dutyType" placeholder="请填写/选择职能"
                    autocomplete="off" class="layui-input" v-model="pickDataShow.dutyType">
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
                    <input type="text" v-model="data.resumeJobIntention.duty" name="duty" lay-verify="required|duty" placeholder="请填写职位" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <div class="fillTag">
                    <span title="计算机硬件">
                        计算机硬件
                        <a href="#" title="删除标签">
                            <i class="iconfont icon-quxiao">
                            </i>
                        </a>
                    </span>
                </div>
                <label class="layui-form-label">
                    <span>
                        行业
                    </span>
                        <i>
                            *
                        </i>
                </label>
                <div class="layui-input-block layuiChoose">
                    <input type="text" readonly="readonly" name="profession" lay-verify="required|profession" placeholder="请填写/选择行业"
                    autocomplete="off" class="layui-input" v-model="pickDataShow.profession">
                    <i class="iconfont icon-dianjixuanze">
                    </i>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="fillTag">
                    <span :title="item" v-for="(item, index) in pickDataShow.personalLabel">
                        {{item}}
                        <a href="javascript:void(0);" title="删除标签" @click="delOnePersonalLabel(index)">
                            <i class="iconfont icon-quxiao">
                            </i>
                        </a>
                    </span>
                </div>
                <label class="layui-form-label essential">
                    <span>
                        个人标签
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <input type="text" id="personalLabel" name="personalLabel" lay-verify="personalLabel" placeholder="请填写与职业、技能或行业相关关键词，按回车添加" autocomplete="off"
                    class="layui-input">
                    <span class="tail">
                        限10个，每个词不超过12个中文或24个英文
                    </span>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">
                    <span>
                        自我评价
                    </span>
                    <i>
                        *
                    </i>
                </label>
                <div class="layui-input-block">
                    <textarea name="selfEvaluate" lay-verify="selfEvaluate" placeholder="请简单介绍自己，说明自己最大的优势，让企业看到你的闪光点" class="layui-textarea"
                    style="height:190px;" v-model="data.resumeJobIntention.selfEvaluate">
                    </textarea>
                    <p class="font-qty">
                        <i class="em">
                            0
                        </i>
                        /
                        <i>
                            1000
                        </i>
                    </p>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>到岗时间</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <select name="" lay-filter="">
                        <option value="0">随时</option>
                        <option value="1">一周内</option>
                        <option value="2">一个月内</option>
                    </select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label essential">
                    <span>工作类型</span>
                    <i>*</i>
                </label>
                <div class="layui-input-block">
                    <select name="" lay-filter="">
                        <option value="0">兼职</option>
                        <option value="1">实习</option>
                        <option value="2">全职</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- end of clearfix -->
    </div>
    <!-- end of fillPart1 -->
    <div class="fillPart3">
        <button class="blueBtn" lay-submit lay-filter="submit">
            保存并下一步
        </button>
    </div>
    <!-- end of fillPart3 -->
</div>
<CityPicker :isShowArea="false" :maxSelectCount="5" ref="CityPicker" @emitSelectedCityData="emitSelectedCityData"></CityPicker>
<JobPicker :title="'职能'" :maxSelectCount="5" ref="JobPicker" @emitSelectedJobData="emitSelectedJobData"></JobPicker>
<!-- end of layui-form -->
</div>
</template>

<script>
import resumeService from "@/api/resumeService";
import CityPicker from "@/components/CityPicker";
import JobPicker from "@/components/JobPicker";
import bus from "@/utils/bus";
export default {
  components: {
    CityPicker,
    JobPicker
  },
  data() {
    return {
      data: {
        resumeJobIntention: {
          duty: "", //职位
          dutyType: "", //职能(类型配置的主键）
          profession: "aaaa", //行业
          resumeId: "",
          salaryMonth: 0, //月薪
          salaryType: "", //期望薪资类型（年、月）
          salaryYear: 0, //年薪
          selfEvaluate: "", //自我评价
          workPosition: "", //工作地点
          personalLabel: "" //个人标签
        }
      },
      pickDataShow: {
        dutyType: [],
        profession: ["aaaa"],
        workPosition: [],
        personalLabel: []
      },
      salary: 0,
      resumeId: "8080808062b41ff00162d8492a100004"
    };
  },
  methods: {
    emitSelectedCityData(value) {
      let tempArrary = [];
      value.forEach(element => {
        tempArrary.push(element.name);
      });
      this.data.resumeJobIntention.workPosition = tempArrary;
      this.pickDataShow.workPosition = tempArrary;

      var temp = "";
      for (let i = 0; i < tempArrary.length; i++) {
        const element = tempArrary[i];
        if (i == tempArrary.length - 1) {
          temp = temp + element;
        } else {
          temp = temp + element + ",";
        }
      }
      this.data.resumeJobIntention.workPosition = temp;
    },
    emitSelectedJobData(value) {
      console.log(value);
      let tempArraryShow = [];
      value.forEach(element => {
        tempArraryShow.push(element);
      });

      this.pickDataShow.dutyType = tempArraryShow;
      var temp = "";
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        if (i == value.length - 1) {
          temp = temp + element.id;
        } else {
          temp = temp + element.id + ",";
        }
      }
      this.data.resumeJobIntention.dutyType = temp;
    },
    delOneWorkPosition(index) {
      let temp = "";
      let tempArraryShow = [];
      for (let i = 0; i < this.pickDataShow.workPosition.length; i++) {
        const element = this.pickDataShow.workPosition[i];
        if (i == index) {
          continue;
        }
        let tempObj = element;
        tempArraryShow.push(tempObj);
        if (i == this.pickDataShow.workPosition.length - 1) {
          temp = temp + element;
        } else {
          temp = temp + element + ",";
        }
      }
      this.data.resumeJobIntention.workPosition = temp;
      this.pickDataShow.workPosition = tempArraryShow;
    },
    delOneDutyType(index) {
      let temp = "";
      console.log(this.pickDataShow.dutyType);
      let tempArraryShow = [];
      for (let i = 0; i < this.pickDataShow.dutyType.length; i++) {
        const element = this.pickDataShow.dutyType[i];
        if (i == index) {
          continue;
        }
        let tempObj = element;
        tempArraryShow.push(tempObj);
        if (i == this.pickDataShow.dutyType.length - 1) {
          temp = temp + element.id;
        } else {
          temp = temp + element.id + ",";
        }
      }
      this.data.resumeJobIntention.dutyType = temp;
      this.pickDataShow.dutyType = tempArraryShow;
    },
    delOnePersonalLabel(index) {
      let tempArraryShow = [];
      let temp = "";
      for (let i = 0; i < this.pickDataShow.personalLabel.length; i++) {
        const element = this.pickDataShow.personalLabel[i];
        if (i == index) {
          continue;
        }
        let tempObj = element;
        tempArraryShow.push(tempObj);
        if (i == this.pickDataShow.personalLabel.length - 1) {
          temp = temp + element;
        } else {
          temp = temp + element + ",";
        }
      }
      this.data.resumeJobIntention.personalLabel = temp;
      this.pickDataShow.personalLabel = tempArraryShow;
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        duty: function(value) {
          if (value.length > 10) {
            return "职位名字不得多于20个字符啊";
          }
        },
        selfEvaluate: function(value) {
          if (value.length > 1000) {
            return "自我评价不得多于1000个字符啊";
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
      if (!this.data.resumeBaseInfo.personalLabel) {
        layui.layer.msg("个人标签不能为空");
        return;
      }
      console.log(this.data);

      this.$loading.show();
      resumeService
        .save3step(this.resumeId, this.data)
        .then(res => {
          this.$loading.hide();
          if (res.data.code != 0) {
            layui.layer.msg(res.data.message);
            return;
          }
          bus.$emit("resume.resumeId", this.resumeId);
          bus.$emit("resume.step", 4);
        })
        .catch(res => {
          this.$loading.hide();
        });
    }
  },
  mounted() {
    let self = this;
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

    //控制字符长度
    var text = $(".layui-textarea").val(); //获取输入框的值
    var counter = text.length; //获取输入框的值

    $(".font-qty i.em").text(counter);

    $(document).keyup(function() {
      var text = $(".layui-textarea").val();
      var counter = text.length;

      $(".font-qty i.em").text(counter);

      if (counter > 1000) {
        //如果字数大于1000
        $(".layui-textarea").addClass("form-hint");
        $(".font-qty i.em").html("超出字数");
      }
    });

    //监听个人标签输入后按回车按钮的事件和回调
    $("#personalLabel").bind("keypress", function(event) {
      if (event.keyCode == "13") {
        if (self.data.resumeJobIntention.personalLabel) {
          self.data.resumeJobIntention.personalLabel = this.value;
        } else {
          self.data.resumeJobIntention.personalLabel =
            self.data.resumeJobIntention.personalLabel + "," + this.value;
        }

        self.pickDataShow.personalLabel.push(this.value);

        this.value = "";
      }
    });

    bus.$on("resume.resumeId", data => {
      this.resumeId = data;
    });

    this.verify();
    this.layuiListener();
  }
};
</script>
<style scoped>
.layui-form-label {
  width: 180px !important;
}
</style>

