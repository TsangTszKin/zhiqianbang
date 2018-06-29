/*
 * @Author: Tsang 
 * @Date: 2018-02-26 17:08:55 
 * @Last Modified by: Tsang
 * @Last Modified time: 2018-02-26 17:11:04
 */

<template>
  <div class="pops" v-show="showEditPop">
			<div class="popsTest" style="top: 5%;">
				<!--<div class="popsToper">
					<i class="fa fa-file-text fa-lg" aria-hidden="true"></i>
					弹窗式的新建表单
				</div>-->
				<div class="popsClose">
					<button title="关闭" @click="hide"></button>
				</div>
				
				<div class="testName">
					<h1>题目名称</h1>
					<textarea id="editor" placeholder="请选择你认为正确的答案？" autofocus></textarea>
				</div>

				<div class="testName" v-show="showType === 'SINGLESELECT'">
					<form class="layui-form" action="">
						<table cellpadding="0" cellspacing="0">
							<thead>
								<tr>
									<td>答案</td>
									<td>选项</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="A" title=" " name="SINGLESELECT" lay-filter="SINGLESELECT" :checked="editQuestionData.awser === 'A'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">A</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.A" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="B" title=" " name="SINGLESELECT" lay-filter="SINGLESELECT" :checked="editQuestionData.awser === 'B'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">B</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.B" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="C" title=" " name="SINGLESELECT" lay-filter="SINGLESELECT" :checked="editQuestionData.awser === 'C'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">C</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.C" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="D" title=" " name="SINGLESELECT" lay-filter="SINGLESELECT" :checked="editQuestionData.awser === 'D'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">D</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.D" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div class="testSubmit">
					  		<a href="javascript:void(0);" class="blueBtn-o" @click="hide">返回</a>
					  		<a href="javascript:void(0);" class="blueBtn" @click="submit">完成编辑</a>
					  	</div>
					</form>
				</div>

        <div class="testName" v-show="showType === 'MUTIPLESELECT'">
					<form class="layui-form" action="">
						<table cellpadding="0" cellspacing="0">
							<thead>
								<tr>
									<td>答案</td>
									<td>选项</td>
								</tr>
							</thead>
							<tbody>
								<tr v-if="editQuestionData.awserOption.A">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="A" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('A') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">A</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.A" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.B">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="B" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('B') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">B</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.B" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.C">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="C" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('C') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">C</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.C" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.D">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="D" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('D') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">D</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.D" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.E">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="E" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('E') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">E</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.E" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.F">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="F" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('F') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">F</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.F" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.G">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="G" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('G') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">G</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.G" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr v-if="editQuestionData.awserOption.H">
									<td>
										<div class="layui-form-item">
										    <input lay-skin="primary" type="checkbox"  value="H" title=" " name="MUTIPLESELECT" lay-filter="MUTIPLESELECT" :checked="editQuestionData.awser.indexOf('H') >= 0">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label">H</label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.H" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div class="testSubmit">
					  		<a href="javascript:void(0);" class="blueBtn-o" @click="hide">返回</a>
					  		<a href="javascript:void(0);" class="blueBtn" @click="submit">完成编辑</a>
					  	</div>
					</form>
				</div>

        <div class="testName" v-show="showType === 'DETERMINE'">
					<form class="layui-form" action="">
						<table cellpadding="0" cellspacing="0">
							<thead>
								<tr>
									<td>答案</td>
									<td>选项</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="Y" title=" " name="DETERMINE" lay-filter="DETERMINE" :checked="editQuestionData.awser === 'Y'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label"></label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.Y" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
                <tr>
									<td>
										<div class="layui-form-item">
										    <input type="radio"  value="N" title=" " name="DETERMINE" lay-filter="DETERMINE" :checked="editQuestionData.awser === 'N'">
										</div>
									</td>
									<td>
										<div class="layui-form-item">
											<label class="layui-form-label"></label>
											<div class="layui-input-block">
												<input v-model="editQuestionData.awserOption.N" type="text" required  lay-verify="required" placeholder="选项1" autocomplete="off" class="layui-input">
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div class="testSubmit">
					  		<a href="javascript:void(0);" class="blueBtn-o" @click="hide">返回</a>
					  		<a href="javascript:void(0);" class="blueBtn" @click="submit">完成编辑</a>
					  	</div>
					</form>
				</div>

        <div class="testName" v-show="showType === 'SUBJECT'">
					<form class="layui-form" action="">
						<div class="testName">
              <h1>参考答案</h1>
							<!-- <vEditor v-model="editQuestionData.awser" :height="100"></vEditor> -->
							<textarea id="editor2" placeholder="请选择你认为正确的答案？" autofocus></textarea>
              <!-- <textarea id="editor2" placeholder="请选择你认为正确的答案" autofocus>{{editQuestionData.awser}}</textarea> -->
            </div>
						
						<div class="testSubmit">
					  		<a href="javascript:void(0);" class="blueBtn-o" @click="hide">返回</a>
					  		<a href="javascript:void(0);" class="blueBtn" @click="submit">完成编辑</a>
					  	</div>
					</form>
				</div>

			</div>
		</div><!-- end of pops -->
</template>
<script>
import examQuestionEditService from "@/api/examQuestionEditService";
// import vEditor from "@/components/vEditor";
import { fail } from "assert";
export default {
  // components: {
  //   vEditor
  // },
  data() {
    return {
      editQuestionData: {
        content: "",
        awserOption: {}
      },
      showEditPop: false,
      showType: "SINGLESELECT",
      editorContent: null,
      editorAnswer: null
    };
  },
  watch: {},
  methods: {
    updateLayerFormListener() {
      let self = this;
      layui.form.on("radio(SINGLESELECT)", function(data) {
        // console.log(data.elem); //得到radio原始DOM对象
        // console.log(data.value); //被点击的radio的value值
        self.editQuestionData.awser = data.value;
      });
      layui.form.on("checkbox(MUTIPLESELECT)", function(data) {
        // console.log(data.elem); //得到checkbox原始DOM对象
        // console.log(data.elem.checked); //是否被选中，true或者false
        // console.log(data.value); //复选框value值，也可以通过data.elem.value得到
        // console.log(data.othis); //得到美化后的DOM对象
        console.log(self.editQuestionData.awser);
        var answerList = self.editQuestionData.awser.split(",");
        if (answerList.includes(data.value)) {
          //包含 取消
          if (!data.elem.checked) {
            let tempList = [];
            answerList.forEach(element => {
              if (element !== data.value) {
                tempList.push(element);
              }
            });
            console.log(tempList);
            let tempAnswer = "";
            for (let i = 0; i < tempList.length; i++) {
              console.log(tempList[i]);
              if (i !== tempList.length - 1) {
                tempAnswer = tempAnswer + tempList[i] + ",";
              } else {
                tempAnswer = tempAnswer + tempList[i];
              }
            }
            console.log("tempAnswer   = " + tempAnswer);
            self.editQuestionData.awser = tempAnswer;
          }
        } else {
          //新增选中
          answerList.push(data.value);
          console.log(answerList);
          answerList.sort();
          console.log(answerList);
          let tempAnswer = "";
          for (let i = 0; i < answerList.length; i++) {
            if (i !== answerList.length - 1) {
              tempAnswer = tempAnswer + answerList[i] + ",";
            } else {
              tempAnswer = tempAnswer + answerList[i];
            }
          }
          console.log(tempAnswer);
          self.editQuestionData.awser = tempAnswer;
        }
      });
      layui.form.on("radio(DETERMINE)", function(data) {
        // console.log(data.elem); //得到radio原始DOM对象
        // console.log(data.value); //被点击的radio的value值
        self.editQuestionData.awser = data.value;
      });
    },
    show(item) {
      //只需要在父组件传一个question对象过来即可但是awserOption需要转成一个json对象（本来是string对象）
      this.editQuestionData = item;
      this.$layuiRender.form();
      $(".layui-layedit").remove();
      console.log(this.editQuestionData);
      this.editorContent.setValue(this.editQuestionData.content);
      this.editorAnswer.setValue(this.editQuestionData.awser);
      this.showType = item.questionType;
      this.showEditPop = true;
    },
    hide() {
      this.showEditPop = false;
    },
    submit() {
      this.$loading.show();
      let temp = this.editQuestionData;
      temp.awserOption = JSON.stringify(temp.awserOption);
      temp.content = this.editorContent.getValue();
      switch (this.showType) {
        case "SINGLESELECT":
          break;

        case "MUTIPLESELECT":
          break;

        case "DETERMINE":
          break;

        case "SUBJECT":
          temp.awser = this.editorAnswer.getValue();
          break;

        default:
          break;
      }
      examQuestionEditService
        .saveOrUpdate(temp)
        .then(res => {
          this.$loading.hide();
          if (res.data.code === 1) {
            layui.layer.msg(res.data.message);
            return;
					}
					layui.layer.msg("修改成功");
					this.$emit("emitQuestionData", temp);
					this.showEditPop = false;
        })
        .catch(res => {
          this.$loading.hide();
        });
    }
  },
  mounted() {
    this.updateLayerFormListener();
    //富文本编辑器
    this.editorContent = new Simditor({
      textarea: $("#editor")
      //optional options
    });
    this.editorAnswer = new Simditor({
      textarea: $("#editor2")
      //optional options
    });
  }
};
</script>

<style scoped>
@import url('/static/simditor-2.3.5/simditor-2.3.5/simditor.css');
div.layui-layedit {
  display: none !important;
}
</style>

