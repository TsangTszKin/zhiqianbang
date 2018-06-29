<template>
    <div class="mrTable">
        <table class="table">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th class="sort">年龄
                        <div class="tableSort">
                            <i class="sortUp"></i>
                            <!-- sortUp_on -->
                            <i class="sortDown"></i>
                            <!-- sortDown_on --></div>
                    </th>
                    <th>性别</th>
                    <th>学历</th>
                    <th>来源</th>
                    <th>职能</th>
                    <th class="sortSelect">放入时间
                        <div class="tableSort">
                            <i class="sortUp"></i>
                            <!-- sortUp_on --></div>
                        <div class="tableSelect">
                            <span class="on">全部</span>
                            <span>今天</span>
                            <span>最近三天</span>
                            <span>最近一周</span>
                            <span>最近两周</span></div>
                    </th>
                    <th class="sortSelect">状态
                        <div class="tableSort">
                            <i class="sortUp"></i>
                            <!-- sortUp_on --></div>
                        <div class="tableSelect">
                            <span class="on">全部</span>
                            <span>候选</span>
                            <span>面试邀请</span>
                            <span>不合适</span></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
									<td><a class="linkTxt" href="#">廖伟龙</a></td>
									<td>30</td>
									<td>男</td>
									<td>本科</td>
									<td>人才库</td>
									<td>软件测试工程师</td>
									<td>2017/10/11</td>
									<td>
										<span class="orangeTxt">面试邀请</span>
									</td>
								</tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
</style>
<script>
</script>
