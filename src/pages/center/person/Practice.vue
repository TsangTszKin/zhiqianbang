<template>
<div class="mainCont">
					
					<div class="recruitTab">
						<a href="javascript:void(0)" class="on">全部任务(10)</a>
						<a href="#">进行中(2)</a>
						<a href="#">已完成(5)</a>
						<a href="#">已退出(3)</a>
					</div><!-- end of recruitTab -->
					
					<div class="content-list">
						<dl>
							<dt><img src="/static/img/course/Citrix-XenServer-2.jpg" alt="" /><span>进行中</span></dt>
							<dd class="d-1">
								<h3>Python开发木马程序<span>[有效期：2018-03-18]</span></h3>
								<div class="clearfix">
									<p class="fl"><span style="width:30%"></span></p><b class="fl">正在学习...</b>
								</div>
								<p class="p-1">您已超<i>83</i>%小伙伴</p>
								<p class="p-2"><i>1</i>篇实验报告</p>
							</dd>
							<dd class="d-2">
								<button class="blueBtn">开始学习</button>
								<button class="blueBtn-o">查看报告</button>
								<button class="grayBtn-o">退出任务</button>
							</dd>
						</dl>
						<dl>
							<dt><img src="/static/img/course/Citrix-XenServer-2.jpg" alt="" /><span>已完成</span></dt>
							<dd class="d-1">
								<h3>Python开发木马程序<span>[有效期：2018-03-18]</span></h3>
								<div class="clearfix">
									<p class="fl"><span style="width:100%"></span></p><b class="fl">已完成</b>
								</div>
								<p class="p-1">您已超<i>83</i>%小伙伴</p>
								<p class="p-2"><i>1</i>篇实验报告</p>
							</dd>
							<dd class="d-2">
								<button class="blueBtn">重新学习</button>
								<button class="blueBtn-2">提交报告</button>
								<button class="blueBtn-o">查看报告</button>
								
							</dd>
						</dl>
						<dl>
							<dt><img src="/static/img/course/Citrix-XenServer-2.jpg" alt="" /><span>已完成</span></dt>
							<dd class="d-1">
								<h3>Python开发木马程序<span>[有效期：2018-03-18]</span></h3>
								<div class="clearfix">
									<p class="fl"><span style="width:10%"></span></p><b class="fl">已学习 <i>35%</i></b>
								</div>
								<p class="p-1">您已超<i>83</i>%小伙伴</p>
								<p class="p-3">
									<span><i>[第2课]</i>Nmap端口扫描</span>
									<span><i>[第2课]</i>Nmap端口扫描</span>
									
								</p>
							</dd>
							<dd class="d-2">
								<button class="blueBtn">重新学习</button>
								<button class="blueBtn-2">提交报告</button>
								<button class="blueBtn-o">查看报告</button>
								
							</dd>
						</dl>
					</div>
					
					<div class="page" id="page"></div>
				</div><!-- end of mainCont -->
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      layui.use(["form", "laypage", "layer"], function() {
        var form = layui.form;
        var laypage = layui.laypage,
          layer = layui.layer;

        //分页
        laypage.render({
          elem: "page",
          count: 50,
          layout: ["count", "prev", "page", "next"],
          jump: function(obj) {
            console.log(obj);
          }
        });
      });
    }, 500);

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
  }
};
</script>

<style scoped>
@import url("/static/css/pupil/pupil.css");
@import url("/static/css/enterprise/enterprise.css");
</style>
