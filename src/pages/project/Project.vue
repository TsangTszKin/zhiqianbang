<template>
  <div class="main clearfix">
				
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
						
						
				<div class="plist">
					
						<dl class="clearfix" v-for="item in new Array(5)" @click="$router.push({path: '/projectDetail'})">
							<dt><img src="/static/img/aboutImg1.png" alt="" /></dt>
							<dd class="d-1">
								<h3>
									<div>乐源数字语言AI技能创意开发</div>
									<div class="div-2">
										<span title="智能语言">智能语言</span>
										<span title="技能开发">技能开发</span>
									</div>
								</h3>
								<p class="p-1">乐源数字</p>
								<p>语音技能是配合语音这一新型人机交互形式而使用的第三方应用，语音技能是配合语音这一新型人机交互形式而使用的第三方应用</p>
							</dd>
							<dd class="d-2">奖金</dd>
							<dd class="d-3">
								<p class="p-1"><span>310</span> <b>参与</b><i>|</i><b>申请</b></p>
								<p class="p-2">仅剩<span>15</span>个名额</p>
							</dd>
							<dd class="d-4">
								2小时后过期
							</dd>
						</dl>
					
					
				</div><!-- end of plist -->
				
				
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
  }
};
</script>

<style scoped>
@import url("/static/css/portal/protal.css");
</style>
