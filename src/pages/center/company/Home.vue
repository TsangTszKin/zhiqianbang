<template>
<div class="mainCont">
					
					
					<div class="person clearfix">
						<div class="personFl fl">
							<div class="person_chart clearfix">
								<div class="chart fl" id="chart"></div>
								<div class="people fr">
									<div class="peopleTab">
										<span class="on">周</span>
										<span>月</span>
										<span>年</span>
									</div>
									<div class="peopleTop">
										<p class="clearfix">
											<span class="tl">普通会员</span>
											<span class="tr">职位 <b>300</b> 个</span>
										</p>
										<p>有效期：2018-10-27</p>
									</div>
									<ul class="peopleList">
										<li class="blue clearfix">
											<p class="tl">浏览人数</p>
											<p class="tr">200人</p>
										</li>
										<li class="red clearfix">
											<p class="tl">应聘人数</p>
											<p class="tr">400人</p>
										</li>
										<li class="orange clearfix">
											<p class="tl">关注人数</p>
											<p class="tr">1,000人</p>
										</li>
									</ul>
								</div>
							</div>
							
							<ul class="poersonCard clearfix">
								<li class="blue">
									<p>剩余职位</p>
									<h1>300</h1>
								</li>
								<li class="orange">
									<p>可下载简历</p>
									<h1>3</h1>
								</li>
								<li class="purple">
									<p>可发布项目</p>
									<h1>300</h1>
								</li>
							</ul>
							
							<div class="personProject">
								<h1>我的项目 <a href="#">更多 > </a></h1>
								<ul class="projectCont clearfix">
									<li class="project_img fl">
										<img src="/static/img/temp.jpg" />
									</li>
									<li class="project_txt fl">
										<h1>大数据建模及创新应用大赛</h1>
										<p>报名时间：2017-08-01 至  2017-09-10</p>
										<p>结果公布：2017-09-30</p>
										<div class="view">
											<span><b>24</b>已申请</span>
											<span><b>241</b>已浏览</span>
										</div>
										
									</li>
								</ul>
							</div>
						</div><!-- end of personFl -->
						
						<div class="personFr fr">
							<h1>待办事宜 </h1>
							
							<div class="projectDemo">
								<h1>应聘人员 <a href="#">更多 > </a></h1>
								<table cellpadding="0" cellspacing="0">
									<tr>
										<td>1</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
									<tr>
										<td>2</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
									<tr>
										<td>3</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
									<tr>
										<td>4</td>
										<td>陈小龙</td>
										<td>运维</td>
									</tr>
									<tr>
										<td>5</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
								</table>
							</div>
							
							<div class="projectDemo">
								<h1>新收到笔试 <a href="#">更多 > </a></h1>
								<table cellpadding="0" cellspacing="0">
									<tr>
										<td>1</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
									<tr>
										<td>2</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
									<tr>
										<td>3</td>
										<td>陈小龙</td>
										<td>运维工程师</td>
									</tr>
								</table>
							</div>
							
							<div class="projectDemo">
								<h1>项目申请 <a href="#">更多 > </a></h1>
								<table cellpadding="0" cellspacing="0">
									<tr>
										<td>1</td>
										<td>陈小龙</td>
									</tr>
									<tr>
										<td>2</td>
										<td>陈小龙</td>
									</tr>
									<tr>
										<td>3</td>
										<td>陈小龙</td>
									</tr>
								</table>
							</div>
							
						</div><!-- end of personFr -->
					</div>
				</div><!-- end of mainCont -->
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    /*左侧导航*/
    $(window).scroll(function() {
      var w = $(window).scrollTop();
      //console.log(w);

      if (w >= 24) {
        $(".menus").css("top", "75px");
      } else {
        $(".menus").css("top", "auto");
      }
    });

    setTimeout(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("chart"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "我的招聘",
          textStyle: {
            color: "#999",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show: false,
          data: ["浏览人数", "应聘人数", "关注人数"]
        },
        color: ["#3e9fff", "#f96464", "#fe9d3d"],
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["1", "2", "3", "4", "5", "6", "7"],
            name: "日期",
            nameTextStyle: { color: "#aaa", fontSize: 12 },
            nameGap: 5,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: "#aaaa", fontSize: 12 },
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "人数",
            nameTextStyle: { color: "#aaa", fontSize: 12 },
            nameGap: 10,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: "#aaaa", fontSize: 12, inside: false },
            splitLine: { show: false }
          }
        ],
        series: [
          {
            name: "浏览人数",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: { areaStyle: { color: ["rgba(62,158,255,0.3)"] } }
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            symbol: "circle",
            symbolSize: 1,
            smooth: true
          },
          {
            name: "应聘人数",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: { areaStyle: { color: ["rgba(249,102,103,0.3)"] } }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
            symbol: "circle",
            symbolSize: 1,
            smooth: true
          },
          {
            name: "关注人数",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: { areaStyle: { color: ["rgba(253,148,65,0.3)"] } }
            },
            data: [150, 232, 201, 154, 190, 330, 410],
            symbol: "circle",
            symbolSize: 1,
            smooth: true
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }, 500);
  }
};
</script>

<style scoped>
@import url("/static/css/enterprise/enterprise.css");
</style>
