<template>
  <!-- 笔试题 -->
<div class="mrCont_main" id="bishi" style="display: none;">
    <div class="applyBook">
        <div class="applyTest_title">
            <h1>
                Java工程师测试情况
            </h1>
            <p>
                客观题总共 10 题，满分 100 分
            </p>
            <p>
                单选题 4 题，错了
                <span>
                    1
                </span>
                题；多选题 4 题，错了
                <span>
                    1
                </span>
                题；判断题 2 题，全对
            </p>
            <div class="score clearfix">
                <span class="scoreL">
                    得分
                </span>
                <span class="scoreR">
                    80
                    <sub>
                        分
                    </sub>
                </span>
            </div>
        </div>
        <form class="layui-form" action="">
            <ul class="testView_demoList">
                <li>
                    <div class="demoTit">
                        <span class="question-num">
                            1
                        </span>
                        <span class="question-title">
                            <p>
                                <span>
                                    Java属于以下哪种语言？
                                </span>
                            </p>
                        </span>
                    </div>
                    <div class="demoCont clearfix">
                        <div class="layui-input-block">
                            <input type="radio" name="num1" value="机器语言" title="A、机器语言" checked>
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num1" value="汇编语言" title="B、汇编语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num1" value="高级语言" title="C、高级语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num1" value="以上都不对" title="D、以上都不对">
                        </div>
                    </div>
                    <div class="answer">
                        正确答案：A
                    </div>
                </li>
                <li>
                    <div class="demoTit">
                        <span class="question-num">
                            2
                        </span>
                        Java属于以下哪种语言？
                    </div>
                    <div class="demoCont clearfix error">
                        <div class="layui-input-block">
                            <input type="radio" name="num2" value="机器语言" title="A、机器语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num2" value="汇编语言" title="B、汇编语言" checked>
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num2" value="高级语言" title="C、高级语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="radio" name="num2" value="以上都不对" title="D、以上都不对">
                        </div>
                    </div>
                    <div class="answer">
                        正确答案：D
                    </div>
                </li>
                <li>
                    <div class="demoTit">
                        <span class="question-num">
                            3
                        </span>
                        Java属于以下哪种语言？
                    </div>
                    <div class="demoCont clearfix error">
                        <div class="layui-input-block">
                            <input type="checkbox" lay-skin="primary" name="num3" value="机器语言" title="A、机器语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="checkbox" lay-skin="primary" name="num3" value="汇编语言" title="B、汇编语言"
                            checked>
                        </div>
                        <div class="layui-input-block">
                            <input type="checkbox" lay-skin="primary" name="num3" value="高级语言" title="C、高级语言">
                        </div>
                        <div class="layui-input-block">
                            <input type="checkbox" lay-skin="primary" name="num3" value="以上都不对" title="D、以上都不对">
                        </div>
                    </div>
                    <div class="answer">
                        正确答案：D
                    </div>
                </li>
            </ul>
        </form>
    </div>
    <!-- end of applyBook -->
</div>
<!-- end of mrCont_main -->
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$layuiRender.form();
    }, 200);
  }
};
</script>