<template>
<div class="mainCont">
					
					<div class="mrTop">
						<div class="mrTop_tab">
							<a href="javascript:void(0)" class="on">全部项目<span>(20)</span></a>
							<a href="#">已支付<span>(20)</span></a>
							<a href="#">未支付<span>(20)</span></a>
							<a href="#">已取消<span>(20)</span></a>
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
					
					<div class="indentPay">
						<!--
                        	描述：加在哪里都可以，只要标签别乱套就行
                        -->
                        <div class="noDate">
                        	暂无数据！是否马上<a href="#">创建</a>
                        </div>
                        
						<div class="table-box">
							<table>
								<thead>
									<tr>
										<td width="80%">订单号：71AD163ED13EA29784<span class="span-1">2017-12-06  20：00：10</span></td>
										<td width="20%">剩余：<span  class="span-2">23时 42分 10秒</span> </td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										<!--rowspan="3" 根据数据行数 设置对应数值-->
										<td rowspan="3" class=" pay"> 
											<p>￥696.08</p>
											<button class="blueBtn">去支付</button>
											<button class="exitBtn">取消订单</button>
										</td>
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
								</tbody>
							</table>
							
							<table>
								<thead>
									<tr>
										<td width="80%">订单号：71AD163ED13EA29784<span class="span-1">2017-12-06  20：00：10</span></td>
										<td width="20%"><span class="span-3">已支付</span></td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										<!--rowspan="3" 根据数据行数 设置对应数值-->
										<td rowspan="3" class=" pay"> 
											<p>￥696.08</p>
										
										</td>
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
								</tbody>
							</table>
							
							<table>
								<thead>
									<tr>
										<td width="80%">订单号：71AD163ED13EA29784<span class="span-1">2017-12-06  20：00：10</span></td>
										<td width="20%"><span class="span-3">已取消</span></td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										<!--rowspan="3" 根据数据行数 设置对应数值-->
										<td rowspan="3" class=" pay"> 
											<p>￥696.08</p>
											<button class="blueBtn-o">加入购物车</button>
										</td>
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
									<tr>
										<td><img src="/static/img/course/docker-Dockerfile.jpg" alt="" />模型数据验证和填充</td>
										
									</tr>
								</tbody>
							</table>
						</div>
					
					
						<div class="page" id="page"></div>
					</div>
					
			
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

