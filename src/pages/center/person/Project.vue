<template>
<div class="mainCont">
					
					<div class="recruitTab" style="margin-bottom:20px;">
						<a href="javascript:void(0)" class="on">全部项目<i>(10)</i></a>
						<a href="#">进行中<i>(5)</i></a>
						<a href="#">已完成<i>(3)</i></a>
						<a href="#">已结束<i>(3)</i></a>
					</div><!-- end of recruitTab -->
					
					
					<ul class="table-th clearfix">
						<li style="width:61%;padding-left:95px;">标题</li>
						
						<li style="width:32%">状态</li>
						<li style="width:auto;padding-left:18px">操作</li>
					</ul>
					<ul class="projectList">
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
									<u>技能开发技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren task-list-box fl">
								<div class="task-list">
									<span>任务1：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务2：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务3：<i class="iconfont icon-yiwen"></i></span>
								</div>
							</div>
							<div class="projectList_state fl">
								<span class="oks">已完成</span>
							</div>
							<div class="projectList_btn fl f-right" style="width:auto">
								
								<i class="iconfont icon-shangchuan1 " title="上传"></i>
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren task-list-box fl">
								<div class="task-list">
									<span>任务1：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务2：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务3：<i class="iconfont icon-yiwen"></i></span>
								</div>
							</div>
							<div class="projectList_state fl">
								<span class="delets">已被取消资格</span>
							</div>
							<div class="projectList_btn fl f-right" >
								<i class="null-1">--</i>
								
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren task-list-box fl">
								<div class="task-list">
									<span>任务1：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务2：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务3：<i class="iconfont icon-yiwen"></i></span>
								</div>
							</div>
							<div class="projectList_state fl">
								<span class="oks">已完成</span>
							</div>
							<div class="projectList_btn fl f-right" >
								
								<i class="iconfont icon-chakan" title="查看"></i>
								
								
							</div>
						</li>
						<li class="clearfix ing"><!-- 进行中 ing -->
							<div class="projectList_img fl">
								<img src="/static/img/temp.jpg" />
							</div>
							<div class="projectList_txt fl" style="">
								<h1>基于自然语言理解的智能语义分析</h1>
								<p>
									<u>技能开发</u>
									<u>技能开发</u>
								</p>
							
							</div>
							<div class="projectList_ren task-list-box fl">
								<div class="task-list">
									<span>任务1：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务2：<i class="iconfont icon-wancheng1"></i></span>
									<span>任务3：<i class="iconfont icon-yiwen"></i></span>
								</div>
							</div>
							<div class="projectList_state fl">
								<span class="datas">进行中</span>
							</div>
							<div class="projectList_btn fl f-right" >
								<i class="iconfont icon-bianji" title="修改"></i>
								
								
							</div>
						</li>
						
				</ul>
				
					<div class="page" id="page"></div>


 <!--pop - content--> <!--这里是弹窗 content 容器中的dom结构，在open的方法引用-->
		
						<div id="pop-1" style="display: none;" class=" zsFrom clearfix">
							<div class="layui-form" action="">
							
								
								<div class="layui-form-item" style="">
											    <label class="layui-form-label"><span>提交报告</span><i>*</i></label>
											    <div class="layui-input-block" style="width:366px">
											      <select name="city" lay-verify="required">
											        <option value="">请选择课程类别</option>
											        <option value="0">北京</option>
											        <option value="1">上海</option>
											        <option value="2">广州</option>
											        <option value="3">深圳</option>
											        <option value="4">杭州</option>
											      </select>
											      <a href="" class="fl"><span class="tail  brand-color">上传报告</span></a>
											      <ul class="prop-list clearfix fl" >
											      	<li class="brand-color" ><i class="iconfont icon-fujian"></i>项目1报告详细</li>
											      </ul>
											    </div>
								</div>
								
								 <div class="layui-form-item c" style="width:100%">
									 <div class="but-2-box c">
								      	<button class="grayBtn-o">取消</button>
									     <!-- 表单内容验证成功 移出 disable 点亮确定按钮 -->
									    <button class="blueBtn disable "  style="margin-left:20px; ">确定</button>
								     </div>
								</div>
							</div>
							
					   </div>
	   
	   					
						<div id="pop-2" style="display: none;" class=" zsFrom clearfix">
							<div class="texts">
								<p>任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务</p>
								<img src="/static/img/code-shili.png" alt="" />
								<p>任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务任务</p>
							</div>
						</div>

					
				</div><!-- end of mainCont -->
</template>

<script>
export default {
  mounted() {
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

        //弹窗默认配置
        layer.config({
          type: 1,
          anim: 0, //默认动画风格
          skin: "xuanyuan-pop",
          area: ["600px", "235px"] //  - - 小弹窗
        });

        //弹窗激活-2
        layer.open({
          title: "提交文件",
          content: $("#pop-2"), //引入内容
          area: ["600px", "506px"],
          end: function() {
            $("#pop-2").hide();
          }
        });

        /*//弹窗激活-1
					layer.open({
						 title:'提交文件'
						,content:$('#pop-1') //引入内容
						
					})*/
      });
    }, 500);
  }
};
</script>

<style scoped>
@import url("/static/css/pupil/pupil.css");
@import url("/static/css/enterprise/enterprise.css");
</style>
