<template>
  <div class="mainCont ">
					
					<div class="mrTop">
						<div class="mrTop_searchBar">
							<ul class="layui-form zsFrom clearfix" action="">
								<li class="add">
									<button class="blueBtn" @click="$router.push({path: '/center/lesson/planSave'})"><i class="iconfont icon-xinzeng"></i>增加</button>
									<span class="tips">温馨提示：发布课程需先发布“课程计划”，再发布“课程发布”<a href="#">了解更多</a></span>
							 	</li>
							 	<li class="search">
							 		<div class="searchBar_ipt">
										<input type="text" placeholder="请输入搜索内容">
										<a href="#" title="清空"><i class="iconfont icon-quxiao"></i></a>
										<button><i class="iconfont icon-chaxun"></i>搜索</button>
									</div>
							 	</li>
							</ul><!-- end of layui-form -->
						</div>
					</div><!-- end of mrTop -->
					
					<div class="mrTable lessonTable">
						<form class="layui-form" action="">
							<table class="table">
								<thead>
									<tr>
										<th>
											<input type="checkbox" name="" title=" " lay-skin="primary">
										</th>
										<th class="sort">
											课程计划
											<div class="tableSort">
												<i class="sortUp"></i><!-- sortUp_on -->
												<i class="sortDown"></i><!-- sortDown_on -->
											</div>
										</th>
										<th class="sort">
											关键字
											<div class="tableSort">
												<i class="sortUp"></i><!-- sortUp_on -->
												<i class="sortDown"></i><!-- sortDown_on -->
											</div>
										</th>
										<th class="sortSelect">
											职业类型
											<div class="tableSort">
												<i class="sortUp"></i><!-- sortUp_on -->
											</div>
											<div class="tableSelect">
												<span class="on">全部</span>
												<span>计算机技术</span>
												<span>云运维</span>
												<span>Java开发</span>
											</div>
										</th>
										<th class="sort">
											创建时间
											<div class="tableSort">
												<i class="sortUp"></i><!-- sortUp_on -->
												<i class="sortDown"></i><!-- sortDown_on -->
											</div>
										</th>
										<th class="sortSelect">
											状态
											<div class="tableSort">
												<i class="sortUp"></i><!-- sortUp_on -->
											</div>
											<div class="tableSelect">
												<span class="on">全部</span>
												<span>今天</span>
												<span>最近三天</span>
												<span>最近一周</span>
												<span>最近两周</span>
											</div>
										</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><input type="checkbox" name="" title=" " lay-skin="primary"></td>
										<td>MySQL数据库入门实训</td>
										<td>mysql、linux</td>
										<td>计算机技术</td>
										<td>2017/10/11</td>
										<td>
											<span class="redTxt">已退回</span>
										</td>
										<td>
											<a href="#" class="linkIcon" title="预览"><i class="iconfont icon-chakan"></i></a>
											<a href="#" class="linkIcon" title="修改"><i class="iconfont icon-bianji"></i></a>
											<a href="#" class="linkIcon" title="上架"><i class="iconfont icon-shangjia"></i></a>
											<a href="#" class="linkIcon linkIcon_delete" title="删除"><i class="iconfont icon-shanchu"></i></a>
										</td>
									</tr>
									<tr>
										<td><input type="checkbox" name="" title=" " lay-skin="primary"></td>
										<td>MySQL数据库入门实训</td>
										<td>mysql、linux</td>
										<td>计算机技术</td>
										<td>2017/10/11</td>
										<td>
											<span class="redTxt">已退回</span>
										</td>
										<td>
											<a href="#" class="linkIcon" title="预览"><i class="iconfont icon-chakan"></i></a>
											<a href="#" class="linkIcon" title="修改"><i class="iconfont icon-bianji"></i></a>
											<a href="#" class="linkIcon" title="下架"><i class="iconfont icon-xiajia"></i></a>
											<a href="#" class="linkIcon linkIcon_delete" title="删除"><i class="iconfont icon-shanchu"></i></a>
										</td>
									</tr>
									<tr>
										<td><input type="checkbox" name="" title=" " lay-skin="primary"></td>
										<td>MySQL数据库入门实训</td>
										<td>mysql、linux</td>
										<td>计算机技术</td>
										<td>2017/10/11</td>
										<td>
											<span class="redTxt">已退回</span>
										</td>
										<td>
											<a href="#" class="linkIcon" title="预览"><i class="iconfont icon-chakan"></i></a>
											<a href="#" class="linkIcon" title="修改"><i class="iconfont icon-bianji"></i></a>
											<a href="#" class="linkIcon" title="下架"><i class="iconfont icon-xiajia"></i></a>
											<a href="#" class="linkIcon linkIcon_delete" title="删除"><i class="iconfont icon-shanchu"></i></a>
										</td>
									</tr>
									<tr>
										<td><input type="checkbox" name="" title=" " lay-skin="primary"></td>
										<td>MySQL数据库入门实训</td>
										<td>mysql、linux</td>
										<td>计算机技术</td>
										<td>2017/10/11</td>
										<td>
											<span class="grayTxt">已退回</span>
										</td>
										<td>
											<a href="#" class="linkIcon" title="预览"><i class="iconfont icon-chakan"></i></a>
											<a href="#" class="linkIcon" title="修改"><i class="iconfont icon-bianji"></i></a>
											<a href="#" class="linkIcon" title="下架"><i class="iconfont icon-xiajia"></i></a>
											<a href="#" class="linkIcon linkIcon_delete" title="删除"><i class="iconfont icon-shanchu"></i></a>
										</td>
									</tr>
								</tbody>
							</table>
							
							<div class="lessonUse clearfix">
								<div class="lessonUse_btn fl clearfix">
									<div class="lessonUse_down fl">
										<input type="checkbox" name="" title=" " lay-skin="primary">
										<button class="grayBtn">下架</button>
									</div>
									<button class="grayBtn fl">删除</button>
								</div>
								<div class="page fr" id="page"></div>
							</div>
							
						</form><!-- end of form -->
						
					</div><!-- end of mrTable -->
					
				</div><!-- end of mainCont -->

</template>

<script>
import Base from "@/pages/shoppingMall/Base";
export default {
  extends: Base,
  mounted() {
    setTimeout(() => {
      layui.use(["form", "laypage", "layer", "element"], function() {
        var form = layui.form;
        var laypage = layui.laypage,
          layer = layui.layer;
        var element = layui.element;

        //分页
        laypage.render({
          elem: "page",
          count: 50,
          layout: ["count", "limit", "prev", "page", "next"],
          jump: function(obj) {
            console.log(obj);
          }
        });
      });
    }, 500);

    //表格下拉

    $(".sortSelect").click(function() {
      $(this)
        .children(".tableSelect")
        .show();
      $(this)
        .children(".tableSort")
        .find("i")
        .removeClass("sortUp")
        .addClass("sortDown");
    });
  }
};
</script>

<style scoped>
@import url("/static/css/youshang/youshang.css");
@import url("/static/css/enterprise/enterprise.css");
</style>