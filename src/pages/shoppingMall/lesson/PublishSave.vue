<template>
 <div class="mainCont ">
					<div class="create-project zsFrom classNew">	
						<form class="layui-form clearfix" action="">
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>课程名称</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name="" required="" lay-verify="required" placeholder="请输入课程名称，不超过20个字符" autocomplete="off" class="layui-input">
							   </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>所属计划</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	<select name="" lay-filter="">
								        <option value="">请选择所属计划</option>
								        <option value="0">UI设计师</option>
								        <option value="1">WEB前端开发工程师</option>
								        <option value="2">JAVA研发工程师</option>
								        <option value="3">全栈工程师</option>
								    </select>
								    
							    </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>课程难度</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	<select name="" lay-filter="">
								        <option value="">请选择课程难易程度</option>
								        <option value="0">简单</option>
								        <option value="1">容易</option>
								        <option value="2">一般</option>
								        <option value="3">困难</option>
								    </select>
								    
							    </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label"><span>课程时长</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name=""  required  lay-verify="required" placeholder="请填写学习该课程总时长" 
							      	autocomplete="off" class="layui-input ">
							      	<span class="tail">分钟</span>
							    </div>
						  	</div>
							
							<div class="layui-form-item">
							    <label class="layui-form-label"><span>课程排序</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name="text"  required  lay-verify="required" placeholder="请填写数字（如3），排序是指在课程计划完成顺序" 
							      	autocomplete="off" class="layui-input ">
							    </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label"><span>课程类型</span><i>*</i></label>
							    <div class="layui-input-block">
									<div class="xy-radio">
								        <input type="radio" name="lesson" value="" title="在线实训/实操/实验" checked>
										<input type="radio" name="lesson" value="" title="PPT">
										<input type="radio" name="lesson" value="" title="视频文件">
									</div>
							    </div>
							</div>
							
							<!-- 当选择ppt 时显示 -->
							<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>上传附件</span><i>*</i></label>
							    <div class="layui-input-block">
							    	
							    	
							    	<!-- 附件上传后的状态  -->
							    	<!--
							    		在button 添加 className    fillUpload_ok
							    		文案变成附件的title  如：  阿拉蕾的个人简历
							    	-->
							    	<button type="button" class="layui-btn layui-btn-primary fillUpload" id="upload">
							    		<i class="iconfont icon-fujian"></i>点击上传html文件
							    		<i class="iconfont icon-xuanzhong"></i>
							    	</button>
							    	<a href="#" title="预览" class="lessonReview">预览</a>
							    	<p class="fillUpload_tip">说明：只可上传一份，格式为PDF/PPT</p>
							    </div>
						 	</div>
						 	
						 	<!-- 当选择 视频 时显示 -->
							<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>上传附件</span><i>*</i></label>
							    <div class="layui-input-block">
							    	<button class="blueBtn">选择</button>
							    	<span class="lessonVideo_tip">说明：只可上传一份，格式为PDF/PPT</span>
							    </div>
							    
							    <!-- 上传后显示  -->
							    <div class="lessonVideo_upload">
							    	<span><i class="iconfont icon-fujian"></i>MySQL数据库.FLV</span>
							    	<a href="#" title="预览" class="lessonReview">预览</a>
							    </div>
						 	</div>
						  	
						  	<div class="layui-form-item layui-form-text">
							    <label class="layui-form-label"><span>概要</span><i>*</i></label>
							    <div class="layui-input-block">
							      <textarea name="desc" id="txtdemo1" placeholder="请输入50字以内的课程概述" class="layui-textarea" style="height:190px;"></textarea>
							      <p class="font-qty"><i>0</i>/<i>50</i></p>
							    </div>
							</div>
							
							<div class="layui-form-item layui-form-text">
							    <label class="layui-form-label"><span>描述</span><i>*</i></label>
							    <div class="layui-input-block">
							      <textarea name="desc" id="txtdemo2" placeholder="请输入2000字以内的课程详细介绍或完成步骤" class="layui-textarea" style="height:190px;"></textarea>
							      <p class="font-qty"><i>0</i>/<i>2000</i></p>
							    </div>
							</div>
						  	
						  	<div class="buttons clearfix fl" >
							 	<button class="grayBtn-o">取消</button>
							 	<button class="blueBtn disable" style="float:right">保存</button>
							</div>
						</form><!-- end of form -->
					</div>	
				</div><!-- end of mainCont -->
</template>

<script>
import Base from "@/pages/shoppingMall/Base";
export default {
  extends: Base,
  mounted() {
    setTimeout(() => {
      layui.use(["form", "element", "layedit"], function() {
        var form = layui.form;
        var element = layui.element;
        var layedit = layui.layedit;

        //富文本编辑器
        layedit.build("txtdemo1", {
          height: 188, //设置编辑器高度
          tool: [
            "strong", //加粗
            "italic", //斜体
            "underline", //下划线
            "del", //删除线
            "|", //分割线
            "left", //左对齐
            "center", //居中对齐
            "right", //右对齐
            "link", //超链接
            "unlink", //清除链接
            "face", //表情
            "image", //插入图片
            "help" //帮助
          ],
          uploadImage: { url: "/upload/", type: "post" } //设定图片上传接口
        });

        layedit.build("txtdemo2", {
          height: 188, //设置编辑器高度
          tool: [
            "strong", //加粗
            "italic", //斜体
            "underline", //下划线
            "del", //删除线
            "|", //分割线
            "left", //左对齐
            "center", //居中对齐
            "right", //右对齐
            "link", //超链接
            "unlink", //清除链接
            "face", //表情
            "image", //插入图片
            "help" //帮助
          ],
          uploadImage: { url: "/upload/", type: "post" } //设定图片上传接口
        });
      });
    }, 500);

    //表格下拉
    $(".sortSelect").click(function() {
      $(this)
        .children(".tableSelect")
        .show();
      $(this)
        .children(".tableSort")
        .find("i")
        .removeClass("sortUp")
        .addClass("sortDown");
    });
  }
};
</script>

<style scoped>
@import url("/static/css/youshang/youshang.css");
@import url("/static/css/enterprise/enterprise.css");
@import url("/static/css/pupil/pupil.css");
</style>
