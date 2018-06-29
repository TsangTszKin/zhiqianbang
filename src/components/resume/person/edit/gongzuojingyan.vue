<template>
  <dl class="data-item clearfix"  id="tr-3">
												<dt>
													<ul class="clearfix">
														<li class="li-1 icon-2"></li>
														<li class="li-2">工作经验</li>
														<li class="li-3 active"><i class="iconfont icon-xinzeng"></i>新增经验</li>
													</ul>
												</dt>
												<dd>
													<span class="default-content" style="display: none;">
														<i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！
													</span>
													
													<!--已有此项内容-显示容器-->
													<div class="exist-content" style="display: none;"> 
														
														<div class="experience-list">
															<ul class="item-list">
																<li class="bolds">
																	<span class="s-1">2016.10-2017.10</span>
																	<span class="s-2">轩辕网络科技股份有限公司</span>
																	<span class="s-3">软件工程师</span>
																	<p class="handle-btn fr">
																		<i class="iconfont icon-bianji" title="编辑"></i>
																		<i class="iconfont icon-shanchu" title="删除"></i>
																	</p>
																</li>
																<li class="li-2">
																	<span>计算机软件/民营公司/开发部</span>
																	<ol>
																		<li></li>
																	</ol>
																</li>
																<li class="li-3">
																	<span>工作描述：</span>
																	<ol>
																		<li>具体负责公司受控文件的编号、盖章、编目、记录、复印、分发、旧版回收、分类归档，以确保文件的正确使用 ；负责协助各部门文员进行文件和资料的管理工作 ；负责监督各部门文件和资料的管理和执行状况等。</li>
																	</ol>	
																</li>
																
															</ul>
															
															<ul class="item-list">
																<li class="bolds">
																	<span class="s-1">2016.10-2017.10</span>
																	<span class="s-2">轩辕网络科技股份有限公司</span>
																	<span class="s-3">软件工程师</span>
																	<p class="handle-btn fr">
																		<i class="iconfont icon-bianji" title="编辑"></i>
																		<i class="iconfont icon-shanchu" title="删除"></i>
																	</p>
																</li>
																<li class="li-2">
																	<span>计算机软件/民营公司/开发部</span>
																	<ol>
																		<li></li>
																	</ol>
																</li>
																<li class="li-3">
																	<span>工作描述：</span>
																	<ol>
																		<li>具体负责公司受控文件的编号、盖章、编目、记录、复印、分发、旧版回收、分类归档，以确保文件的正确使用 ；负责协助各部门文员进行文件和资料的管理工作 ；负责监督各部门文件和资料的管理和执行状况等。</li>
																	</ol>	
																</li>
																
															</ul>
														</div>
													</div>
													
													<div class="compile-content">
															<div class="zsFrom my-resume-form">
																	<div class="layui-form clearfix" action="">
																	  	
																	  	<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>时间</span><i>*</i></label>
																		    <div class="layui-input-block layuiDate">
																				<input type="text" class="layui-input" id="educate" placeholder="请选择开始工作时间和截至时间" lay-key="1">
																				<i class="iconfont icon-paibanbiao"></i>
																		    </div>
																	  	</div>
																	  	
																	  	<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>公司</span><i>*</i></label>
																		    <div class="layui-input-block">
																		      <input type="text" name="" placeholder="请填写公司名称" autocomplete="off" class="layui-input">
																		    </div>
																		</div>
																		
																		<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>公司性质</span><i>*</i></label>
																		    <div class="layui-input-block"> 
																		    	<select name="" lay-filter="">
																			        <option value="">请选择公司性质</option>
																			        <option value="0">上市</option>
																			        <option value="1">A轮</option>
																			    </select>
																			    
																		    </div>
																	  	</div>
																		
																		<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>职能</span><i>*</i></label>
																		    <div class="layui-input-block layuiChoose">
																		    	 <input type="text" name="address" required="" lay-verify="required" placeholder="请填写/选择职能" autocomplete="off" class="layui-input">
																		      	<i class="iconfont icon-dianjixuanze"></i>
																		    </div>
																	  	</div>
																	  	
																	  	<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>行业</span><i>*</i></label>
																		    <div class="layui-input-block layuiChoose">
																		    	 <input type="text" name="address" required="" lay-verify="required" placeholder="请填写/选择行业" autocomplete="off" class="layui-input">
																		      	<i class="iconfont icon-dianjixuanze"></i>
																		    </div>
																	  	</div>
																	  	
																	  	<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>职位</span><i>*</i></label>
																		    <div class="layui-input-block">
																		      <input type="text" name="" placeholder="请填写职位" autocomplete="off" class="layui-input">
																		    </div>
																		</div>
																		
																		<div class="layui-form-item">
																		    <label class="layui-form-label essential"><span>部门</span><i>*</i></label>
																		    <div class="layui-input-block">
																		      <input type="text" name="" placeholder="请填写部门" autocomplete="off" class="layui-input">
																		    </div>
																		</div>
																		
																		<div class="layui-form-item layui-form-text">
																		    <label class="layui-form-label essential"><span>工作描述</span><i>*</i></label>
																		    <div class="layui-input-block">
																		      <textarea name="desc" placeholder="请详细填写你的职责范围、工作任务以及取得的成绩等" class="layui-textarea" style="height:190px;"></textarea>
																		      <p class="font-qty"><i>0</i>/<i>200</i></p>
																		    </div>
																		</div>
																		<div class="buttons clearfix fl">
																		 	<button class="grayBtn-o">取消</button>
																		 	<button class="blueBtn" style="float:right">保存</button>
																		 </div>
																	  	
																	</div>
															</div>
													</div>
													
												</dd>
											</dl>
</template>
<script>
</script>
<style scoped>
@import url("/static/css/pupil/fillResume.css");
@import url("/static/css/formCommon.css");
@import url("/static/css/portal/success.css");
@import url("/static/css/pupil/resume-2.1.css");
</style>

