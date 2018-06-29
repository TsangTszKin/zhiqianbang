<template>
  <div class="pops" v-show="isShow">
				
			<div class="popsBuild yixiang" style="overflow:hidden;background:#fff;padding:0;display: block;width:1002px;height:591px;position:absolute;top:0;right:0;left:0;bottom:0;margin:auto">
				<div class="popsToper" style="padding:0">
					<div class="site-opt clearfix">
					<p class="fl">选择地址<span>（最多选择<i>{{maxSelectCount}}</i>项）</span></p>
						
          <!-- <div class="checklist fl" v-if="!isShowArea">
							<b v-for="item in selectedCity_data">{{item.name}}<i class="fa fa-times" @click="removeCity(item)"></i></b>
						</div>

            <div class="checklist fl" v-else>
							<b v-show="cityAndArea.city">{{cityAndArea.city}}</b><b v-show="cityAndArea.area">{{cityAndArea.area}}</b>
				  </div> -->
						<!-- <div class="tishi"><i class="iconfont icon-reminder_"></i>最多只能选择{{maxSelectCount}}项</div> -->

					</div>
				</div>
				<div class="popsClose">
					<button title="关闭" @click="close()"></button>
				</div>

        <ul class="user-checks clearfix" v-if="!isShowArea">
					<li v-for="item in selectedCity_data"><span>{{item.name}}</span><i @click="removeCity(item)">&times;</i></li>
				</ul>
        <ul class="user-checks clearfix"v-else>
					<li v-show="cityAndArea.city"><span>{{cityAndArea.city}}</span><i>&times;</i></li>
          <li v-show="cityAndArea.area"><span>{{cityAndArea.area}}</span><i>&times;</i></li>
				</ul>
				<div class="z-model-body clearfix" style="height:inherit;">
					<ul class="left-nav fl" style="width:208px;">
						<li v-for="item in letterGroup" :class="{active: item.active}" @click="getCity(item.name)">
							<span class="titles" >{{item.name}}</span>
							<i class="fa fa-angle-right fr"></i>
						</li>
					</ul>
					<div id="panel" class="right-look fl" style="width:792px;height:365px;overflow-y: scroll;">
						<div class="datalist" style="padding-top:20px;">
							<dl>
                <dd class="clearfix" v-show="selectedType == 1">
                  <!-- <p v-for="(item, index) in cities"  style="width:187px;"><span @click="selectCity(index)" :class="{'active': item.active}">{{item.name}}</span></p> -->
                 <span v-for="(item, index) in cities" @click="selectCity(index)" :class="{'active': item.active}">{{item.name}}</span>

                </dd>
                <dd class="clearfix" v-show="selectedType == 2">

                  <!-- <p v-for="item in areas" style="width:187px;"><span  @click="selectArea(item)">{{item}}</span></p> -->
                  <span v-for="item in areas"  @click="selectArea(item)">{{item}}</span>

                </dd>
						  </dl>
						
						</div>
						
					</div>
				</div>

         <div class="buts" id="buts" style="padding-left: 225px;">
							<button class="blueBtn" @click="submit()">确定</button>
							<button class="blueBtn-o" @click="close()">取消</button>
				</div>
			</div>
		
	</div>
</template>
<script>
import address from "../utils/address";
export default {
  props: {
    maxSelectCount: {
      type: Number,
      default: 1
    },
    selectedCity: {
      type: Array,
      default: function() {
        return [];
      }
    },
    isShowArea: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      letterGroup: [
        { name: "热门城市", active: true },
        { name: "ABC", active: false },
        { name: "DEF", active: false },
        { name: "GH", active: false },
        { name: "JKL", active: false },
        { name: "MNP", active: false },
        { name: "QRS", active: false },
        { name: "TWX", active: false },
        { name: "YZ", active: false }
      ],
      cities: [],
      areas: [],
      selectedCity_data: [],
      isShow: false,
      selectedType: 1,
      cityAndArea: {
        city: null,
        area: null
      }
    };
  },
  watch: {
    selectedCity(value) {
      this.selectedCity_data = value;
    }
  },
  methods: {
    getCity: function(letter) {
      this.letterGroup.forEach(element => {
        if (element.name === letter) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
      let temp = address.getCitiesByLetterGroup(letter);
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < this.selectedCity_data.length; j++) {
          if (temp[i].name == this.selectedCity_data[j].name) {
            temp[i].active = true;
            break;
          } else {
            temp[i].active = false;
          }
        }
      }
      this.cities = temp;
    },
    selectCity: function(index) {
      if (this.selectedCity_data.length >= this.maxSelectCount) {
        layui.layer.msg("最多只能选择" + this.maxSelectCount + "项");
        return;
      }
      for (let i = 0; i < this.selectedCity_data.length; i++) {
        if (this.selectedCity_data[i].name === this.cities[index].name) {
          return;
        }
      }
      if (this.isShowArea) {
        this.cityAndArea.city = this.cities[index].name;
        this.areas = address.getArea(this.cities[index].name);
        this.cityAndArea.area = null;
        this.selectedType = 2;
      } else {
        this.cities[index].active = true;
        this.selectedCity_data.push(this.cities[index]);
      }
    },
    removeCity: function(city) {
      let temp = [];
      for (let i = 0; i < this.selectedCity_data.length; i++) {
        if (this.selectedCity_data[i].name !== city.name) {
          temp.push(this.selectedCity_data[i]);
        }
      }
      this.selectedCity_data = temp;
      this.cities.forEach(e => {
        if (e.name === city.name) {
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
      if (this.isShowArea) {
        this.$emit("emitSelectedCityData", this.cityAndArea);
      } else {
        this.$emit("emitSelectedCityData", this.selectedCity_data);
      }
      this.close();
    },
    selectArea: function(area) {
      this.cityAndArea.area = area;
      this.selectedType = 1;
    }
  },
  mounted() {
    this.getCity("热门城市");
    if (this.selectedCity.length > 0) {
      this.selectedCity_data = this.selectedCity;
    }
     //滚动条
    $("#panel").panel({ iWheelStep: 32 });
  }
};
</script>

<style scoped>
@import url('/static/css/pupil/yixiang.css');
</style>

