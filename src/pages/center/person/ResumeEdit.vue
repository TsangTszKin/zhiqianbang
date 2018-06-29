<template>
<div class="mainCont">

	<div class="z-main" style="width:auto">					
		<div class="my-resume clearfix">
				<div class="left-bookrack">
                    <jibenxinxi></jibenxinxi>
                    <div class="resume-item" style="display: block;">
                        <nianshouru></nianshouru>
                        <qiuzhiyixiang></qiuzhiyixiang>
                        <gongzuojingyan></gongzuojingyan>
                        <xiangmujingyan></xiangmujingyan>
                        <jiaoyujingli></jiaoyujingli>
                        <zaixiaoqingkuang></zaixiaoqingkuang>
                        <jinengqingkuang></jinengqingkuang>
                    </div>
                </div>
                <div class="right-bookrack">	
                    <rightMenu></rightMenu>
                </div>
		</div>				
	</div>
</div><!-- end of mainCont -->
</template>

<script>
import echarts from "echarts";
import jibenxinxi from "@/components/resume/person/edit/jibenxinxi";
import nianshouru from "@/components/resume/person/edit/nianshouru";
import qiuzhiyixiang from "@/components/resume/person/edit/qiuzhiyixiang";
import gongzuojingyan from "@/components/resume/person/edit/gongzuojingyan";
import xiangmujingyan from "@/components/resume/person/edit/xiangmujingyan";
import jiaoyujingli from "@/components/resume/person/edit/jiaoyujingli";
import zaixiaoqingkuang from "@/components/resume/person/edit/zaixiaoqingkuang";
import jinengqingkuang from "@/components/resume/person/edit/jinengqingkuang";
import rightMenu from "@/components/resume/person/edit/rightMenu";
export default {
  components: {
    jibenxinxi,
    nianshouru,
    qiuzhiyixiang,
    gongzuojingyan,
    xiangmujingyan,
    jiaoyujingli,
    zaixiaoqingkuang,
    jinengqingkuang,
    rightMenu
  },
  mounted() {
   /*自定义下拉选项*/
    var xySelect = {
      el: {
        box: $(".xy-select")
      },
      click: function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;

        if ($(target).hasClass("select-btn")) {
          this.el.opt.toggle();
          this.el.opt.css("display") == "block"
            ? this.el.btn.removeClass("down").addClass("up")
            : this.el.btn.removeClass("up").addClass("down");
        } else if (target.tagName.toLowerCase() == "li") {
          /*获取选中内容  ： target.innerText*/
          this.el.btn.text(target.innerText);
          layer.msg("简历已经设置为：" + target.innerText);
          this.el.btn.removeClass("up").addClass("down");
          this.el.opt.hide();
        }
      },
      reset: function() {
        var ta = this;
        this.el.btn = this.el.box.find(".select-btn");
        this.el.opt = this.el.box.find(".select-options");
        this.el.opt.hide();
        document.documentElement.onclick = function(e) {
          var e = e || window.event;
          var target = e.target || e.srcElement;
          if (!$(target).closest(".xy-select")[0]) {
            ta.el.btn.removeClass("up").addClass("down");
            ta.el.opt.hide();
          }
        };
      },
      init: function() {
        this.reset();
        this.el.box.on("click", this.click.bind(this));
      }
    };
    xySelect.init();

    /*右侧锚点悬浮适应*/
    var autoList = {
      el: {
        box: $(".list-box"),
        main: $(".main")
      },
      setLeft: function() {
        var right = this.el.main.offset().left; //+ 180 + 16 + 764 + 20;;
        this.el.box.css({ right: right, display: "block" });
      },
      scrollFn: function() {
        if (this.el.box.offset().top > parseInt(this.el.box.css("top"))) {
          this.el.box.css("top", 70);
        } else {
          this.el.box.css("top", 100);
        }

        this.follow.judge($(window).scrollTop());
      },
      follow: {
        data: {
          interval: 150
        },
        record: function() {
          var domArr = [];
          this.data.a = autoList.el.box.find(".right-list a");
          this.data.a.each(function(idx, item) {
            domArr.push($(item.getAttribute("href")).offset().top + 100);
          });
          return domArr;
        },
        judge: function(y) {
          var ta = this;
          var arr = this.data.arr;

          $.each(arr, function(idx, item) {
            if (
              y + ta.data.interval > item ||
              y + ta.data.interval < item[idx + 1]
            ) {
              ta.changeCss(idx);
            }
          });
        },
        changeCss: function(idx) {
          this.data.a.find("li").removeClass("active");
          $(this.data.a[idx])
            .find("li")
            .addClass("active");
        },
        start: function() {
          this.data.arr = this.record();
        }
      },
      init: function() {
        this.setLeft();
        this.follow.start();
        window.onresize = this.setLeft.bind(this);
        window.onscroll = this.scrollFn.bind(this);
      }
    };

    autoList.init();
  }
};
</script>

<style scoped>
@import url("/static/css/pupil/pupil.css");
@import url("/static/css/portal/protal.css");
</style>
