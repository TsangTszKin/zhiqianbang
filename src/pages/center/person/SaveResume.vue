<template>
<div class="mainCont zsFrom">
	<div class="fillTip">
        <ul class="fillTipList clearfix">
            <li class="num1" :class="{fillTip_over: step >= 1}">
                <div class="bar" @click="step=1" style="cursor: pointer;">1</div>
                <div class="txt">基本信息</div>
                <div class="line clearfix">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </div>
            </li>
            <li class="num2" v-if="onJob" :class="{fillTip_over: step >= 2}">
                <div class="bar" @click="step=2" style="cursor: pointer;">2</div>
                <div class="txt">工作经验</div>
                <div class="line clearfix">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </div>
            </li>
            <li class="num2" v-else :class="{fillTip_over: step >= 2}">
                <div class="bar" @click="step=2" style="cursor: pointer;">2</div>
                <div class="txt">在校情况</div>
                <div class="line clearfix">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </div>
            </li>
            <li class="num3" :class="{fillTip_over: step >= 3}">
                <div class="bar" @click="step=3" style="cursor: pointer;">3</div>
                <div class="txt">求职意向</div>
                <div class="line clearfix">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </div>
            </li>
            <li class="num4" :class="{fillTip_over: step >= 4}">
                <div class="bar" @click="step=4" style="cursor: pointer;">4</div>
                <div class="txt">技能培训</div></li>
        </ul>
    </div><!-- fillTip -->
    
    <!-- 此处写组件 start -->
    <Part1 v-if="step === 1" :onJob='onJob' @emitOnJob='emitOnJob' ref="Part1"></Part1>
    <Part2ForJob v-if="step === 2 && onJob"></Part2ForJob>
    <Part2ForSchool v-if="step === 2 && !onJob"></Part2ForSchool>
    <Part3 v-if="step === 3"></Part3>
    <Part4 v-if="step === 4"></Part4>
    <!-- 此处写组件 end -->

    

</div><!-- end of mainCont -->
</template>

<script>
import Part1 from "@/components/resume/person/add/Part1";
import Part2ForJob from "@/components/resume/person/add/Part2ForJob";
import Part2ForSchool from "@/components/resume/person/add/Part2ForSchool";
import Part3 from "@/components/resume/person/add/Part3";
import Part4 from "@/components/resume/person/add/Part4";
import bus from "@/utils/bus";
export default {
  components: {
    Part1,
    Part2ForJob,
    Part2ForSchool,
    Part3,
    Part4
  },
  data() {
    return {
      step: 1,
      onJob: true
    };
  },
  methods: {
    emitOnJob(value) {
      if (value === "Y") {
        this.onJob = true;
      } else if (value === "N") {
        this.onJob = false;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$layuiRender.form();
    }, 200);

    bus.$on("resume.step", data => {
      alert(1111);
      this.step = data;
    });
  }
};
</script>

<style scoped>
@import url('/static/css/pupil/pupil.css');
</style>
