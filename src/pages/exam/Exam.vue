<template>
<div>
<div class="appraisalBanner"></div>
<div class="z-main">
					<div class="appraisal">
						
						
						<div class="condition">
							<div class="custom clearfix">
								
								<div class="gangwei clearfix" style="display: none;">
									<div class="layui-form">
										<div class="fl d-1">
											<input type="text" class="layui-input" placeholder="请输入岗位名称"/>
										</div>
										<div class="layui-input-block layuiChoose fl d-2">
									    	<input type="text" name="address" required="" lay-verify="required" placeholder="期望工作地" autocomplete="off" class="layui-input">
									      	<i class="iconfont icon-dianjixuanze"></i>
									    </div>
									    <div class="fl d-3">
									    	 <button class="blueBtn"><i class="iconfont icon-chaxun"></i>搜索</button>
									    </div>
									   
									</div>
								</div>
									
									
								<div class="plus-input" style="display: block;">
									<input type="text" placeholder="请输入搜索信息"/>
									<button class="blueBtn">搜索</button>
								</div>
								
							</div>
							<div class="item-box ">
								<dl class="clearfix">
									<dt>月薪：</dt>
									<dd class="clearfix">
										<ul class="all-ul active">全部</ul>
										<ul class="item-ul clearfix">
											<li>2k以下</li>
											<li>2-3k</li>
											<li>3-4k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>1哈哈</li>
											<li>2哈哈</li>
											<li>3哈哈</li>
											<li>4哈哈</li>
											<li>5哈哈</li>
										</ul>
									</dd>
									<span class="more">更多<i class="iconfont icon-zhankai"></i></span>
								</dl>
								
								<dl class="clearfix">
									<dt>月薪范畴：</dt>
									<dd class="clearfix">
										<ul class="all-ul active">全部</ul>
										<ul class="item-ul clearfix">
											<li>2k以下</li>
											<li>2-3k</li>
											<li>3-4k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
										</ul>
									</dd>
									<span class="more">更多<i class="iconfont icon-zhankai"></i></span>
								</dl>
								
								<dl class="clearfix">
									<dt>月薪范畴：</dt>
									<dd class="clearfix">
										<ul class="all-ul active">全部</ul>
										<ul class="item-ul clearfix">
											<li>2k以下</li>
											<li>2-3k</li>
											<li>3-4k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>1嘻嘻哈哈</li>
											<li>2嘻嘻哈哈</li>
											<li>3嘻嘻哈哈</li>
											<li>4嘻嘻哈哈</li>
											<li>5嘻嘻哈哈</li>
											<li>6嘻嘻哈哈</li>
											<li>7嘻嘻哈哈</li>
											<li>8嘻嘻哈哈</li>
											<li>9嘻嘻哈哈</li>
											<li>10嘻嘻哈哈</li>
											<li>11嘻嘻哈哈</li>
											<li>12嘻嘻哈哈</li>
											<li>13嘻嘻哈哈</li>
											<li>14嘻嘻哈哈</li>
											<li>15嘻嘻哈哈</li>
											<li>16嘻嘻哈哈</li>
											<li>17嘻嘻哈哈</li>
											<li>18嘻嘻哈哈</li>
											<li>19嘻嘻哈哈</li>
											<li>20嘻嘻哈哈</li>
										</ul>
									</dd>
									<span class="more">更多<i class="iconfont icon-zhankai"></i></span>
								</dl>
								
								<dl class="clearfix">
									<dt>月薪范畴：</dt>
									<dd class="clearfix">
										<ul class="all-ul active">全部</ul>
										<ul class="item-ul clearfix">
											<li>2k以下</li>
											<li>2-3k</li>
											<li>3-4k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
											<li>11-12k</li>
										</ul>
									</dd>
									<span class="more">更多<i class="iconfont icon-zhankai"></i></span>
								</dl>
							</div>
							
							<div class="sort" style="display: block;">
								<span class="sort-item">最热方向<i class="fa fa-long-arrow-up"></i></span><span class="sort-item">最热方向<i class="fa fa-long-arrow-down"></i></span>
								<span class="sum fr">共有<b>1681</b>个符合要求的信息</span> 
							</div>
							<div style="background:#fff;" class="box-more">
								<div class="more-btn ">
									<span>收起更多选项</span><i class="iconfont icon-shouqi"></i>
								</div>
							</div>
						</div><!-- end of condition -->
						
					
						<div class="exam-list clearfix">
							<dl v-for="item in new Array(8)" @click="$router.push({path: '/examDetail'})">
								<dt><img src="/static/img/aboutImg2.png" alt="" /></dt>
								<dd class="d-1">【初级】互联网软件工程师</dd>
								<dd class="d-2"><span>1250</span>人已参加测评</dd>
							</dl>
							
						</div><!-- end of exam-list -->
						
						<div class="page" id="page" style="text-align: center;"></div>
					</div>
				</div>
</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      layui.use(["form", "laypage", "layer"], function() {
        var form = layui.form;
        var laypage = layui.laypage;
        var layer = layui.layer;

        //分页
        laypage.render({
          elem: "page",
          count: 50,
          layout: ["prev", "page", "next"],
          jump: function(obj) {
            console.log(obj);
          }
        });

        //弹窗 开始测评
        $(".exam-list dl").on("click", function() {
          layer.open({
            type: 1,
            title: false,
            area: ["600px", "280px"],
            shadeClose: true, //点击遮罩关闭
            content: $("#startText") //引入内容
          });
        });
      });
    }, 500);
  }
};
</script>

<style scoped>
@import url("/static/css/portal/protal.css");
</style>
