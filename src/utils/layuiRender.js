/*
 * @Author: Tsang 
 * @Date: 2017-12-23 16:49:14 
 * @Last Modified by: Tsang
 * @Last Modified time: 2018-04-17 09:28:44
 */
export default {
    form() {
        var index = layui.layer.load(2);
        setTimeout(() => {
            layui.form.render();
            layui.layer.close(index);
        }, 100);
    },
    date(elementId) {
        var index = layui.layer.load(2);
        setTimeout(() => {
            layui.laydate.render({
                elem: elementId
            });
            layui.layer.close(index);
        }, 100);
    }
}