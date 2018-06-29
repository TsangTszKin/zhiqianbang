<template>
<div class="mainCont ">
					<div class="zsFrom">
						<div class="layui-form clearfix">
							<div class="layui-form-item">
							    <label class="layui-form-label essential"><span>视频名称</span><i>*</i></label>
							    <div class="layui-input-block">
							      <input type="text" name="" placeholder="" autocomplete="off" class="layui-input form-hint">
							    </div>
							    <div class="form-hint-content c fl " style="display: block">
							    	<i class="iconfont icon-quxiao1 fl"></i>
							      	<div class="contents fl">
							      		视频名称格式不正确，请重新输入
							      	</div>
							    </div>
							</div>
							<div class="layui-form-item">
								<label class="layui-form-label "><span>请选择所属类型</span><i>*</i></label>
								<div class="layui-input-block">
									<select name="" lay-filter="">
								        <option value="">类型</option>
								        <option value="0">上市</option>
								        <option value="1">A轮</option>
								    </select>
								</div>
							</div>
							<div class="layui-form-item">
								<label class="layui-form-label essential"><span>选用文件</span><i>*</i></label>
								<div class="layui-input-block add-video">
									<p class="clearfix">
										<button class="blueBtn fl">选择</button>
										<span class="fl s-1">说明：只可上传一份文件，格式为FLV、SWF、ASF、AVI、MPG、3GP、MP3、MP4、WAV、RM、RMVB、WMV</span>
									</p>
									<ul>
										<li><i class="iconfont icon-fujian"></i>MySQL数据库.FLV <span>预览</span></li>
									</ul>
								</div>
							</div>
							<div class="fl btn-arr clearfix" style="padding-left:290px;width:100%">
								<button class="grayBtn-o b-1 fl" >返回</button>
								<button class="blueBtn fl">提交</button>
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
    layui.use(["form", "laypage", "layer", "element"], function() {
      var form = layui.form;
      var laypage = layui.laypage,
        layer = layui.layer;
      var element = layui.element;
    });
  }
};
</script>

<style scoped>
@import url("/static/css/youshang/youshang.css");
@import url("/static/css/enterprise/enterprise.css");
</style>
