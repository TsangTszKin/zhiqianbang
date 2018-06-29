<template>
<div class="mainCont">
					<div class="talents-search">
						
						<!--条件筛选框-->
						<div class="condition">
							<div class="custom clearfix">
								
								<div class="gangwei clearfix" >
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
									
									
								<div class="plus-input" style="display: none;">
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
							
							<div class="sort" style="display: none;">
								<span class="sort-item">最热方向<i class="fa fa-long-arrow-up"></i></span><span class="sort-item">最热方向<i class="fa fa-long-arrow-down"></i></span>
								<span class="sum fr">共有<b>1681</b>个符合要求的信息</span> 
							</div>
							<div style="background:#fff;" class="box-more">
								<div class="more-btn ">
									<span>收起更多选项</span><i class="iconfont icon-shouqi"></i>
								</div>
							</div>
						</div>
						
						<div class="opt clearfix">
							<form class="layui-form fl" action="">
							  	<input type="checkbox" name="" title="有照片" lay-skin="primary" />
								
							</form>
							<span class="fr">
								目前可下载<i>20</i>份简历
							</span>
							
							
						</div>
						
						<div class="table-box">
							<table>
								<thead>
									<tr>
										<td>ID</td>
										<td>年龄</td>
										<td>工作年限</td>
										<td>性别</td>
										<td>居住地</td>
										<td>职能</td>
										<td>学历</td>
										<td>求职状态</td>
										<td width="100">操作</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1223457 <i class="iconfont icon-mingpian-"></i></td>
										<td>22</td>
										<td>1年</td>
										<td>男</td>
										<td>广州</td>
										<td>软件开发工程师</td>
										<td>本科</td>
										<td>正在找工作</td>
										<td>
											<p class="option-btn clearfix">
												<i class="iconfont icon-chakan" title="查看"></i>
												<i class="iconfont icon-xiazai" title="下载"></i>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						
						
						<div class="page-box">
							<div id="test1" class="fr"></div>
						</div>
					</div>

				</div><!-- end of mainCont -->
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
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
          elem: "test1", //注意，这里的 test1 是 ID，不用加 # 号
          count: 50, //数据总数，从服务端得到
          layout: ["count", "limit", "prev", "page", "next", ""],
          theme: "#00cccc"
        });
      });
    }, 500);
  }
};
</script>

<style scoped>
@import url('/static/css/enterprise/enterprise.css');
</style>
