<template>
  <!-- 技能画像 -->
<div class="mrCont_main" id="jineng">
    <div class="skill-map">
        <h3 class="title">
            技能画像
        </h3>
        <div class="map-box clearfix">
            <dl>
                <dt>
                    岗位匹配图谱
                </dt>
                <dd id='skillPicture-1'>
                </dd>
            </dl>
            <dl>
                <dt>
                    岗位技能分析：
                    <span>
                        云计算-java开发工程师
                    </span>
                </dt>
                <dd id='skillPicture-2'>
                </dd>
            </dl>
        </div>
        <h3 class="title">
            实训/实操记录
        </h3>
        <div class="date-line">
            <ul class="layui-timeline">
                <li class="layui-timeline-item">
                    <i class="layui-icon layui-timeline-axis">
                        &#xe63f;
                    </i>
                    <div class="layui-timeline-content layui-text">
                        <h3 class="layui-timeline-title">
                            能力测评
                            <span>
                                2017.09.15
                            </span>
                        </h3>
                        <p>
                            <ol class="line-ul">
                                <li>
                                    <span class="s-1">
                                        java 开发工程师测评
                                    </span>
                                    <span class="s-2">
                                        10分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                                <li>
                                    <span class="s-1">
                                        java 开发工程师测评
                                    </span>
                                    <span class="s-2">
                                        100分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                            </ol>
                        </p>
                    </div>
                </li>
                <li class="layui-timeline-item">
                    <i class="layui-icon layui-timeline-axis">
                        &#xe63f;
                    </i>
                    <div class="layui-timeline-content layui-text">
                        <h3 class="layui-timeline-title">
                            项目经验
                            <span>
                                2017.09.15
                            </span>
                        </h3>
                        <p>
                            <ol class="line-ul">
                                <li>
                                    <span class="s-1">
                                        轩辕中秋个活动策划设计
                                        <i class="iconfont icon-tubiaozhizuomoban">
                                        </i>
                                    </span>
                                    <span class="s-2">
                                        5分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                                <li>
                                    <span class="s-1">
                                        轩辕中秋个活动策划设计
                                        <i class="iconfont icon-tubiaozhizuomoban">
                                        </i>
                                    </span>
                                    <span class="s-2">
                                        5分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                                <li>
                                    <span class="s-1">
                                        轩辕中秋个活动策划设计
                                        <i class="iconfont icon-tubiaozhizuomoban">
                                        </i>
                                    </span>
                                    <span class="s-2">
                                        5分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                            </ol>
                        </p>
                    </div>
                </li>
                <li class="layui-timeline-item">
                    <i class="layui-icon layui-timeline-axis">
                        &#xe63f;
                    </i>
                    <div class="layui-timeline-content layui-text">
                        <h3 class="layui-timeline-title">
                            在线实训
                            <span>
                                2017.09.15
                            </span>
                        </h3>
                        <p>
                            <ol class="line-ul">
                                <li>
                                    <span class="s-1">
                                        MyBatis 框架基础入门
                                    </span>
                                    <span class="s-2">
                                        完成 10 个实验，共 10 天
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                                <li>
                                    <span class="s-1">
                                        java 开发工程师测评
                                    </span>
                                    <span class="s-2">
                                        100分
                                    </span>
                                    <span class="s-3">
                                        查看
                                    </span>
                                </li>
                            </ol>
                        </p>
                    </div>
                </li>
                <li class="layui-timeline-item">
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- end of mrCont_main -->
</template>
<script>
import echarts from "echarts";
export default {
  methods: {
    initChart1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init($("#skillPicture-1")[0]);

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
            center: ["50%", "50%"],
            radius: 80
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
          fontSize: "12",
          color: "#999999"
        }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    initChart2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init($("#skillPicture-2")[0]);

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
            center: ["50%", "50%"],
            radius: 80
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
          fontSize: "12",
          color: "#999999"
        }
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart1();
      this.initChart2();
    }, 1000);
  }
};
</script>
<style scoped>
.skill-map {
  padding: 30px 40px;
  padding-bottom: 85px;
}
.skill-map .title {
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 30px;
  color: #00cccc;
}
.skill-map .map-box {
}
.skill-map .map-box dl {
  float: left;
  width: 336px;
}
.skill-map .map-box dl dt {
  font-weight: bold;
}
.skill-map .map-box dl dt span {
  font-weight: normal;
}
.skill-map .map-box dl dd {
  height: 260px;
}

.line-ul {
}
.line-ul li {
  position: relative;
  padding-left: 40px;
  overflow: hidden;
  padding-right: 50px;
}
.line-ul li:hover {
  transition: 0.3s;
  background: #eeeeee;
}
.line-ul li:before {
  content: "";
  position: absolute;
  left: 20px;
  top: 22px;
  width: 6px;
  height: 6px;
  background: #00cccc;
  border-radius: 50%;
}
.line-ul li span {
  float: left;
  line-height: 48px;
}
.line-ul li span.s-1 {
  width: 258px;
  color: #333;
}
.line-ul li span.s-2 {
  color: #999;
  width: 160px;
  text-align: right;
  white-space: nowrap;
}
.line-ul li span.s-3 {
  float: right;
  color: #00bbee;
  cursor: pointer;
}
.line-ul .icon-tubiaozhizuomoban {
  font-size: 18px;
  color: #ff9900;
  position: relative;
  top: 2px;
  margin: 5px;
}
</style>
