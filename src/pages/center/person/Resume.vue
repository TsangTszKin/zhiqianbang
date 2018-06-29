<template>
<div class="mainCont">
<button @click="$router.push({path: '/center/person/resume/saveResume'})">添加简历（临时）</button>
		<div class="z-main" style="width:auto">
						
			<div class="my-resume clearfix">

        <div class="left-bookrack">
          <div class="basic" style="padding-top:100px;margin-top:-100px;" id="tr-0">
										
										<!--存在信息时显示-->
										<dl class="basic-information clearfix" style="display: block;">
											<dt>
												<div>
													<img src="/static/img/pupil/xm.png" alt="" />
												</div>
											</dt>
											<dd class="d-1">
												<p class="p-1">井柏然</p>
												<ul class="clearfix">
													<li>现居住广州-天河区<span>|</span></li>
													<li>2 年工作经验<span>|</span></li>
													<li>男<span>|</span></li>
													<li>20 岁<span>|</span></li>
													<li>观望有好机会会考虑<span>|</span></li>
												</ul>
												<p class="p-2">
													<span class="s-1"><i class="iconfont icon-youxiang"></i>1815692368@qq.com</span>
													<span><i class="iconfont icon-shouji"></i>15678452349</span>
												</p>
											</dd>
											<dd class="d-2">
												<span @click="$router.push({path: '/center/person/resume/resumeEdit'})">
													<i class="iconfont icon-bianji" title="编辑"></i>
													编辑信息
												</span>
											</dd>
										</dl>


          </div>
        </div>

        <div class="right-bookrack" >
          <div class="list-box" style="display: block;position:static;">
            <ul class="top-ul clearfix">
										<li class="li-1 l-b">我的简历</li>
										<li class="li-2">
											<p class="p-1">简历完整度：<span>20%</span></p>
											<p class="p-2"><i style="width:20%"></i></p>
										</li>
										<li class="li-3">
											<button class="blueBtn" @click="$router.push({path: '/center/person/resume/previewResume'})">预览</button>
											<div class="xy-select  clearfix fl">
												<button class="grayBtn-o select-btn fa down">
													公开
													
												</button>
												<ul class="select-options" style="top:36px">
													<li>公开</li>
													<li>不公开</li>
												</ul>
											</div>
											
										</li>
									</ul>
          </div>
        </div>

<!--简历已填写 显示内容-->
						<!--
							取消右侧悬浮,修改css属性：
							.list-box  right-list = display:none;
							.list-box  = position:static;
							
							
						-->
						<div class="analyze clearfix" style="display: block;">
							<div class="resume-analyze-1 clearfix fl">
								
								<div class="user-skill">
									<h3 class="titles">技能画像<span>详细分析报告</span></h3>
									<div class="left-box-2">
										<dl>
											<dt>我的实力图谱</dt>
											<dd class="d-1">
												<span class="s-1">竞争力</span>
												<div><i style="width:30%"></i></div>
												<span class="s-2"><i class="i-1">50%</i>，已超越<i class="i-2">20%</i>小伙伴</span>
											</dd>
											<dd class="echarts-box" id='demo-1' >
												
											</dd>
										</dl>
									</div>
									<div class="right-box-2">
										<dl>
											<dt>我想从事岗位</dt>
											<dd class="layui-form clearfix d-2">
												<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>岗位</span><i>*</i></label>
												    <div class="layui-input-block">
												      <select name="city-1"> <!-- 添加 lay-search="" 启用关键字搜索选项 -->
												        <option value="">请选择课程类别</option>
												        <option value="0">北京</option>
												        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
												        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
												        <option value="3">深圳</option>
												        <option value="4">杭州</option>  
												      </select>
												      
												    </div>
												 </div>
											</dd>
											<dd class="echarts-box" id='demo-2' >
												
											</dd>
										</dl>
									</div>
								</div>
		
							</div>
							
							
							<div class="resume-analyze-2 resume-success clearfix fl">
											<div class="left-box fl">
												<h3 class="title">
													职位推荐
													<a href="" class="fr">换一换</a>
												</h3>
												<ul class="position-list layui-form">
													<li class="clearfix">
														<div class="div-1 fl">
															<p class="p-1">
																<!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->
																驻场运维工程师
															</p>
															<p class="p-2">
																<span class="s-1">
																	10-12万
																</span>
																北京/大专及以上/3年以上					
															</p>
															<p class="p-3">
																11小时前/投递后：5个工作日内反馈
															</p>
														</div>
														<div class="div-2 fl">
															<p class="p-1">江南博仁北京</p>
															<p class="p-2">IT服务/系统集成</p>
															<p class="p-3">
																<span>年底双薪</span>
																<span>五险一金</span>
																<span>带薪休假</span>
															</p>
														</div>
														
													</li>
													
													<li class="clearfix">
														<div class="div-1 fl">
															<p class="p-1">
																<!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->
																驻场运维工程师
															</p>
															<p class="p-2">
																<span class="s-1">
																	10-12万
																</span>
																北京/大专及以上/3年以上					
															</p>
															<p class="p-3">
																11小时前/投递后：5个工作日内反馈
															</p>
														</div>
														<div class="div-2 fl">
															<p class="p-1">江南博仁北京</p>
															<p class="p-2">IT服务/系统集成</p>
															<p class="p-3">
																<span>年底双薪</span>
																<span>五险一金</span>
																<span>带薪休假</span>
															</p>
														</div>
														
													</li>
													
													<li class="clearfix">
														<div class="div-1 fl">
															<p class="p-1">
																<!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->
																驻场运维工程师
															</p>
															<p class="p-2">
																<span class="s-1">
																	10-12万
																</span>
																北京/大专及以上/3年以上					
															</p>
															<p class="p-3">
																11小时前/投递后：5个工作日内反馈
															</p>
														</div>
														<div class="div-2 fl">
															<p class="p-1">江南博仁北京</p>
															<p class="p-2">IT服务/系统集成</p>
															<p class="p-3">
																<span>年底双薪</span>
																<span>五险一金</span>
																<span>带薪休假</span>
															</p>
														</div>
														
													</li>
													
													<li class="clearfix">
														<div class="div-1 fl">
															<p class="p-1">
																<!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->
																驻场运维工程师
															</p>
															<p class="p-2">
																<span class="s-1">
																	10-12万
																</span>
																北京/大专及以上/3年以上					
															</p>
															<p class="p-3">
																11小时前/投递后：5个工作日内反馈
															</p>
														</div>
														<div class="div-2 fl">
															<p class="p-1">江南博仁北京</p>
															<p class="p-2">IT服务/系统集成</p>
															<p class="p-3">
																<span>年底双薪</span>
																<span>五险一金</span>
																<span>带薪休假</span>
															</p>
														</div>
														
													</li>
													
													<li class="clearfix">
														<div class="div-1 fl">
															<p class="p-1">
																<!--<input type="checkbox" name="" title="" lay-skin="primary" checked>-->
																驻场运维工程师
															</p>
															<p class="p-2">
																<span class="s-1">
																	10-12万
																</span>
																北京/大专及以上/3年以上					
															</p>
															<p class="p-3">
																11小时前/投递后：5个工作日内反馈
															</p>
														</div>
														<div class="div-2 fl">
															<p class="p-1">江南博仁北京</p>
															<p class="p-2">IT服务/系统集成</p>
															<p class="p-3">
																<span>年底双薪</span>
																<span>五险一金</span>
																<span>带薪休假</span>
															</p>
														</div>
														
													</li>
												
												</ul>
											</div>
											<div class="right-box fl">
												<div class="tier-3">
													<h3 class="title">课程推荐
														<a href="" class="fr">更多</a>
													</h3>
													<dl>
														<dt>
															<img src="/static/img/course/cacti.jpg" alt="" />
														</dt>
														<dd class="d-1">JDK安装入门基础体验课</dd>
														<dd class="d-2 clearfix">
															<p class="fl p-1">
																<span>难度：</span>
																<i class="iconfont icon-nandu"></i>
																<i class="iconfont icon-nandu"></i>
																<i class="iconfont icon-nandu"></i>
															</p>
															<p class="fr p-2"><i>1</i>人已浏览</p>
														</dd>
														<dd class="d-3">免费</dd>
													</dl>
													
													<dl>
														<dt>
															<img src="/static/img/course/cacti.jpg" alt="" />
														</dt>
														<dd class="d-1">JDK安装入门基础体验课</dd>
														<dd class="d-2 clearfix">
															<p class="fl p-1">
																<span>难度：</span>
																<i class="iconfont icon-nandu"></i>
																<i class="iconfont icon-nandu"></i>
																<i class="iconfont icon-nandu"></i>
															</p>
															<p class="fr p-2"><i>1</i>人已浏览</p>
														</dd>
														<dd class="d-3">免费</dd>
													</dl>
													
												</div>
											</div>
										</div>
						
						</div>

			</div>

      <div class="report clearfix">
							<div class="left fl">
								<div class="skill">
									<h3 class="title">办公技能</h3>
									<div class="content">
										<ul class="rainbow" style="margin:54px 0;">
											<li>
												<span class="s-1">Photoshop</span>
												<span class="s-2">
													<b style="width:30%" class="c-1"></b>
												</span>
												<span class="s-3">专家</span>
											</li>
											<li>
												<span class="s-1">Photoshop</span>
												<span class="s-2">
													<b style="width:30%" class="c-2"></b>
												</span>
												<span class="s-3">专家</span>
											</li>
											<li>
												<span class="s-1">Photoshop</span>
												<span class="s-2">
													<b style="width:30%" class="c-3"></b>
												</span>
												<span class="s-3">专家</span>
											</li>
											<li>
												<span class="s-1">Photoshop</span>
												<span class="s-2">
													<b style="width:30%" class="c-4"></b>
												</span>
												<span class="s-3">专家</span>
											</li>
											<li>
												<span class="s-1">Photoshop</span>
												<span class="s-2">
													<b style="width:30%" class="c-5"></b>
												</span>
												<span class="s-3">专家</span>
											</li>
										</ul>
									</div>
								</div>
								<div class="professiona">
									<h3 class="title">专业技能</h3>
									<div class="content">
										<div class="layui-form professiona-select clearfix">
											<span class="fl labels">岗位</span>
											<select name="" lay-filter="">
										        <option value="">请选择公司性质</option>
										        <option value="0">上市</option>
										        <option value="1">A轮</option>
										    </select>
										</div>
										<ul class="echarts-box">
											<li id="demo-5"></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="right fl">
								<div class="position-more">
									<h3 class="title">课程推荐<a href="">更多</a></h3>
									<div class="content">
										<ul class="lists">
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
											<li>互联网软件开发互联网互联网软件开发互联网...</li>
										</ul>
									</div>
								</div>
								
							</div>
						</div>	

		</div>

</div><!-- end of mainCont -->
</template>

<script>
import echarts from 'echarts';
export default {
  mounted() {
    setTimeout(() => {
      layui.use(["form", "laydate", "laypage"], function() {
        var form = layui.form;
      });

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

      // 基于准备好的dom，初始化echarts实例
      var myChart2 = echarts.init($("#demo-2")[0]);

      // 指定图表的配置项和数据
      var option2 = {
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
      myChart2.setOption(option2);

      layui.use(["laydate", "layer"], function() {
        var laydate = layui.laydate;
        var layer = layui.layer;

        //年月范围选择
        laydate.render({
          elem: "#test1",
          type: "month",
          range: true //或 range: '~' 来自定义分割字符
        });

        /*自定义下拉选项*/
        var xySelect = {
          el: {
            box: $(".xy-select")
          },
          click: function(e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if ($(target).hasClass("select-btn")) {
              this.el.opt.toggle();
              this.el.opt.css("display") == "block"
                ? this.el.btn.removeClass("down").addClass("up")
                : this.el.btn.removeClass("up").addClass("down");
            } else if (target.tagName.toLowerCase() == "li") {
              /*获取选中内容  ： target.innerText*/
              this.el.btn.text(target.innerText);
              layer.msg("简历已经设置为：" + target.innerText);
              this.el.btn.removeClass("up").addClass("down");
              this.el.opt.hide();
            }
          },
          reset: function() {
            var ta = this;
            this.el.btn = this.el.box.find(".select-btn");
            this.el.opt = this.el.box.find(".select-options");
            this.el.opt.hide();
            document.documentElement.onclick = function(e) {
              var e = e || window.event;
              var target = e.target || e.srcElement;
              if (!$(target).closest(".xy-select")[0]) {
                ta.el.btn.removeClass("up").addClass("down");
                ta.el.opt.hide();
              }
            };
          },
          init: function() {
            this.reset();
            this.el.box.on("click", this.click.bind(this));
          }
        };
        xySelect.init();

        /*右侧锚点悬浮适应*/
        var autoList = {
          el: {
            box: $(".list-box"),
            main: $(".main")
          },
          setLeft: function() {
            var right = this.el.main.offset().left; //+ 180 + 16 + 764 + 20;;
            this.el.box.css({ right: right, display: "block" });
          },
          scrollFn: function() {
            if (this.el.box.offset().top > parseInt(this.el.box.css("top"))) {
              this.el.box.css("top", 70);
            } else {
              this.el.box.css("top", 100);
            }

            this.follow.judge($(window).scrollTop());
          },
          follow: {
            data: {
              interval: 150
            },
            record: function() {
              var domArr = [];
              this.data.a = autoList.el.box.find(".right-list a");
              this.data.a.each(function(idx, item) {
                domArr.push($(item.getAttribute("href")).offset().top + 100);
              });
              return domArr;
            },
            judge: function(y) {
              var ta = this;
              var arr = this.data.arr;

              $.each(arr, function(idx, item) {
                if (
                  y + ta.data.interval > item ||
                  y + ta.data.interval < item[idx + 1]
                ) {
                  ta.changeCss(idx);
                }
              });
            },
            changeCss: function(idx) {
              this.data.a.find("li").removeClass("active");
              $(this.data.a[idx])
                .find("li")
                .addClass("active");
            },
            start: function() {
              this.data.arr = this.record();
            }
          },
          init: function() {
            this.setLeft();
            this.follow.start();
            window.onresize = this.setLeft.bind(this);
            window.onscroll = this.scrollFn.bind(this);
          }
        };

        autoList.init();
      });

      // 基于准备好的dom，初始化echarts实例
      var myChart3 = echarts.init($("#demo-5")[0]);

      var option3 = {
        title: {
          show: true,
          text: "java",
          textStyle: {
            fontSize: 14,

            align: "center"
          },
          left: "40%",
          top: "88%",
          fontSize: 14
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: 80,
          top: 33,
          containLabel: false,
          borderColor: "#fff"
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} %"
            },
            show: true,
            max: 50 /*设置最大值*/
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "57%",
            barWidth: 32, //固定柱子宽度
            data: [10, 20, 20, 33],
            markPoint: {
              symbol: "pin",
              label: {
                show: true,
                color: "#000",
                fontSize: 20,
                padding: [0, 0, 0, 100]
              },
              data: [
                {
                  name: "1234",
                  coord: [2, 33.4],
                  value: "你在这里",
                  itemStyle: {
                    color: "#fff",
                    borderColor: "red",
                    borderWidth: 5
                  }
                }
              ]
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  formatter: "\n{c}%"
                }
              }
            }
          }
        ],
        color: ["#00BBEE"]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart3.setOption(option3);
    }, 500);
  }
};
</script>

<style scoped>
@import url("/static/css/pupil/pupil.css");
@import url("/static/css/portal/success.css");
</style>
