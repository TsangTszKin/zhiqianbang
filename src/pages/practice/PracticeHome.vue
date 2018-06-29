<template>
 <div>
   <div class="z-main">
					<div class="card practical">
							<!--条件筛选框-->
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
						</div>
						
						
						
						<div class="table-box " style="">
							<div class="table-content clearfix ">
								
								
								<div class="card-item" v-for="item in new Array(5)" @click="$router.push({path: '/practiceDetail'})">
									<img src="/static/img/onlinejob3.jpg" alt="">
									<dl>
										<!--添加 star 为收藏-->
										<dt class="c star">
											<p class="fr">
												
												<i class="fa fa-heart " title="收藏"></i>
												
											</p>
										</dt>
										<dd>
											<p class="p-1">云计算与虚拟机云计算与虚拟1231231321321</p>
											<p class="p-2">
												<span class="s-1">难度：</span>
												<span class="clearfix s-2">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<span class="s-3">
													<i>950</i>已浏览
												</span>
											</p>
											<p class="p-3">
												CloudStack 是一个开源的云操作系统,它可以帮助用户利用自己的硬件提供类似于Amazon EC2那样的公共服务，...
											</p>
											<p class="p-4">￥<b>199.00</b><span>轩辕网络</span></p>
										</dd>
									</dl>
								</div>

							
							

							
								
							
							
						</div>
					</div>
				
						
					<div class="page" id="page" style="text-align: center;"></div>
					
					
				</div>
      </div>
 </div>
</template>

<script>
export default {
  mounted() {
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
  }
};
</script>

<style scoped>
@import url("/static/css/portal/protal.css");
</style>
