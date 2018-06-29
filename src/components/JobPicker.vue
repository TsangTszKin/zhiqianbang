<template>
  <div class="pops" v-show="isShow">
				
			<div class="popsBuild yixiang" style="overflow:hidden;background:#fff;padding:0;display: block;width:1002px;height:591px;position:absolute;top:0;right:0;left:0;bottom:0;margin:auto">
				<div class="popsToper" style="padding:0">
					<div class="site-opt clearfix">
					<p class="fl">{{title}}<span>（最多选择<i>{{maxSelectCount}}</i>项）</span></p>
						<!-- <div class="checklist fl">
							<b v-for="item in selectedList_data">{{item.typeLabel}}<i class="fa fa-times" @click="remove(item)"></i></b>
						</div> -->
						<!-- <div class="tishi"><i class="iconfont icon-reminder_"></i>最多只能选择{{maxSelectCount}}项</div> -->
					</div>
				</div>
				<div class="popsClose">
					<button title="关闭" @click="close()"></button>
				</div>
        <ul class="user-checks clearfix">
					<li v-for="item in selectedList_data"><span>{{item.typeLabel}}</span><i @click="remove(item)">&times;</i></li>
				</ul>
				<div class="z-model-body clearfix" style="height:inherit;">
					<ul class="left-nav fl" style="width:340px;">
						<li v-for="item in menuList" :class="{active: item.active}" @click="getMainList(item.typeCode)">
							<span class="titles" >{{item.typeLabel}}</span>
							<i class="fa fa-angle-right fr"></i>
						</li>
					</ul>
					<div class="right-look fl" style="width:658px;height:365px;">
						<div class="datalist" style="padding-top:20px;">
							<dl>
                <dd class="clearfix">
                  <span v-for="(item, index) in mainList" @click="selectCity(index)" :class="{'active': item.active}">{{item.typeLabel}}</span>
                </dd>
						  </dl>
						
						</div>
						
					</div>
					
				</div>
 
        <div class="buts" id="buts">
							<button class="blueBtn" @click="submit()">确定</button>
							<button class="blueBtn-o" @click="close()">取消</button>
				</div>

			</div>
		
	</div>
</template>
<script>
import address from "../utils/address";
import jobService from "../api/jobService";
export default {
  props: {
    maxSelectCount: {
      type: Number,
      default: 1
    },
    selectedList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      menuList: [],
      mainList: [],
      selectedList_data: [],
      isShow: false
    };
  },
  watch: {
    selectedList(value) {
      this.selectedList_data = value;
    }
  },
  methods: {
    getMainList: function(typeCode) {
      sessionStorage.setItem("zhishu_JobPicker_typeCode", typeCode);
      jobService.getJobWantTypeList2(typeCode).then(res => {
        this.mainList = res.data.object;
        this.menuList.forEach(e => {
          if (typeCode === e.typeCode) {
            e.active = true;
          } else {
            e.active = false;
          }
        });
        for (let i = 0; i < this.mainList.length; i++) {
          for (let j = 0; j < this.selectedList_data.length; j++) {
            if (
              this.mainList[i].typeCode == this.selectedList_data[j].typeCode
            ) {
              this.mainList[i].active = true;
              break;
            } else {
              this.mainList[i].active = false;
            }
          }
        }
      });
    },
    selectCity: function(index) {
      if (this.selectedList_data.length >= this.maxSelectCount) {
        layui.layer.msg("最多只能选择" + this.maxSelectCount + "项");
        return;
      }
      for (let i = 0; i < this.selectedList_data.length; i++) {
        if (
          this.selectedList_data[i].typeCode === this.mainList[index].typeCode
        ) {
          return;
        }
      }
      this.mainList[index].active = true;
      this.selectedList_data.push(this.mainList[index]);
    },
    remove: function(jobItem) {
      let temp = [];
      for (let i = 0; i < this.selectedList_data.length; i++) {
        if (this.selectedList_data[i].typeCode !== jobItem.typeCode) {
          temp.push(this.selectedList_data[i]);
        }
      }
      this.selectedList_data = temp;
      this.mainList.forEach(e => {
        if (e.typeCode === jobItem.typeCode) {
          e.active = false;
        }
      });
    },
    close: function() {
      this.isShow = false;
    },
    show: function() {
      this.isShow = true;
    },
    submit: function() {
      if (this.selectedList_data.length <= 0) {
        layui.layer.msg("请选择");
        return;
      }
      this.$emit("emitSelectedJobData", this.selectedList_data);
      this.selectedList_data = [];
      this.getMainList(sessionStorage.zhishu_JobPicker_typeCode);
      this.close();
    }
  },
  mounted() {
    // this.getMainList("热门城市");
    if (this.selectedList.length > 0) {
      this.selectedList_data = this.selectedList;
    }

    jobService.getJobWantTypeList1().then(res => {
      this.menuList = res.data.object;
      for (let i = 0; i < this.menuList.length; i++) {
        if (i === 0) {
          this.menuList[i].active = true;
          this.getMainList(this.menuList[i].typeCode);
        } else {
          this.menuList[i].active = false;
        }
      }
    });
  }
};
</script>

<style scoped>
@import url('/static/css/pupil/yixiang.css');
</style>

