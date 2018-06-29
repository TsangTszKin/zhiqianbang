<template>
    <!-- end of mrTop -->
    <div class="mr_resumes">
        <!-- 备注：每页固定推荐简历6份 -->
        <ul class="mr_resumesList">
            <li class="clearfix">
								<div class="mr_listImg fl">
									<a href="应聘人-简历信息-2.1.html"><img src="/static/img/iconMan.png"></a>
								</div>
								<div class="mr_listMess fl">
									<p>
										<a href="应聘人-简历信息-2.1.html">
											<span>男 </span>
											<span>30岁</span>
											<span>广州</span>
											<span>本科</span>
											<span>9年工作经验</span>
										</a>
									</p>
									<p>职位：Java开发工程师</p>
									<p>期望月薪：<b>8000-10000K</b></p>
									<p>英语水平：一般</p>
								</div>
								<div class="mr_listExperience fr">
									<p>
										<span>2015.08-至今（2年8个月）酷狗有限公司</span>
										<span>Java工程师</span>
									</p>
									<p>
										<span>2011.07-2015.08（4年1个月）UC有限公司</span>
										<span>Java工程师</span>
									</p>
									<p>
										<span>2008.07-2011.06（3年）DOME有限公司</span>
										<span>Java研发工程师</span>
									</p>
								</div>
								<div class="mr_listTime">更新时间：2018-02-09</div>
							</li>
        </ul>
    </div>
</template>
<style scoped>
</style>
<script>
import bus from "@/utils/bus";
import resumeService from "@/api/resumeService";
import SftpImg from "@/components/SftpImg";
export default {
  components: {
    SftpImg
  },
  props: ["pageNum", "queryParams"],
  data() {
    return {
      pageSize: 10,
      count: 0,
      dataList: []
    };
  },
  methods: {
    getList() {
      resumeService
        .getRecommendList(this.pageNum, this.pageSize, this.queryParams)
        .then(res => {
          if (res.data.code != 0) {
            this.$pop.warn(res.data.message);
            return;
          }
          this.count = res.data.object.count;
          //   this.count = 31;
          this.updateParentPageCount();
          this.dataList = res.data.object.resultList;
        });
    },
    updateParentPageCount() {
      bus.$emit("update.page.count", this.count);
    }
  },
  mounted() {},
  watch: {
    count() {
      this.updateParentPageCount();
    },
    pageNum(value) {
      this.getList();
    }
  }
};
</script>
