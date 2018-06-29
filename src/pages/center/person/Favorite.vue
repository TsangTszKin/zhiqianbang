<template>
<div class="mainCont">
					
					<div class="mrTop">
						<div class="mrTop_tab">
							<a href="javascript:void(0)" class="on">职位收藏<span>(20)</span></a>
							<a href="#">项目收藏<span>(20)</span></a>
							<a href="#">实训收藏<span>(20)</span></a>
						</div>
						
						<div class="mrTop_searchBar">
							<ul class="layui-form zsFrom clearfix" action="">
							 	<li>
							 		<div class="searchBar_ipt">
										<input type="text" placeholder="请输入搜索内容">
										<a href="#" title="清空"><i class="iconfont icon-quxiao"></i></a>
										<button><i class="iconfont icon-chaxun"></i>搜索</button>
									</div>
							 	</li>
							</ul><!-- end of layui-form -->
						</div>
					</div><!-- end of mrTop -->
					
					<div class="mrTable">
						<table class="table">
							<thead>
								<tr>
									<th>职位名称</th>
									<th>公司名称</th>
									<th>工作地点</th>
									<th>薪资</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a class="linkTxt" href="#">JAVA开发工程师</a></td>
									<td><a class="linkTxt" href="#">广东轩辕网络科技有限公司</a></td>
									<td>广州</td>
									<td>6k-10k</td>
									<td>
										<a href="#" title="删除" class="linkIcon linkIcon_delete"><i class="iconfont icon-shanchu"></i></a>
									</td>
								</tr>
								<tr>
									<td><a class="linkTxt" href="#">JAVA开发工程师</a></td>
									<td><a class="linkTxt" href="#">广东轩辕网络科技有限公司</a></td>
									<td>乌鲁木齐</td>
									<td>6k-10k</td>
									<td>
										<a href="#" title="删除" class="linkIcon linkIcon_delete"><i class="iconfont icon-shanchu"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div class="page" id="page"></div>
					</div><!-- end of mrTable -->
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
          layout: ["count", "limit", "prev", "page", "next"],
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
