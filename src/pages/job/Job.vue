<template>
<div class="main clearfix">
				<div class="allProject-new clearfix">
					<div class="active">按企业</div>
					<div>按企业</div>
				</div>
				
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
					
			
				<div class="tab-box">
					<div class="company-list clearfix" style="display: block;">

						<dl class="underway" v-for="item in new Array(5)" @click="$router.push({path: '/jobDetail'})">
							<dt class="fl"><img src="/static/img/aboutImg2.png" alt="" /></dt>
							<dd class="fl d-1" >
								<p class="p-1">广州心与潮信息科技有限公司</p>
								<p class="p-2"><span>全职</span><span>实习</span></p>
								<p class="p-3">职位数量：<span>10个</span></p>
							</dd>
							<dd class="fl d-2">
								<span class="fl">科技的态度是对世界的温度 </span>
								<span class="fr"><i>1203</i>人浏览</span>
							</dd>
						</dl>
						
						<dl class="abort" v-if="false">
							<dt class="fl"><img src="/static/img/aboutImg2.png" alt="" /></dt>
							<dd class="fl d-1" >
								<p class="p-1">广州心与潮信息科技有限公司</p>
								<p class="p-2"><span>全职</span><span>实习</span></p>
								<p class="p-3">职位数量：<span>10个</span></p>
							</dd>
							<dd class="fl d-2">
								<span class="fl">科技的态度是对世界的温度 </span>
								<span class="fr"><i>1203</i>人浏览</span>
							</dd>
						</dl>
					</div><!-- end of company-list -->
				
				
					<div class="project-list" style="display: block;">
						<table width="100%">
							<thead>
								<tr>
									<th  width="22%">职位名</th>
									<th  width="34%">公司名</th>
									<th  width="17%">工作地点</th>
									<th  width="13%">薪资</th>
									<th  width="12%">发布时间</th>
								</tr>
							</thead>
							<tbody class="position-body">
									<tr v-for="item in new Array(5)" @click="$router.push({path: '/jobDetail'})">
										
											<td class="positon-name">网络策划专员C02</td>
											<td>广东轩辕网络科技有限公司</td>
											<td class="gray">广州市越秀区</td>
											<td class="price">4.5-6千 </td>
											<td class="gray">2017-10-22</td>
										
									</tr>
									
								</tbody>
							</table>
						</div>
				</div><!-- end of tab-box -->
				
				<div class="page" id="page" style="text-align: center;"></div>
				
			</div><!-- end of contant -->
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      layui.use(["form", "laypage"], function() {
        var form = layui.form;
        var laypage = layui.laypage,
          layer = layui.layer;

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

    //条件筛选框：
    /*
		1.根据每项内容长度,隐藏/显示 更多 按钮
		2.展开 收缩功能
		*/

    var condition = {
      el: {
        con: $(".condition")
      },
      hideMore: function() {
        var itemArr = this.el.con.find(".item-ul");
        itemArr.each(function(idx, item) {
          var w = $(item).height();
          w > 32
            ? (item.style.height = "32px")
            : $(item)
                .parent()
                .next()
                .css("display", "none");
        });
      },
      getChildren: function(name) {
        return this.el.con.find(name);
      },
      toggleIcon: function(i) {
        i.hasClass("icon-zhankai")
          ? i.removeClass().addClass("iconfont icon-shouqi")
          : i.removeClass().addClass("iconfont icon-zhankai");
      },
      changeBox: function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;

        var box = this.getChildren(".item-box");
        box.height() == 0 ? box.height("auto") : box.height(0);

        var more = box.siblings(".box-more");
        var btn = more.find(".more-btn span");
        var i = more.find(".more-btn .iconfont");
        this.toggleIcon(i);
        btn[0].innerText =
          btn.text().trim() == "收起更多选项" ? "展开更多选项" : "收起更多选项";
      },
      changeItem: function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var ta = $(target);
        var btn = ta.closest(".more");
        if (btn[0]) {
          var ul = btn.prev().find(".item-ul");
          ul.height() == 32 ? ul.height("auto") : ul.height(32);
          var i = btn.find(".iconfont");
          this.toggleIcon(i);
        }
      },
      init: function() {
        this.hideMore();
        this.getChildren(".more-btn").on("click", this.changeBox.bind(this));
        this.el.con.on("click", this.changeItem.bind(this));
      }
    };
    condition.init();

    //pops
    $(".cut").click(function() {
      $(".pops").fadeIn();
      $(".popsBuild").fadeIn();
    });

    // 展开收缩演示
    $(".item-box .buts").on("click", function() {
      var parent = $(this).parent();
      var who = $(this);
      if (parent.css("height") == "32px") {
        parent.css("height", "auto");
        who
          .find(".fa")
          .removeClass()
          .addClass("fa fa-angle-up fa-lg");
        console.log(who.find(".fa"));
      } else {
        parent.css("height", "32");
        who
          .find(".fa")
          .removeClass()
          .addClass("fa fa-angle-down fa-lg");
      }
    });

    //滚动条
    $(".right-look").panel({ iWheelStep: 32 });

    //搜索框移入展开内容
    $(".lefts dt").on("click", function() {
      $(this)
        .next()
        .stop()
        .fadeToggle();
      if (
        $(this)
          .find("i")
          .hasClass("fa-angle-down")
      ) {
        $(this)
          .find("i")
          .removeClass()
          .addClass("fa fa-angle-up fa-lg");
      } else {
        $(this)
          .find("i")
          .removeClass()
          .addClass("fa fa-angle-down fa-lg");
      }
    });
  }
};
</script>

<style scoped>
@import url("/static/css/portal/protal.css");
</style>
