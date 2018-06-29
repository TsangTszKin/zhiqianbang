<template>
  <div>
    <div class="contant main clearfix">
				
				<div class="mrTop lessonVideo_top">
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
				
				<ul class="lessonVideo_card clearfix">
					<!-- 每页显示15 个 -->
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充模型数据验证和填充模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
					<li>
						<div class="videoImg"><img src="/static/img/course/cacti.jpg" /></div>
						<div class="videoTxt">模型数据验证和填充</div>
						<a class="videoCheck" href="#"><i></i></a><!-- videoCheck_on -->
					</li>
				</ul><!-- end of lessonVide_card -->
				
				<div class="page" id="page" style="text-align: center;"></div>
			</div><!-- end of main -->
			
			
			<div class="videoChoose">
				<div class="main clearfix">
					<div class="videoChoose_title fl">已选：<span>数据库管理系统</span></div>
					<div class="videoChoose_btn fr">
						<button class="grayBtn-o">取消</button>
						<button class="blueBtn">确定</button>
					</div>
				</div>
			</div><!-- videoChoose -->
  </div>
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
          layout: ["prev", "page", "next"],
          jump: function(obj) {
            console.log(obj);
          }
        });
      });
    }, 500);

    //视频选中
    $(".lessonVideo_card li").click(function() {
      $(".lessonVideo_card li")
        .find(".videoCheck")
        .removeClass("videoCheck_on");
      $(this)
        .find(".videoCheck")
        .addClass("videoCheck_on");

      var txt = $(this)
        .find(".videoTxt")
        .html();
      $(".videoChoose_title span").html(txt);
    });
  }
};
</script>

<style scoped>
@import url("/static/css/youshang/youshang.css");
@import url("/static/css/enterprise/enterprise.css");
</style>