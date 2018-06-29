<template>
  <div class="analyze" style="display: block;">
    <div class="resume-analyze-1 clearfix fl">
        <div class="user-skill">
            <h3 class="titles">技能画像
                <span>详细分析报告</span></h3>
            <div class="left-box-2">
                <dl>
                    <dt>我的实力图谱</dt>
                    <dd class="d-1">
                        <span class="s-1">竞争力</span>
                        <div>
                            <i style="width:30%"></i>
                        </div>
                        <span class="s-2">
                            <i class="i-1">50%</i>，已超越
                            <i class="i-2">20%</i>小伙伴</span></dd>
                    <dd class="echarts-box" id='demo-1'></dd>
                </dl>
            </div>
            <div class="right-box-2">
                <dl>
                    <dt>我想从事岗位</dt>
                    <dd class="layui-form clearfix d-2">
                        <div class="layui-form-item">
                            <label class="layui-form-label essential">
                                <span>岗位</span>
                                <i>*</i>
                            </label>
                            <div class="layui-input-block">
                                <select name="city-1">
                                    <!-- 添加 lay-search="" 启用关键字搜索选项 -->
                                    <option value="">请选择课程类别</option>
                                    <option value="0">北京</option>
                                    <option value="1" selected="">上海</option>
                                    <!-- selected 默认选中 -->
                                    <option value="2" disabled="">广州</option>
                                    <!-- disabled 选项禁用 -->
                                    <option value="3">深圳</option>
                                    <option value="4">杭州</option></select>
                            </div>
                        </div>
                    </dd>
                    <dd class="echarts-box" id='demo-2'></dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="resume-analyze-2 resume-success clearfix fl">
        <div class="left-box fl">
            <h3 class="title">职位推荐
                <a href="" class="fr">换一换</a></h3>
            <ul class="position-list layui-form">
                <li class="clearfix">
                    <div class="div-1 fl">
                        <p class="p-1">
                            <!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->驻场运维工程师</p>
                        <p class="p-2">
                            <span class="s-1">10-12万</span>北京/大专及以上/3年以上</p>
                        <p class="p-3">11小时前/投递后：5个工作日内反馈</p></div>
                    <div class="div-2 fl">
                        <p class="p-1">江南博仁北京</p>
                        <p class="p-2">IT服务/系统集成</p>
                        <p class="p-3">
                            <span>年底双薪</span>
                            <span>五险一金</span>
                            <span>带薪休假</span></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="div-1 fl">
                        <p class="p-1">
                            <!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->驻场运维工程师</p>
                        <p class="p-2">
                            <span class="s-1">10-12万</span>北京/大专及以上/3年以上</p>
                        <p class="p-3">11小时前/投递后：5个工作日内反馈</p></div>
                    <div class="div-2 fl">
                        <p class="p-1">江南博仁北京</p>
                        <p class="p-2">IT服务/系统集成</p>
                        <p class="p-3">
                            <span>年底双薪</span>
                            <span>五险一金</span>
                            <span>带薪休假</span></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="div-1 fl">
                        <p class="p-1">
                            <!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->驻场运维工程师</p>
                        <p class="p-2">
                            <span class="s-1">10-12万</span>北京/大专及以上/3年以上</p>
                        <p class="p-3">11小时前/投递后：5个工作日内反馈</p></div>
                    <div class="div-2 fl">
                        <p class="p-1">江南博仁北京</p>
                        <p class="p-2">IT服务/系统集成</p>
                        <p class="p-3">
                            <span>年底双薪</span>
                            <span>五险一金</span>
                            <span>带薪休假</span></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="div-1 fl">
                        <p class="p-1">
                            <!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->驻场运维工程师</p>
                        <p class="p-2">
                            <span class="s-1">10-12万</span>北京/大专及以上/3年以上</p>
                        <p class="p-3">11小时前/投递后：5个工作日内反馈</p></div>
                    <div class="div-2 fl">
                        <p class="p-1">江南博仁北京</p>
                        <p class="p-2">IT服务/系统集成</p>
                        <p class="p-3">
                            <span>年底双薪</span>
                            <span>五险一金</span>
                            <span>带薪休假</span></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="div-1 fl">
                        <p class="p-1">
                            <!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->驻场运维工程师</p>
                        <p class="p-2">
                            <span class="s-1">10-12万</span>北京/大专及以上/3年以上</p>
                        <p class="p-3">11小时前/投递后：5个工作日内反馈</p></div>
                    <div class="div-2 fl">
                        <p class="p-1">江南博仁北京</p>
                        <p class="p-2">IT服务/系统集成</p>
                        <p class="p-3">
                            <span>年底双薪</span>
                            <span>五险一金</span>
                            <span>带薪休假</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right-box fl">
            <div class="tier-3">
                <h3 class="title">课程推荐
                    <a href="" class="fr">更多</a></h3>
                <dl>
                    <dt>
                        <img src="/static/img/course/cacti.jpg" alt="" /></dt>
                    <dd class="d-1">JDK安装入门基础体验课</dd>
                    <dd class="d-2 clearfix">
                        <p class="fl p-1">
                            <span>难度：</span>
                            <i class="iconfont icon-nandu"></i>
                            <i class="iconfont icon-nandu"></i>
                            <i class="iconfont icon-nandu"></i>
                        </p>
                        <p class="fr p-2">
                            <i>1</i>人已浏览</p>
                    </dd>
                    <dd class="d-3">免费</dd></dl>
                <dl>
                    <dt>
                        <img src="/static/img/course/cacti.jpg" alt="" /></dt>
                    <dd class="d-1">JDK安装入门基础体验课</dd>
                    <dd class="d-2 clearfix">
                        <p class="fl p-1">
                            <span>难度：</span>
                            <i class="iconfont icon-nandu"></i>
                            <i class="iconfont icon-nandu"></i>
                            <i class="iconfont icon-nandu"></i>
                        </p>
                        <p class="fr p-2">
                            <i>1</i>人已浏览</p>
                    </dd>
                    <dd class="d-3">免费</dd></dl>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import resumeService from "@/api/resumeService";
import echarts from "echarts";
export default {
  data() {
    return {
      wantedJobList: [],
      resumeId: ""
    };
  },
  methods: {
    initChart1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init($("#demo-1")[0]);

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: "center",
          data: []
        },
        radar: [
          {
            indicator: [
              { text: "品牌", max: 100 },
              { text: "内容", max: 100 },
              { text: "可用性", max: 100 },
              { text: "功能", max: 100 },
              { text: "功能1", max: 100 }
            ],
            //center: ['10%','10%'],
            radius: 112
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            /*echarts 样式*/
            itemStyle: {
              borderColor: "#FFA013",
              borderWidth: 2
            },
            lineStyle: {
              color: "#FF9900",
              width: 2,
              opacity: 1
            },
            areaStyle: {
              color: "#ff9900",
              opacity: 0.3
            },
            /*echarts 样式---end*/

            data: [
              {
                value: [50, 50, 50, 50, 50],
                name: "某软件"
              }
            ]
          }
        ],

        /*echarts 样式*/
        textStyle: {
          fontSize: "14",
          color: "#333"
        }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    initChart2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init($("#demo-2")[0]);

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: "center",
          data: []
        },
        radar: [
          {
            indicator: [
              { text: "品牌", max: 100 },
              { text: "内容", max: 100 },
              { text: "可用性", max: 100 },
              { text: "功能", max: 100 },
              { text: "功能1", max: 100 },
              { text: "品牌", max: 100 },
              { text: "内容", max: 100 },
              { text: "可用性", max: 100 },
              { text: "功能", max: 100 },
              { text: "功能1", max: 100 },
              { text: "功能", max: 100 },
              { text: "功能1", max: 100 }
            ],
            //center: ['10%','10%'],
            radius: 112
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },

            /*echarts 样式*/
            itemStyle: {
              borderColor: "#FFA013",
              borderWidth: 2
            },
            lineStyle: {
              color: "#FF9900",
              width: 2,
              opacity: 1
            },
            areaStyle: {
              color: "#ff9900",
              opacity: 0.3
            },
            /*echarts 样式---end*/
            data: [
              {
                value: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                name: "某软件"
              }
            ]
          }
        ],

        /*echarts 样式*/
        textStyle: {
          fontSize: "14",
          color: "#333"
        }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    getResume() {
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart1();
      this.initChart2();
    }, 200);
  }
};
</script>
<style scoped>
@import url("/static/css/pupil/fillResume.css");
@import url("/static/css/formCommon.css");
@import url("/static/css/portal/success.css");
@import url("/static/css/pupil/resume-2.1.css");
</style>
