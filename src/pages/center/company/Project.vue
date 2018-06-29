<template>
<div class="mainCont">
					
					
					<!--<div class="mainTit">我的项目</div>-->
					
					<div class="recruitTab">
						<a href="javascript:void(0)" class="on">全部项目<i>(10)</i></a>
						<a href="#">进行中<i>(2)</i></a>
						<a href="#">已完成<i>(5)</i></a>
						<a href="#">已结束<i>(3)</i></a>
					</div><!-- end of recruitTab -->
					
					<div class="top-btn">
						<button class="blueBtn"><i class="iconfont icon-xinzeng"></i>新增</button>
					</div>
					<ul class="table-th clearfix">
						<li style="width:45%;padding-left:95px;">标题</li>
						<li style="width:16%">人数</li>
						<li style="width:23%">状态</li>
						<li style="width:auto;padding-left:18px">操作</li>
					</ul>
					<ul class="projectList">
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren fl">
								<p class="p-1"><span>110</span>参与</p>
								<p>不限名额</p>
							</div>
							<div class="projectList_state fl">
								<span class="weis">未发布</span>
							</div>
							<div class="projectList_btn fl" >
								<i class="iconfont icon-liebiao" title="申请列表"></i>
								<i class="iconfont icon-chakanbaogao" title="查看报告"></i>
								<i class="iconfont icon-jiexiang" title="结项"></i>
								<i class="iconfont icon-pingjia-moren" title="评价"></i>
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren fl">
								<p class="p-1"><span>110</span>参与</p>
								<p>剩<span>15</span>个名额</p>
							</div>
							<div class="projectList_state fl">
								<span class="delets">已结束</span>
							</div>
							<div class="projectList_btn fl" >
								<i class="iconfont icon-liebiao" title="申请列表"></i>
								<i class="iconfont icon-chakanbaogao" title="申请列表"></i>
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren fl">
								<p class="p-1"><span>110</span>参与</p>
								<p>剩<span>15</span>个名额</p>
							</div>
							<div class="projectList_state fl">
								<span class="oks">已完成</span>
							</div>
							<div class="projectList_btn fl" >
								<i class="iconfont icon-bianji" title="修改"></i>
								<i class="iconfont icon-shanchu" title="删除"></i>
								<i class="iconfont icon-fabu" title="再次发布"></i> 
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren fl">
								<p class="p-1"><span>110</span>参与</p>
								<p>剩<span>15</span>个名额</p>
							</div>
							<div class="projectList_state fl">
								<span class="datas">进行中</span>
							</div>
							<div class="projectList_btn fl" >
								<i class="iconfont icon-bianji" title="修改"></i>
								<i class="iconfont icon-shanchu" title="删除"></i>
								
							</div>
						</li>
						
				</ul>
				<div class="page-box">
					<div  id="page" class="fr"></div>
				</div>
					
				</div><!-- end of mainCont -->
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      /*分页*/
      layui.use("laypage", function() {
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
          elem: "page", //注意，这里的 test1 是 ID，不用加 # 号
          count: 50, //数据总数，从服务端得到
          theme: "#0099ff",
          layout: ["count", "prev", "page", "next", "", ""],
          theme: "#00cccc"
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
@import url("/static/css/enterprise/enterprise.css");
</style>
