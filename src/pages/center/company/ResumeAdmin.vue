<template>
<div class="mainCont ">
  <div class="mrTop_tab">
      <a href="javascript:void(0);"  :class="{on: tab == 1}" @click="changeShowTab(1)">应聘简历</a>
			<a href="javascript:void(0);" :class="{on: tab == 2}" @click="changeShowTab(2)">推荐简历</a>
			<a href="javascript:void(0);" :class="{on: tab == 3}" @click="changeShowTab(3)">主动下载</a>
  </div>
  <div class="mrTop_searchBar">
      <ul class="layui-form zsFrom clearfix" action="">
          <li>
              <div class="layui-input-inline">
                  <select name="positionId" lay-filter="positionId">
                      <option value="">请选择职位</option>
                      <option :value="item.id" v-for="(item, index) in jobList">{{item.name}}</option>
                    </select>
              </div>
          </li>
          <li class="clearfix">
              <div class="layui-input-inline fl">
                  <select name="highestEducation" lay-filter="highestEducation">
                      <option value="">请选择学历</option>
                      <option value="0">本科</option>
                      <option value="1">专科</option>
                    </select>
              </div>
              <div class="layui-fillCheck fl">
                  <input id="" type="checkbox" name="educationAbove" lay-filter="educationAbove" lay-skin="primary" title="及以上"></div>
          </li>
          <li>
              <div class="searchBar_ipt">
                  <input type="text" placeholder="请输入搜索内容" v-model="queryParams.keywords">
                  <a href="javascript:void(0)" title="清空" @click="queryParams.keywords = ''">
                      <i class="iconfont icon-quxiao"></i>
                  </a>
                  <button @click="getDataList()">
                      <i class="iconfont icon-chaxun" ></i>搜索</button>
              </div>
          </li>
          <li>
              <div class="searchBar_icon">
                  <a href="javascript:void(0)" title="刷新" class="iconBtn" @click="getDataList()">
                      <i class="iconfont icon-shuaxin"></i>
                  </a>
              </div>
          </li>
      </ul>
      <!-- end of layui-form --></div>
  <div class="mrTop_sort" v-show="tab == 2">
      <ul class="layui-form zsFrom clearfix" action="">
          <li>
              <a href="javascript:void(0)">更新时间</a></li>
          <li class="clearfix">
              <div class="layui-fillCheck fl">
                  <input id="" type="checkbox" name="isRead" lay-filter="isRead" lay-skin="primary" title="过滤已阅"></div>
          </li>
      </ul>
  </div>
    <applyList :queryParams="queryParams" :pageNum="pageNum" ref="applyList" v-show="tab == 1"></applyList>
    <recommendList :queryParams="queryParams" :pageNum="pageNum" ref="recommendList" v-show="tab == 2"></recommendList>
    <downloadedList :queryParams="queryParams" :pageNum="pageNum" ref="downloadedList" v-show="tab == 3"></downloadedList>
      
    <no-data v-show="count == 0"></no-data>
    <div class="page clearfix">
        <pagination ref="pagination" @current-page="updateCurrentPage"></pagination>
    </div>
</div>
</template>

<script>
import applyList from "@/components/resume/company/admin/applyList";
import recommendList from "@/components/resume/company/admin/recommendList";
import downloadedList from "@/components/resume/company/admin/downloadedList";
import pagination from "@/components/Pagination";
import noData from "@/components/NoData";
import bus from "@/utils/bus";
import jobService from "@/api/jobService";
export default {
  components: {
    pagination,
    noData,
    applyList,
    recommendList,
    downloadedList
  },
  data() {
    return {
      //分页数据开始
      pageNum: 1,
      pageSize: 10,
      count: 0,
      //分页数据开始
      tab: 1,
      //查询参数
      queryParams: {
        positionId: null,
        highestEducation: null,
        educationAbove: "N",
        keywords: "",
        isRead: null
      },
      //初始化查询参数
      jobList: []
    };
  },
  methods: {
    //分页方法开始
    updateCurrentPage: function(curr) {
      this.pageNum = curr;
    },
    updateCount: function(count) {
      this.$refs.pagination.updateCount(count);
    },
    //分页方法结束
    changeShowTab(tab) {
      this.tab = tab;
      switch (this.tab) {
        case 1:
          this.$refs.applyList.getList();
          break;
        case 2:
          this.$refs.recommendList.getList();
          break;
        case 3:
          this.$refs.downloadedList.getList();
          break;
        default:
          break;
      }
    },
    getDataList() {
      switch (this.tab) {
        case 1:
          this.$refs.applyList.getList();
          break;
        case 2:
          this.$refs.recommendList.getList();
          break;
        case 3:
          this.$refs.downloadedList.getList();
          break;
        default:
          break;
      }
    },
    layuiListener() {
      let self = this;
      layui.form.on("select(positionId)", function(data) {
        if (!data.value) {
          self.queryParams.positionId = null;
        } else {
          self.queryParams.positionId = data.value;
        }
        self.getDataList();
      });
      layui.form.on("select(highestEducation)", function(data) {
        if (!data.value) {
          self.queryParams.highestEducation = null;
        } else {
          self.queryParams.highestEducation = data.value;
        }
        self.getDataList();
      });
      layui.form.on("checkbox(educationAbove)", function(data) {
        if (data.elem.checked) {
          self.queryParams.educationAbove = "Y";
        } else {
          self.queryParams.educationAbove = "N";
        }
        self.getDataList();
      });
      layui.form.on("checkbox(isRead)", function(data) {
        if (data.elem.checked) {
          self.queryParams.educationAbove = "Y";
        } else {
          self.queryParams.educationAbove = null;
        }
        self.getDataList();
      });
    },
    getMyCompanyJobList() {
      jobService.getMyCompanyJobList(1, 100, "open", {}).then(res => {
        if (res.data.code != 0) {
          this.$pop.warn(res.data.message);
          return;
        }
        this.jobList = res.data.object.data.resultList;
        this.$layuiRender.form();
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$layuiRender.form();
    }, 200);
    bus.$on("update.page.count", data => {
      this.count = data;
    });
    this.layuiListener();
    this.getMyCompanyJobList();
  },
  watch: {
    count(value) {
      this.updateCount(value);
    },
    pageNum(value) {
      switch (this.tab) {
        case 1:
          this.$refs.applyList.getList();
          break;
        case 2:
          this.$refs.recommendList.getList();
          break;
        case 3:
          this.$refs.downloadedList.getList();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
@import url('/static/css/enterprise/enterprise.css');
</style>
