<template>
<div>
       <div class="fillTop clearfix">
            <div class="fillTop_title fl">
                <i class="iconfont icon-gerenxinxi"></i>
                <span>个人信息</span>
            </div>
            <div class="fillTop_link fr">
                <router-link to="/center/person/resume/importResume">
                    <i class="iconfont icon-daoru"></i>导入简历
                </router-link>
            </div>
        </div>
<!-- end of fillTop -->
        <div class="layui-form clearfix" action="">
            <div class="fillPart1 clearfix" >
                <div class="layui-form-item">
                    <!--essential 添加 必填红色 *-->
                    <label class="layui-form-label essential">
                        <span>姓名</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <input type="text" name="name"  lay-verify="required|name" v-model="data.resumeBaseInfo.name" placeholder="请输入姓名" autocomplete="off" class="layui-input ">
                        <!-- 两种验证错误提示 -->
                        <!--1、layui 内置的验证规则，使用内置提交时的样式提示 例如 ‘lay-verify="required" ’ required：注册浏览器所规定的必填字段 lay-verify：注册form模块需要验证的类型 -->
                        <!-- 2、 添加 form-hint 自行添加红色边框提示 并使右侧 form-hint-content 红色文字提示 display:block -->
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>出生日期</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block layuiDate">
                        <input readonly="readonly" type="text" class="layui-input"lay-verify="required" name="birthday" id="birthday" placeholder="请选择出生日期">
                        <i class="iconfont icon-paibanbiao"></i>
                    </div>
                </div>
                 <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>是否已毕业</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <div class="xy-radio">
                            <input type="radio" name="onJob" value="Y" title="是" v-model="onJob" lay-filter="onJob">
                            <input type="radio" name="onJob" value="N" title="否" v-model="onJob" lay-filter="onJob">
                        </div>
                    </div>
                </div>
                <div class="layui-form-item" v-if="onJob == 'Y'">
                    <label class="layui-form-label essential">
                        <span>开始工作年份</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block layuiDate">
                        <input type="text" readonly="readonly" class="layui-input"id="beginWorkYear" name="beginWorkYear" lay-verify="required" placeholder="请选择开始工作年份">
                        <i class="iconfont icon-paibanbiao"></i>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>性别</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <div class="xy-radio">
                            <input type="radio" name="sex" value="MALE" v-model="data.resumeBaseInfo.sex" title="男">
                            <input type="radio" name="sex" value="FEMALE" v-model="data.resumeBaseInfo.sex" title="女"></div>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>手机号</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <input type="number" name="phone"  placeholder="请输入正确手机号" lay-verify="required|phone" v-model="data.resumeBaseInfo.phone" autocomplete="off" class="layui-input"  maxlength="11">    
                    </div>
                    <!-- <div class="form-hint-content c fl " style="display: block">
                        <i class="iconfont icon-quxiao1 fl"></i>
                        <div class="contents fl">用户手机号格式不正确,请重新输入</div>
                    </div> -->
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>居住地</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block layuiChoose">
                        <input readonly="readonly" @click="$refs.CityPicker.show();" type="text" name="stayPosition" lay-verify="stayPosition" v-model="data.resumeBaseInfo.stayPosition" placeholder="请选择现在居住地" autocomplete="off" class="layui-input">
                        <i class="iconfont icon-dianjixuanze"></i>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label essential">
                        <span>邮箱</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <input type="email" name="email" lay-verify="required|email" placeholder="请输入正确邮箱地址" autocomplete="off" v-model="data.resumeBaseInfo.email" class="layui-input "></div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">
                        <span>目前年收入</span>
                        <i>*</i>
                    </label>
                    <div class="layui-input-block">
                        <input type="number" name="yearIncome"lay-verify="required|yearIncome" placeholder="请输入当前年收入" v-model="data.resumeBaseInfo.yearIncome" autocomplete="off" class="layui-input ">
                        <span class="tail">万元</span></div>
                </div>
            </div>
    <!-- end of layui-form -->
        
<!-- end of fillPart1 -->
            <div class="fillPart2 clearfix">
                <div class="fillTop_sub">
                    <h1>教育经历
                        <span>（请填写最高学历）</span></h1>
                </div>
                <div class="layui-form clearfix" action="">
                    <div class="layui-form-item">
                        <label class="layui-form-label essential">
                            <span>时间</span>
                            <i>*</i>
                        </label>
                        <div class="layui-input-block layuiDate">
                            <input type="text" readonly="readonly" class="layui-input" lay-verify="required" id="startTime" placeholder="请选择开始工作年份">
                            <i class="iconfont icon-paibanbiao"></i>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label essential">
                            <span>学历/学位</span>
                            <i>*</i>
                        </label>
                        <div class="layui-input-block">
                            <select name="degree" lay-filter="degree" v-model="data.resumeEducationList[0].degree">
                                <option value="0">博士</option>
                                <option value="1">硕士</option>
                                <option value="2">本科</option>
                                <option value="3">专科</option>
                                <option value="4">高中</option>
                            </select>
                        </div>
                        <div class="layui-fillCheck c fl ">
                            <input type="checkbox" name="isFulltime" lay-skin="isFulltime" title="全日制" lay-filter="isFulltime" lay-verify="isFulltime" value="Y" v-model="data.resumeEducationList[0].isFulltime" checked />
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label essential">
                            <span>学校</span>
                            <i>*</i>
                        </label>
                        <div class="layui-input-block">
                            <input type="text" name="schoolName" lay-verify="required|schoolName" v-model="data.resumeEducationList[0].schoolName" placeholder="请填写学校" autocomplete="off" class="layui-input "></div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">
                            <span>专业</span>
                            <i>*</i>
                        </label>
                        <div class="layui-input-block">
                            <input type="text" name="profession" lay-verify="required|profession" placeholder="高中及以下学历选填" v-model="data.resumeEducationList[0].profession" autocomplete="off" class="layui-input "></div>
                    </div>
                </div>
        <!-- end of layui-form -->
            </div>
    <!-- end of fillPart2 -->
    <div class="fillPart3">
		  <button class="blueBtn" lay-submit lay-filter="submit">保存并下一步</button>
	  </div><!-- end of fillPart3 -->
        </div>
      
        <CityPicker :isShowArea="true" :maxSelectCount="1" ref="CityPicker" @emitSelectedCityData="emitSelectedCityData"></CityPicker>
</div>
</template>

<script>
import resumeService from "@/api/resumeService";
import CityPicker from "@/components/CityPicker";
import bus from "@/utils/bus";
export default {
  components: {
    CityPicker
  },
  data() {
    return {
      onJob: "Y",
      data: {
        resumeBaseInfo: {
          stayPosition: "",
          beginWorkYear: "",
          birthday: "",
          email: "",
          name: "",
          phone: "",
          sex: "MALE",
          yearIncome: ""
        },
        resumeEducationList: [
          {
            degree: "",
            isFulltime: "Y",
            profession: "",
            schoolName: "",
            startTime: "",
            endTime: ""
          }
        ]
      }
    };
  },
  methods: {
    layuiListener() {
      let self = this;
      layui.form.on("radio(onJob)", function(data) {
        self.onJob = data.value;
        self.$emit("emitOnJob", data.value);
        self.$layuiRender.form();
      });
      layui.form.on("select(degree)", function(data) {
        self.data.resumeEducationList[0].degree = data.value;
      });
      layui.form.on("checkbox(isFulltime)", function(data) {
        alert(data.elem.checked);
        if (data.elem.checked) {
          self.data.resumeEducationList[0].isFulltime = "Y";
        } else {
          self.data.resumeEducationList[0].isFulltime = "N";
        }
      });
      layui.form.on("submit(submit)", function() {
        self.submitData();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      layui.form.verify({
        name: function(value) {
          if (value.length > 10) {
            return "名字不得多于10个字符啊";
          }
        },
        yearIncome: function(value) {
          if (value.length > 10) {
            return "年收入不符合正常范围";
          }
        },
        schoolName: function(value) {
          if (value.length > 20) {
            return "学校名称不得超过20个字符";
          }
        },
        profession: function(value) {
          if (value.length > 20) {
            return "专业名称不得超过20个字符";
          }
        }
      });
    },
    emitSelectedCityData(value) {
      this.data.resumeBaseInfo.stayPosition = value.city + value.area;
    },
    submitData() {
      
      this.data.resumeBaseInfo.beginWorkYear = $.trim(this.data.resumeBaseInfo.beginWorkYear)+ "-01";
      this.data.resumeEducationList[0].startTime = $.trim(this.data.resumeEducationList[0].startTime)+ "-01";
      this.data.resumeEducationList[0].endTime = $.trim(this.data.resumeEducationList[0].endTime)+ "-01";
      console.log(this.data);
      this.$loading.show();
      resumeService.save1step(this.data).then(res=>{
          console.log(res);
          this.$loading.hide();
          if (res.data.code != 0)  {
              layui.layer.msg(res.data.message);
              return
          }
          bus.$emit('resume.resumeId', res.data.object.resumeBaseInfo.id);
          bus.$emit("resume.step", 2);
      }).catch(res=>{
          this.$loading.hide();
      });
    }
  },
  mounted() {
    //渲染日期控件
    setTimeout(() => {
      let self = this;
      this.$layuiRender.form();
      layui.laydate.render({
        elem: "#birthday",
        done: function(value) {
          self.data.resumeBaseInfo.birthday = value;
        }
      });
      layui.laydate.render({
        elem: "#beginWorkYear",
        type: "month",
        format: "yyyy-MM",
        done: function(value) {
          self.data.resumeBaseInfo.beginWorkYear = value;
        }
      });
      layui.laydate.render({
        elem: "#startTime",
        type: "month",
        range: "~",
        format: "yyyy-MM",
        done: function(value) {
          self.data.resumeEducationList[0].startTime = value.split("~")[0];
          self.data.resumeEducationList[0].endTime = value.split("~")[1];
        }
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

