<template>
   <div class="condition">
            <div class="custom clearfix">
                <div class="gangwei clearfix">
                    <div class="layui-form">
                        <div class="fl d-1">
                            <input type="text" class="layui-input" placeholder="请输入岗位名称" />
                        </div>
                        <div class="layui-input-block layuiChoose fl d-2">
                            <input type="text" name="address" required="" lay-verify="required" placeholder="期望工作地"
                            autocomplete="off" class="layui-input">
                            <i class="iconfont icon-dianjixuanze">
                            </i>
                        </div>
                        <div class="fl d-3">
                            <button class="blueBtn">
                                <i class="iconfont icon-chaxun">
                                </i>
                                搜索
                            </button>
                        </div>
                    </div>
                </div>
                <div class="plus-input" style="display: none;">
                    <input type="text" placeholder="请输入搜索信息" />
                    <button class="blueBtn">
                        搜索
                    </button>
                </div>
            </div>
            <div class="item-box ">
                <dl class="clearfix">
                    <dt>
                        月薪范围：
                    </dt>
                    <dd class="clearfix">
                        <ul class="all-ul" :class="{'active': selectStatus.cateIndex1 == -1}" @click="changeCate(1, -1)">
                            全部
                        </ul>
                        <ul class="item-ul clearfix">
                            <li v-for="(item, index) in typeList.SalaryRangeType" :class="{'active': selectStatus.cateIndex1 == index}" @click="changeCate(1, index)">
                                {{item.label}}
                            </li>
                        </ul>
                    </dd>
                    <span class="more">
                        更多
                        <i class="iconfont icon-zhankai">
                        </i>
                    </span>
                </dl>
                <dl class="clearfix">
                    <dt>
                        工作年限：
                    </dt>
                    <dd class="clearfix">
                        <ul class="all-ul" :class="{'active': selectStatus.cateIndex2 == -1}" @click="changeCate(2, -1)">
                            全部
                        </ul>
                        <ul class="item-ul clearfix">
                            <li v-for="(item, index) in typeList.YearRangeType"  :class="{'active': selectStatus.cateIndex2 == index}" @click="changeCate(2, index)">
                                {{item.label}}
                            </li>
                        </ul>
                    </dd>
                    <span class="more">
                        更多
                        <i class="iconfont icon-zhankai">
                        </i>
                    </span>
                </dl>
                <dl class="clearfix">
                    <dt>
                        学历要求：
                    </dt>
                    <dd class="clearfix">
                        <ul class="all-ul" :class="{'active': selectStatus.cateIndex3 == -1}" @click="changeCate(3, -1)">
                            全部
                        </ul>
                        <ul class="item-ul clearfix">
                            <li v-for="(item, index) in typeList.PositionEducation"  :class="{'active': selectStatus.cateIndex3 == index}" @click="changeCate(3, index)">
                                {{item.label}}
                            </li>
                        </ul>
                    </dd>
                    <span class="more">
                        更多
                        <i class="iconfont icon-zhankai">
                        </i>
                    </span>
                </dl>
               
            </div>
            <div class="sort" style="display: none;">
                <span class="sort-item">
                    最热方向
                    <i class="fa fa-long-arrow-up">
                    </i>
                </span>
                <span class="sort-item">
                    最热方向
                    <i class="fa fa-long-arrow-down">
                    </i>
                </span>
                <span class="sum fr">
                    共有
                    <b>
                        1681
                    </b>
                    个符合要求的信息
                </span>
            </div>
            <div style="background:#fff;" class="box-more">
                <div class="more-btn ">
                    <span>
                        收起更多选项
                    </span>
                    <i class="iconfont icon-shouqi">
                    </i>
                </div>
            </div>
        </div>
</template>
<script>
import resumeService from "@/api/resumeService";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      //字典
      typeList: {
        SalaryRangeType: [],
        YearRangeType: [],
        PositionEducation: []
      },
      selectStatus: {
        cateIndex1: -1,
        cateIndex2: -1,
        cateIndex3: -1
      }
    };
  },
  methods: {
    script() {
      var condition = {
        el: {
          con: $(".condition")
        },
        hideMore: function() {
          var itemArr = this.el.con.find(".item-ul");
          itemArr.each(function(idx, item) {
            var w = $(item).height();
            w > 32
              ? (item.style.height = "32px")
              : $(item)
                  .parent()
                  .next()
                  .css("display", "none");
          });
        },
        getChildren: function(name) {
          return this.el.con.find(name);
        },
        toggleIcon: function(i) {
          i.hasClass("icon-zhankai")
            ? i.removeClass().addClass("iconfont icon-shouqi")
            : i.removeClass().addClass("iconfont icon-zhankai");
        },
        changeBox: function(e) {
          var e = e || window.event;
          var target = e.target || e.srcElement;

          var box = this.getChildren(".item-box");
          box.height() == 0 ? box.height("auto") : box.height(0);

          var more = box.siblings(".box-more");
          var btn = more.find(".more-btn span");
          var i = more.find(".more-btn .iconfont");
          this.toggleIcon(i);
          btn[0].innerText =
            btn.text().trim() == "收起更多选项"
              ? "展开更多选项"
              : "收起更多选项";
        },
        changeItem: function(e) {
          var e = e || window.event;
          var target = e.target || e.srcElement;
          var ta = $(target);
          var btn = ta.closest(".more");
          if (btn[0]) {
            var ul = btn.prev().find(".item-ul");
            ul.height() == 32 ? ul.height("auto") : ul.height(32);
            var i = btn.find(".iconfont");
            this.toggleIcon(i);
          }
        },
        init: function() {
          this.hideMore();
          this.getChildren(".more-btn").on("click", this.changeBox.bind(this));
          this.el.con.on("click", this.changeItem.bind(this));
        }
      };
      condition.init();
    },
    //初始化字典
    getPersonQueryTypeList() {
      resumeService.getPersonQueryTypeList().then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.typeList.SalaryRangeType = res.data.object.SalaryRangeType;
        this.typeList.YearRangeType = res.data.object.YearRangeType;
        this.typeList.PositionEducation = res.data.object.PositionEducation;
        setTimeout(() => {
          this.script();
        }, 200);
      });
    },
    changeCate(typeNum, index) {
      switch (typeNum) {
        case 1:
          this.selectStatus.cateIndex1 = index;
          break;
        case 2:
          this.selectStatus.cateIndex2 = index;
          break;
        case 3:
          this.selectStatus.cateIndex3 = index;
          break;

        default:
          break;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$layuiRender.form();
    }, 200);
    this.getPersonQueryTypeList();
  }
};
</script>
<style scoped>
@import url("/static/css/formCommon.css");
@import url("/static/css/enterprise/talents-search.css");
</style>

