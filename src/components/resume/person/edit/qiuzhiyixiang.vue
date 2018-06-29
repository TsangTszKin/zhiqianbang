<template>
  <dl class="data-item clearfix" id="tr-2">
												<dt>
													<ul class="clearfix">
														<li class="li-1 icon-1"></li>
														<li class="li-2">求职意向</li>
														<li class="li-3 "><i class="iconfont icon-bianji" title="编辑"></i>编辑意向</li>
													</ul>
												</dt>
												<dd>
													<span class="default-content" style="display: none;">
														<i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！
													</span>
													
													<!--已有此项内容-显示容器-->
													<div class="exist-content" style="display: none;">
														
														<ul class="item-list none-hover">
															<li>
																<span>期望薪资：</span>
																<ol>
																	<li>8万元/年</li>
																</ol>
															</li>
															<li>
																<span>地点：</span>
																<ol>
																	<li>北京</li>
																	<li>上海</li>
																	<li>广州</li>
																	<li>深圳</li>
																</ol>
															</li>
															<li>
																<span>职能／职位：</span>
																<ol>
																	<li>前端开发</li>
																	<li>java工程师</li>
									
																</ol>
															</li>
															<li>
																<span>行业：</span>
																<ol>
																	<li>计算机软件</li>
																	<li>计算机硬件</li>
																</ol>
															</li>
															<li>
																<span>个人标签：</span>
																<ol>
																	<li>前端开发工程师</li>
																	<li>java开发工程师</li>
																	<li>大数据</li>
																	<li>php工程师</li>
																</ol>
															</li>
															<li>
																<span>自我评价：</span>
																<ol>
																	<li>本人性格开朗、稳重、有活力，待人热情、真诚；工作认真负责，积极主动，能吃苦耐劳，用于承受压力，勇于创新；有很强的组织能力和团队协作精神，具有较强的适应能力；纪律性强，工作积极配合；意志坚强，具有较强的无私奉献精神。</li>
																</ol>
															</li>
														</ul>
													</div>
											
													<div class="compile-content ">
														<div class="zsFrom my-resume-form" >
																<div class="layui-form clearfix" action="">
						  	
																  	<div class="layui-form-item">
																	    <label class="layui-form-label essential"><span>期望薪资</span><i>*</i></label>
																	    <div class="layui-input-block clearfix">
																			<div class="fillPay fl">
																				<select name="" lay-filter="">
																			        <option value=""></option>
																			        <option value="0">年薪</option>
																			        <option value="1">月薪</option>
																			    </select><div class="layui-unselect layui-form-select"><div class="layui-select-title"><input type="text" placeholder="请选择" value="" readonly="" class="layui-input layui-unselect"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><dd lay-value="" class="layui-select-tips">请选择</dd><dd lay-value="0" class="">年薪</dd><dd lay-value="1" class="">月薪</dd></dl></div>
																			</div>
																			<div class="fillPay_num fl" style="display: block;">
																				<select name="" lay-filter="">
																			        <option value="">请选择薪资情况</option>
																			        <option value="0">100w</option>
																			        <option value="1">50w</option>
																			    </select><div class="layui-unselect layui-form-select"><div class="layui-select-title"><input type="text" placeholder="请选择薪资情况" value="" readonly="" class="layui-input layui-unselect"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><dd lay-value="" class="layui-select-tips">请选择薪资情况</dd><dd lay-value="0" class="">100w</dd><dd lay-value="1" class="">50w</dd></dl></div>
																			</div>
																			<div class="fillPay_self fl" style="display: none;">
																				<input type="text" name="" placeholder="请填写薪资下限" autocomplete="off" class="layui-input">
																				<span> - </span>
																				<input type="text" name="" placeholder="请填写薪资上限" autocomplete="off" class="layui-input">
																			</div>
																			<span class="tail">元/年</span>
																			<a href="javascript:void(0)" class="tailPay">自定义薪资</a>
																	    </div>
																  	</div>
																  	
																  	<div class="layui-form-item">
																	    <label class="layui-form-label essential"><span>地点</span><i>*</i></label>
																	    <div class="layui-input-block layuiChoose">
																	    	 <input type="text" name="address" required="" lay-verify="required" placeholder="请填写/选择地点" autocomplete="off" class="layui-input">
																	      	<i class="iconfont icon-dianjixuanze"></i>
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
																	    <label class="layui-form-label essential"><span>职位</span><i>*</i></label>
																	    <div class="layui-input-block">
																	      <input type="text" name="" placeholder="请填写职位" autocomplete="off" class="layui-input">
																	    </div>
																	</div>
																	
																	<div class="layui-form-item">
																	    <label class="layui-form-label"><span>行业<i>*</i></span></label>
																	    <div class="layui-input-block layuiChoose">
																	    	 <input type="text" name="address" required="" lay-verify="required" placeholder="请填写/选择行业" autocomplete="off" class="layui-input">
																	      	<i class="iconfont icon-dianjixuanze"></i>
																	    </div>
																	</div>
																	
																	<div class="layui-form-item">
																	    <label class="layui-form-label essential"><span>个人标签</span><i>*</i></label>
																	    <div class="layui-input-block">
																	        <div class="clearfix">
																	        	<input type="text" name="" placeholder="请填写与职业、技能或行业相关的关键词" autocomplete="off" class="layui-input">
																	        </div>
																	    	<span class="tail" style="display: block;">限10个，每个词不超过12个中文或24个英文</span>
																	    </div>
																	</div>
																	
																	<div class="layui-form-item layui-form-text">
																	    <label class="layui-form-label"><span>自我评价</span><i>*</i></label>
																	    <div class="layui-input-block">
																	      <textarea name="desc" placeholder="请简单介绍自己，说明自己最大的优势，让企业看到你的闪光点" class="layui-textarea" style="height:190px;"></textarea>
																	      <p class="font-qty"><i>0</i>/<i>1000</i></p>
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
</style>
