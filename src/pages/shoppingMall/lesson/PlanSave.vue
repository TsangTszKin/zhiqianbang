<template>
<div class="mainCont ">
					<div class="create-project zsFrom lessonNew">	
						<form class="layui-form clearfix" action="">
							
							<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>课程图片</span><i>*</i></label>
							    <div class="layui-input-block clearfix img-box">
							    	
							    	<dl class="addimg fl">
							     		<dt><i class="iconfont icon-xinzeng"></i></dt>
							     	</dl>
								     	<!--图片上传后的结构-->
								      <div class="logo-img clearfix fl" style="display: none;">
								      	<div class="fl">
								    		<img src="/static/img/360.png" alt="" />
								    	</div>
								      </div>
							     	<p class="fl">建议上传尺寸为562*316，文件不大于200KB的JPG、BMP、GIF</p>
							   </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>计划名称</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name="" required="" lay-verify="required" placeholder="请填写课程计划名称，字数不超过20个字符" autocomplete="off" class="layui-input">
							   </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>职业类型</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	<select name="" lay-filter="">
								        <option value="">请选择职业类型</option>
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
							    <label class="layui-form-label"><span>实训课时</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name=""  required  lay-verify="required" placeholder="请填写学习该实训总时长" 
							      	autocomplete="off" class="layui-input ">
							      	<span class="tail">分钟</span>
							    </div>
						  	</div>
						  	
						  	<div class="layui-form-item">
								<div class="fillTag">
							    	<span title="计算机硬件">
							    		计算机硬件
							    		<a href="#" title="删除标签"><i class="iconfont icon-quxiao"></i></a>
							    	</span>
							    	<span title="网络游戏">
							    		网络游戏
							    		<a href="#" title="删除标签"><i class="iconfont icon-quxiao"></i></a>
							    	</span>
							    	<span title="交互">
							    		交互
							    		<a href="#" title="删除标签"><i class="iconfont icon-quxiao"></i></a>
							    	</span>
							    </div>
							    <label class="layui-form-label"><span>关键字</span><i>*</i></label>
							    <div class="layui-input-block">
							        <input type="text" name=""  placeholder="请填写关键字，按回车添加" autocomplete="off" class="layui-input">
							    	<span class="tail">最多可添加5个关键字</span>
							    </div>
							</div>
							
							<div class="layui-form-item">
							    <label class="layui-form-label"><span>价格</span><i>*</i></label>
							    <div class="layui-input-block"> 
							    	 <input type="text" name="text"  required  lay-verify="required" placeholder="请填写数字，0为免费" 
							      	autocomplete="off" class="layui-input ">
							      	<span class="tail">元</span>
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