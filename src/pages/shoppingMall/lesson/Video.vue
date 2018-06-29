<template>
<div class="mainCont ">
					
					<div class="video-frequency">
						
						<div class="mrTop">
						<div class="mrTop_tab">
							<a href="简历管理-应聘简历-2.1.html" class="on">全部 <span>(20)</span></a>
							<a href="简历管理-推荐简历-2.1.html">未完成 <span>(200)</span></a>
							<a href="简历管理-主动下载-2.1.html">已发布 <span>(20)</span></a>
							<a href="简历管理-推荐简历-2.1.html">已停用 <span>(200)</span></a>
							<a href="简历管理-主动下载-2.1.html">上传中 <span>(20)</span></a>
						</div>
						<div class="mrTop_searchBar">
							<ul class="layui-form zsFrom clearfix" action="">
								<li class="w-220">
								    <div class="layui-input-inline"> 
								    	<select name="" lay-filter="">
									        <option value="">订单状态</option>
									        <option value="0">web前端开发工程师</option>
									        <option value="1">java开发工程师</option>
									    </select>
								    </div>
							 	</li>
								<li>
									<input type="text" class="layui-input" placeholder="订单编号" style="width:220px"/>
								</li>
								
							 	<li class="clearfix" style="margin-right:0px;">
							 		<button class="blueBtn" style="margin-right:20px;"><i class="iconfont icon-chaxun"></i>搜索</button>
							 		
							 	</li>
							 
							  	
							</ul><!-- end of layui-form -->
						
							<div class="user-btn clearfix"> <!--切换 fa fa-long-arrow-up-->
								<p class="fl">创建时间<i class="fa fa-long-arrow-down"></i></p>
								<span class="fr">共有<i>1960</i>个符合要求的信息</span>
							</div>
						</div>
					</div><!-- end of mrTop -->
						<div style="padding:20px 24px;">
							<button class="blueBtn" @click="$router.push({path: '/center/lesson/videoAdd'})"><i class="iconfont icon-xinzeng" style=""></i>新建</button>
						</div>
						<ul class="title">
							<li style="width:443px;text-indent:162px;">视频名称</li>
							<li style="width:188px">状态</li>
							<li style="width:230px">关联课程</li>
							<li>操作</li>
						</ul>
						<div class="dls">
								<dl class="clearfix">
							<dt class="clearfix">
								<div class="img-box fl">
									<img src="/static/img/course/cacti.jpg" alt="" />
									<div class="schedule">
										<p>
											<span class="fl"><i style="width:50%"></i></span>
											<b class="fl"><i>50</i>%</b>
										</p>
									</div>
								</div>
								
								<ol class="fl">
									<li class="li-1">基于自然语言理解</li>
									<li class="li-2">2018/08/01</li>
									<li class="li-3">512 M</li>
								</ol>
							</dt>
							<dd class="d-1">
								<p class="p-1">上传中</p>
								<p class="p-2">
									<button class="blueBtn suspend">暂停</button>
								</p>
							</dd>
							<dd class="d-2">
								关联 5 个课程
								<div class="message">
									<i></i>
									<h3>关联课程</h3>
									<ul>
										<li>1.  模型数据验证方法与实践</li>
										<li>2.  Java开发语言</li>
										<li>3.  Java定时任务调度工具使用</li>
										<li>4.  Java定时任务调度工具使用</li>
										<li>5.  Java定时任务调度工具使用</li>
									</ul>
								</div>
							</dd>
							<dd class="d-3">
								<i class="iconfont icon-bianji"></i>
								<i class="iconfont icon-shanchu"></i>
							</dd>
						</dl>
						<dl class="clearfix">
							<dt class="clearfix">
								<div class="img-box fl">
									<img src="/static/img/course/cacti.jpg" alt="" />
									<div class="schedule">
										<p>
											<span class="fl"><i style="width:50%" class="issue-red"></i></span>
											<b class="fl"><i>50</i>%</b>
										</p>
									</div>
								</div>
								
								<ol class="fl">
									<li class="li-1">基于自然语言理解</li>
									<li class="li-2">2018/08/01</li>
									<li class="li-3">512 M</li>
								</ol>
							</dt>
							<dd class="d-1">
								<p class="p-1 unfinished">未完成</p>
								<p class="p-2">
									<button class="blueBtn">续传</button>
								</p>
							</dd>
							<dd class="d-2">
								关联 5 个课程
								<div class="message">
									<i></i>
									<h3>关联课程</h3>
									<ul>
										<li>1.  模型数据验证方法与实践</li>
										<li>2.  Java开发语言</li>
										<li>3.  Java定时任务调度工具使用</li>
										<li>4.  Java定时任务调度工具使用</li>
										<li>5.  Java定时任务调度工具使用</li>
									</ul>
								</div>
							</dd>
							<dd class="d-3">
								<i class="iconfont icon-bianji"></i>
								<i class="iconfont icon-shanchu"></i>
							</dd>
						</dl>
						<dl class="clearfix">
							<dt class="clearfix">
								<div class="img-box fl">
									<img src="/static/img/course/cacti.jpg" alt="" />
									<div class="schedule">
										<p>
											<span class="fl"><i style="width:50%"></i></span>
											<b class="fl"><i>50</i>%</b>
										</p>
									</div>
								</div>
								
								<ol class="fl">
									<li class="li-1">基于自然语言理解</li>
									<li class="li-2">2018/08/01</li>
									<li class="li-3">512 M</li>
								</ol>
							</dt>
							<dd class="d-1">
								<p class="p-1 success">已发布</p>
								<p class="p-2">
									
								</p>
							</dd>
							<dd class="d-2">
								关联 5 个课程
								<div class="message">
									<i></i>
									<h3>关联课程</h3>
									<ul>
										<li>1.  模型数据验证方法与实践</li>
										<li>2.  Java开发语言</li>
										<li>3.  Java定时任务调度工具使用</li>
										<li>4.  Java定时任务调度工具使用</li>
										<li>5.  Java定时任务调度工具使用</li>
									</ul>
								</div>
							</dd>
							<dd class="d-3">
								<i class="iconfont icon-chakan"></i>
								<i class="iconfont icon-bianji"></i>
								<i class="iconfont icon-tingyong"></i>
								<i class="iconfont icon-shanchu"></i>
							</dd>
						</dl>
					<dl class="clearfix">
							<dt class="clearfix">
								<div class="img-box fl">
									<img src="/static/img/course/cacti.jpg" alt="" />
									<div class="schedule">
										<p>
											<span class="fl"><i style="width:50%"></i></span>
											<b class="fl"><i>50</i>%</b>
										</p>
									</div>
								</div>
								
								<ol class="fl">
									<li class="li-1">基于自然语言理解</li>
									<li class="li-2">2018/08/01</li>
									<li class="li-3">512 M</li>
								</ol>
							</dt>
							<dd class="d-1">
								<p class="p-1 outage">已停用</p>
								<p class="p-2">
									
								</p>
							</dd>
							<dd class="d-2">
								关联 5 个课程
								<div class="message">
									<i></i>
									<h3>关联课程</h3>
									<ul>
										<li>1.  模型数据验证方法与实践</li>
										<li>2.  Java开发语言</li>
										<li>3.  Java定时任务调度工具使用</li>
										<li>4.  Java定时任务调度工具使用</li>
										<li>5.  Java定时任务调度工具使用</li>
									</ul>
								</div>
							</dd>
							<dd class="d-3">
								<i class="iconfont icon-chakan"></i>
								<i class="iconfont icon-bianji"></i>
								<i class="iconfont icon-shuaxin"></i>
								<i class="iconfont icon-shanchu"></i>
							</dd>
						</dl>
					
						</div>
					</div>
					
					<div class="page-box clearfix">
						<div id="page-1"class="fr"></div>
					</div>


          <div id="pop-2" style="display: none;">
				<p style="line-height:25px;text-align:center;font-size:18px;padding-top:20px;">是否删除该视频？</p>
				<div style="width:180px;margin:0 auto;padding-top:42px;">
					<button class="blueBtn-o fl" style="margin-right:20px;">取消</button><button class="blueBtn fl">确认</button>
				</div>
			</div>

      <div id="pop-1" style="display: none;" class="clearfix">
							<div class="layui-form zsFrom " action="">
								<div class="layui-form-item">
									 <label class="layui-form-label"><span>视频名称</span><i>*</i></label>
									    <div class="layui-input-block" >
									     	<input type="text" class="layui-input" style="width:302px;" placeholder=""/>
									     
									 	 </div>
								</div>
								
								<div class="layui-form-item select-w-302" style="">
											    <label class="layui-form-label"><span>类型</span><i>*</i></label>
											    <div class="layui-input-block" >
											      <select name="city" lay-verify="required">
											        <option value="">请选择所属类型</option>
											        <option value="0">北京</option>
											        <option value="1">上海</option>
											        <option value="2">广州</option>
											        <option value="3">深圳</option>
											        <option value="4">杭州</option>
											      </select>
											     
											    </div>
								</div>
								
								 <div style="width:180px;margin:0 auto;">
									
								      	<button class="grayBtn-o fl">取消</button>
									     <!-- 表单内容验证成功 移出 disable 点亮确定按钮 -->
									    <button class="blueBtn disable fl"  style="margin-left:20px; ">提交</button>
								    </div>
								</div>
							</div>
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

        //执行一个laypage实例
        laypage.render({
          elem: "page-1", //注意，这里的 test1 是 ID，不用加 # 号
          count: 50, //数据总数，从服务端得到
          theme: "#0099ff",
          layout: ["count", "prev", "page", "next", "", ""],
          theme: "#00cccc"
        });
      });
    }, 500);

    var layer = layui.layer;
    //弹窗默认配置
    layer.config({
      type: 1,
      anim: 0, //默认动画风格
      skin: "xuanyuan-pop",
      area: ["600px", "235px"] //  - - 小弹窗
    });

    //弹窗激活- 删除视频
    /*layer.open({
						 title:'&nbsp;' //没有标题输入空符
						,content:$('#pop-2') //引入内容
						,area: ['400px', '210px'] 
						
					})*/

    //弹窗激活-修改视频名称
    /*layer.open({
						 title:'修改视频名称'
						,content:$('#pop-1') //引入内容
						,area: ['600px', '270px'] 
						
					})*/
  }
};
</script>

<style scoped>
@import url("/static/css/youshang/youshang.css");
@import url("/static/css/enterprise/enterprise.css");
</style>