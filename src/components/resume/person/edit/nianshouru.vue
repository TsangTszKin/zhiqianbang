<template>
  <dl class="data-item clearfix" id="tr-1">
												<dt>
													<ul class="clearfix">
														<li class="li-1 icon-0"></li>
														<li class="li-2">目前年收入</li>
														<!--添加 active 高亮-->
														<li class="li-3 active"><i class="iconfont icon-bianji" title="编辑"></i>编辑年收入</li>
													</ul>
												</dt>
												<dd>
													
													<span class="default-content" style="display: block;">
														<i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！
													</span>
													
													<div class="exist-content" style="display: block;">
															<ul class="item-list none-hover">
																<li>
																	<span>目前年收入：</span>
																	<ol>
																		<li>8万元/年</li>
																	</ol>
																</li>
															</ul>
													</div>
													
													<div class="compile-content ">
														<div class="zsFrom my-resume-form" >
												
																<div class="layui-form clearfix" action="">
										  						
															  	<div class="layui-form-item">
															  		
															  		<!--essential 添加 必填红色 *-->
																    <label class="layui-form-label "><span>目前年收入</span><i>*</i></label>
																    <div class="layui-input-block"> 
																    	 <input type="text" name="name"  required  lay-verify="required" placeholder="" 
																      	autocomplete="off" class="layui-input ">
											
																		<!-- 两种验证错误提示 -->
																		<!--1、layui 内置的验证规则，使用内置提交时的样式提示
																			例如 ‘  required  lay-verify="required" ’ 
																			required：注册浏览器所规定的必填字段 
																			lay-verify：注册form模块需要验证的类型 -->
																		<!-- 2、 添加 form-hint 自行添加红色边框提示
											      									 并使右侧 form-hint-content 红色文字提示 display:block
											      								
											      							-->
											 								
																	 	<span class="add-text">万元</span>
																    </div>
																    
																    <div class="form-hint-content c fl " style="display: none">
																    	<i class="iconfont icon-quxiao1"></i>
																      	<div class="contents fl">
																      		用户名称格式不正确,请重新输入
																      	</div>
																    </div>
															  	</div> 
															 
																 <div class="buttons clearfix fl">
																 	<button class="grayBtn-o">取消</button>
																 	<button class="blueBtn" style="float:right">保存</button>
																 </div>
															  	
															  	
															</div><!-- end of layui-form -->
											</div>
										
													</div>
													
												</dd>
											</dl>
</template>
<script>
export default {
};
</script>
<style scoped>
</style>
