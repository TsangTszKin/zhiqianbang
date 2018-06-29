<template>
 <div class="basic" style="padding-top:100px;margin-top:-100px;" id="tr-0">
										
										<!--存在信息时显示-->
										<dl class="basic-information clearfix" style="display: block;">
											<dt>
												<div>
													<img src="/static/img/pupil/xm.png" alt="" />
												</div>
											</dt>
											<dd class="d-1">
												<p class="p-1">井柏然</p>
												<ul class="clearfix">
													<li>现居住广州-天河区<span>|</span></li>
													<li>2 年工作经验<span>|</span></li>
													<li>男<span>|</span></li>
													<li>20 岁<span>|</span></li>
													<li>观望有好机会会考虑<span>|</span></li>
												</ul>
												<p class="p-2">
													<span class="s-1"><i class="iconfont icon-youxiang"></i>1815692368@qq.com</span>
													<span><i class="iconfont icon-shouji"></i>15678452349</span>
												</p>
											</dd>
											<dd class="d-2">
												<span>
													<i class="iconfont icon-bianji" title="编辑"></i>
													编辑信息
												</span>
											</dd>
										</dl>
										
										
										<!--点击编辑时显示-->
										<div class="zsFrom my-resume-form" style="display: block;">
											
											<div class="layui-form clearfix" action="">
						  						<div class="layui-form-item user-img">
						  							<!--essential 添加 必填红色 *-->
												    <label class="layui-form-label essential"><span>头像</span><i>*</i></label>
												    <div class="layui-input-block"> 
												    		<div>
																<img src="/static/img/pupil/xm.png" alt="" />
																<a href="">修改</a>
															</div>
															
												    </div>
						  						</div>
											  	<div class="layui-form-item">
											  		
											  		<!--essential 添加 必填红色 *-->
												    <label class="layui-form-label essential"><span>姓名</span><i>*</i></label>
												    <div class="layui-input-block"> 
												    	 <input type="text" name="name"  required  lay-verify="required" placeholder="请输入姓名" 
												      	autocomplete="off" class="layui-input ">
							
														<!-- 两种验证错误提示 -->
														<!--1、layui 内置的验证规则，使用内置提交时的样式提示
															例如 ‘  required  lay-verify="required" ’ 
															required：注册浏览器所规定的必填字段 
															lay-verify：注册form模块需要验证的类型 -->
														<!-- 2、 添加 form-hint 自行添加红色边框提示
							      									 并使右侧 form-hint-content 红色文字提示 display:block
							      								
							      							-->
							 
							
												    </div>
												    
												    <div class="form-hint-content c fl " style="display: none">
												    	<i class="iconfont icon-quxiao1"></i>
												      	<div class="contents fl">
												      		用户名称格式不正确,请重新输入
												      	</div>
												    </div>
											  	</div>
											  	
											  	<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>性别</span><i>*</i></label>
												    <div class="layui-input-block">
														<ul class="xy-radio">
													        <input type="radio" name="sex" value="nan" title="男">
															<input type="radio" name="sex" value="nv" title="女" checked>
														</ul>
												    </div>
												</div>
												
											  	<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>出生日期</span><i>*</i></label>
												    <div class="layui-input-block layuiDate">
														<input type="text" class="layui-input" id="birth" placeholder="请选择出生日期">
														<i class="iconfont icon-paibanbiao"></i>
												    </div>
												</div>
												
												<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>开始工作年份</span><i>*</i></label>
												    <div class="layui-input-block layuiDate">
														<input type="text" class="layui-input" id="job" placeholder="请选择开始工作年份">
														<i class="iconfont icon-paibanbiao"></i>
												    </div>
												</div>
												
												
											  	
											  	<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>手机号</span><i>*</i></label>
												    <div class="layui-input-block">
												      <input type="text" name="tel"  placeholder="请输入正确手机号" autocomplete="off" class="layui-input form-hint" maxlength="11">
												    </div>
												    <div class="form-hint-content c fl " style="display: block">
												    	<i class="iconfont icon-quxiao1 fl"></i>
												      	<div class="contents fl">
												      		用户手机号格式不正确,请重新输入
												      	</div>
												    </div>
												</div>
												
												<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>居住地</span><i>*</i></label>
												    <div class="layui-input-block layuiChoose"> 
												    	 <input type="text" name="name"  required  lay-verify="required" placeholder="请选择现在居住地" 
												      	autocomplete="off" class="layui-input ">
												      	<i class="iconfont icon-dianjixuanze"></i>
												    </div>
											  	</div>
											  	
											  	<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>邮箱</span><i>*</i></label>
												    <div class="layui-input-block">
												      <input type="text" name="tel"  placeholder="" autocomplete="off" class="layui-input" maxlength="11">
												    </div>
												    <div class="form-hint-content c fl " style="display: none">
												    	<i class="iconfont icon-quxiao1 fl"></i>
												      	<div class="contents fl">
												      		不正确,请重新输入
												      	</div>
												    </div>
												</div>
												
												<div class="layui-form-item">
												    <label class="layui-form-label essential"><span>求职状态</span><i>*</i></label>
												    <div class="layui-input-block">
												      <select name="city-1" > <!-- 添加 lay-search="" 启用关键字搜索选项 -->
												        <option value="">请选择课程类别</option>
												        <option value="0">北京</option>
												        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
												        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
												        <option value="3">深圳</option>
												        <option value="4">杭州</option>  
												      </select>
												      
												    </div>
												 </div>
												 
												 <!--点击显示更多板块-->
												 <div class="more fl">
												 	
												 	<!--展开切换 为 '更多收起'  icon = 'fa-angle-up' -->
												 	<a href="" class="fr">更多展开 <i class="fa fa-angle-down"></i></a>
												 								
												 	<!--隐藏的内容-->
												 	<div class="more-content" style="display: block;">
												 			<div class="layui-form-item">
															    <label class="layui-form-label "><span>户口/国籍</span><i>*</i></label>
															    <div class="layui-input-block layuiChoose"> 
															    	 <input type="text" name="name"  required  lay-verify="required" placeholder="请选择现在居住地" 
															      	autocomplete="off" class="layui-input ">
															      	<i class="iconfont icon-dianjixuanze"></i>
															    </div>
														  	</div>
														  	
														  	<div class="layui-form-item">
															    <label class="layui-form-label "><span>婚姻状态</span><i>*</i></label>
															    <div class="layui-input-block">
															      <select name="city-1" > <!-- 添加 lay-search="" 启用关键字搜索选项 -->
															        <option value="">请选择课程类别</option>
															        <option value="0">北京</option>
															        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
															        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
															        <option value="3">深圳</option>
															        <option value="4">杭州</option>  
															      </select>
															      
															    </div>
															 </div>
															 
															 <div class="layui-form-item combination">
															    <label class="layui-form-label "><span>证件号</span><i>*</i></label>
															    <div class="layui-input-block">
															      <select name="city-1" > <!-- 添加 lay-search="" 启用关键字搜索选项 -->
															        <option value="">请选择课程类别</option>
															        <option value="0">北京</option>
															        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
															        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
															        <option value="3">深圳</option>
															        <option value="4">杭州</option>  
															      </select>
																	<input type="text" name="tel"  placeholder="" autocomplete="off" class="layui-input layui-input-02" maxlength="11">														      
															    </div>
															 </div>
															 
															 <div class="layui-form-item">
															    <label class="layui-form-label "><span>政治面貌</span><i>*</i></label>
															    <div class="layui-input-block">
															      <select name="city-1" > <!-- 添加 lay-search="" 启用关键字搜索选项 -->
															        <option value="">请选择课程类别</option>
															        <option value="0">北京</option>
															        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
															        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
															        <option value="3">深圳</option>
															        <option value="4">杭州</option>  
															      </select>
															      
															    </div>
															 </div>
															 
															  <div class="layui-form-item combination">
															    <label class="layui-form-label "><span>其他联系方式</span><i>*</i></label>
															    <div class="layui-input-block">
															      <select name="city-1" > <!-- 添加 lay-search="" 启用关键字搜索选项 -->
															        <option value="">请选择课程类别</option>
															        <option value="0">北京</option>
															        <option value="1" selected="">上海</option> <!-- selected 默认选中 -->
															        <option value="2" disabled="">广州</option> <!-- disabled 选项禁用  -->
															        <option value="3">深圳</option>
															        <option value="4">杭州</option>  
															      </select>
																	<input type="text" name="tel"  placeholder="" autocomplete="off" class="layui-input layui-input-02" maxlength="11">														      
															    </div>
															 </div>
															 
															 <div class="layui-form-item stature">
															    <label class="layui-form-label "><span>身高</span><i>*</i></label>
															    <div class="layui-input-block">
															      <input type="text" name="tel"  placeholder="" autocomplete="off" class="layui-input" maxlength="11">
															      <span class="add-text">cm</span>
															    </div>
															    <div class="form-hint-content c fl " style="display: none">
															    	<i class="iconfont icon-quxiao1 fl"></i>
															      	<div class="contents fl">
															      		用户手机号格式不正确,请重新输入
															      	</div>
															    </div>
															</div>
															
															<div class="layui-form-item">
															    <label class="layui-form-label "><span>家庭住址</span><i>*</i></label>
															    <div class="layui-input-block">
															      <input type="text" name=""  placeholder=""  class="layui-input" >
															    </div>
															    <div class="form-hint-content c fl " style="display: none">
															    	<i class="iconfont icon-quxiao1 fl"></i>
															      	<div class="contents fl">
															      		不正确,请重新输入
															      	</div>
															    </div>
															</div>
															
															<div class="layui-form-item">
															    <label class="layui-form-label "><span>邮箱</span><i>*</i></label>
															    <div class="layui-input-block">
															      <input type="text" name=""  placeholder=""  class="layui-input" >
															    </div>
															    <div class="form-hint-content c fl " style="display: none">
															    	<i class="iconfont icon-quxiao1 fl"></i>
															      	<div class="contents fl">
															      		不正确,请重新输入
															      	</div>
															    </div>
															</div>
															
															<div class="layui-form-item">
															    <label class="layui-form-label "><span>个人主页</span><i>*</i></label>
															    <div class="layui-input-block">
															      <input type="text" name=""  placeholder=""  class="layui-input" >
															    </div>
															    <div class="form-hint-content c fl " style="display: none">
															    	<i class="iconfont icon-quxiao1 fl"></i>
															      	<div class="contents fl">
															      		不正确,请重新输入
															      	</div>
															    </div>
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
</template>
<script>
export default {
};
</script>
<style scoped>
</style>
