<template>
  <ol>
                <li class="li-1">获得证书
                    <span class="active"  @click="addOneFillEdit()">
                        <i class="iconfont icon-xinzeng"></i>新增证书</span></li>
                <li>
                    <span class="default-content" v-show="data.resumeSkillsCertificateList.length == 0">
                        <i class="iconfont icon-jinggao"></i>完善资料，让HR更了解你！</span>
                    <div class="exist-content" v-show="data.resumeSkillsCertificateList.length > 0">
                        <div class="user-project">
                            <ul class="item-list">
                                <li class="bolds" v-for="(item, index) in data.resumeSkillsCertificateList">
                                    <span class="s-1">{{item.issuingTime}}</span>
                                    <span class="s-2">{{item.title}}
                                        <a href="">查看></a></span>
                                    <span class="s-3"></span>
                                    <span class="s-4"></span>
                                    <p class="handle-btn fr">
                                        <i class="iconfont icon-bianji" title="编辑"  @click="editOne(index)"></i>
                                        <i class="iconfont icon-shanchu" title="删除" @click="deleteOne(item.id)"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compile-content " v-show="showEdit">
                        <div class="zsFrom my-resume-form ">
                            <div class="layui-form clearfix certificate" action="">
                                <div class="layui-form-item clearfix">
                                    <label class="layui-form-label">
                                        <span>证书名称</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block layuiChoose clearfix">
                                        <input type="text" name="title" lay-verify="required|title" v-model="fill.title" placeholder="请选择证书" autocomplete="off" class="layui-input">
                                        <i class="iconfont icon-dianjixuanze"></i>
                                    </div>
                                    <div class="bookUpload clearfix">
                                        <span class="book" id="upload">{{fileUploadBtnStr}}</span>
                                        <input  @change="fileUpload" style="position: absolute;right: 0;top: 0;bottom: 0;left: 0;opacity: 0;overflow: hidden;" type="file" name="file">
                                        <span class="tips">（只支持JPG、png、gif、pdf文件）</span></div>
                                    <div class="bookImg clearfix">
                                        <div class="bookImg_cont">
                                            <img :src="logoShow"/>
                                            </div>
                                        <a href="#">删除</a></div>
                                </div>
                                <div class="layui-form-item">
                                    <label class="layui-form-label">
                                        <span>时间</span>
                                        <i>*</i>
                                    </label>
                                    <div class="layui-input-block layuiDate">
                                        <input type="text" class="layui-input" lay-verify="required" id="aissuingTime_zhengshu" placeholder="请选择时间" >
                                        <i class="iconfont icon-paibanbiao"></i>
                                    </div>
                                </div>
                                 <div class="layui-form clearfix">
                                    <div class="buttons clearfix fl">
                                        <button class="grayBtn-o" @click="hideEdit()">取消</button>
                                        <button class="blueBtn" style="float:right" lay-submit lay-filter="submitzhengshu">保存</button></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
</template>
<script>
import resumeService from "@/api/resumeService";
import SftpImg from "@/components/SftpImg";
export default {
  components: {
    SftpImg
  },
  data() {
    return {
      data: {
        resumeSkillsCertificateList: [
          // {
          //   createTime: "2018-04-12T10:20:59.676Z",
          //   fileSize: 0,
          //   fileType: "string",
          //   id: "string",
          //   issuingTime: "2018-04",
          //   ownerId: "string",
          //   path: "string",
          //   pdfPath: "string",
          //   resumeId: "string",
          //   sortOrder: 0,
          //   title: "string",
          //   updateTime: "2018-04-12T10:20:59.676Z"
          // }
        ]
      },
      fill: {
        issuingTime: "",
        path: "/static/img/onlinejob3.jpg",
        resumeId: "",
        title: ""
      },
      showEdit: false,
      resumeId: "",
      editOrAdd: 2, //1编辑2新增
      editIndex: "",
      fileUploadBtnStr: "上传证书",
      logoShow: "/static/img/onlinejob3.jpg"
    };
  },
  methods: {
    addOneFillEdit() {
      this.showEdit = true;
      this.fill = {
        issuingTime: "",
        path: "/static/img/onlinejob3.jpg",
        resumeId: "",
        title: ""
      };
      this.editOrAdd = 2;
    },
    layuiListener() {
      let self = this;
      layui.form.on("select(skillName)", function(data) {
        self.fill.skillName = data.value;
      });
      layui.form.on("radio(sikllLevel)", function(data) {
        self.fill.sikllLevel = data.value;
      });
      layui.form.on("submit(submityuyan)", function() {
        console.log(self.fill);
        self.pushOne();
        return false;
      });
    },
    verify() {
      //自定义验证规则
      //   layui.form.verify({
      //     intramuralHonor: function(value) {
      //       if (value.length > 20) {
      //         return "荣誉名称不得多于20个字符啊";
      //       }
      //     }
      //   });
    },
    editListData() {
      console.log(this.data);
      this.updateResume();
    },
    addOneData() {
      //后台返回id，补充本地最新的数据
      console.log(this.fill);
      this.data.resumeSkillsCertificateList.push(this.fill);
      this.updateResume();
    },
    hideEdit() {
      this.fill = {
        issuingTime: "",
        path: "string",
        resumeId: "",
        title: "string"
      };
      this.showEdit = false;
    },
    pushOne() {
      if (this.editOrAdd == 2) {
        this.data.resumeSkillsCertificateList.push(this.fill);
        this.addOneData();
      } else if (this.editOrAdd == 1) {
        this.data.resumeSkillsCertificateList[this.editIndex] = this.fill;
        this.editListData();
      }
      this.hideEdit();
    },
    deleteOne(id) {
      resumeService.deleteResumeSkillsCertificate(id).then(res => {
        if (res.data.code != 0) {
          layui.layer.msg(res.data.message);
          return;
        }
        this.getResume();
      });
    },
    editOne(index) {
      this.editIndex = index;
      this.fill = this.data.resumeSkillsCertificateList[index];
      this.showEdit = true;
      this.editOrAdd = 1;
    },
    getResume() {
      resumeService.getMyResume().then(res => {
        this.resumeId = res.data.object.resumeBaseInfo.id;
        this.data.resumeSkillsCertificateList =
          res.data.object.resumeSkillsCertificateList;
      });
    },
    updateResume() {
      resumeService.updateResume(this.resumeId, this.data).then(res => {
        this.data.resumeSkillsCertificateList =
          res.data.object.resumeSkillsCertificateList;
      });
    },
    fileUpload: function(e) {
      let loadingIndex = layui.layer.load(2);
      this.fileUploadBtnStr = "正在上传";
      fileUploadService.fileUpload(e, 'pic').then(res => {
        // console.log(res.data);
        if (res.data.code !== 0) {
          layui.layer.close(loadingIndex);
          layui.layer.msg(res.data.message);
          return;
        }
        this.fill.path = res.data.object;
        this.logoShow = common.getUploadFilePath(res.data.object);
        this.fileUploadBtnStr = "上传成功";
        layui.layer.close(loadingIndex);
      });
    }
  },
  mounted() {
    this.getResume();
    setTimeout(() => {
      let self = this;

      this.$layuiRender.form();

      layui.laydate.render({
        elem: "#aissuingTime_zhengshu",
        type: "month",
        done: function(value) {
          self.fill.issuingTime = value;
        }
      });
    }, 200);

    this.layuiListener();
    this.verify();
  }
};
</script>
<style scoped>
@import url("/static/css/pupil/fillResume.css");
@import url("/static/css/formCommon.css");
@import url("/static/css/portal/success.css");
@import url("/static/css/pupil/resume-2.1.css");
</style>
