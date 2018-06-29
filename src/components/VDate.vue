<template>
    <input readonly type="text" class="layui-input" :id="dateId" v-model="currentValue" placeholder="请选择时间">
</template>
<script>
    export default {
    	model:{
    		prop: 'value',
    	},
        props:['value','isTime','dateFormat','dateStyle'],
        data(){
            return {
                dateId:'laydate_'+Date.now(),
                currentValue: this.value,
            }
        },
        mounted() {
        	var self = this;
        	if(self.dateStyle===1){
                layui.laydate.render({
                    elem:document.getElementById(self.dateId),
                    istime: self.isTime||false,
                    format: self.dateFormat||'yyyy-MM-dd',
                    min: new Date().toDateString(),
                    done: function(value, date){ //监听日期被切换
                        self.currentValue=value;
                        self.$emit('input', value);
                    }
                })
            } else if (self.dateStyle===2) {
                layui.laydate.render({
                    elem:document.getElementById(self.dateId),
                    // type:'datetime',
                    range:'至',
                    istime: self.isTime||false,
                    format: self.dateFormat||'yyyy-MM-dd',
                    done: function(value, date){ //监听日期被切换
                        self.currentValue=value;
                        self.$emit('input', value);
                    }
                })
            } else {
                layui.laydate.render({
                    elem:document.getElementById(self.dateId),
                    istime: self.isTime||false,
                    format: self.dateFormat||'yyyy-MM-dd',
                    done: function(value, date){ //监听日期被切换
                        self.currentValue=value;
                        self.$emit('input', value);
                    }
                })
            }

        },
        watch: {
            value(val) {
                this.currentValue = val;
            }
            // currentValue(val) {
            //     //console.log('currentValue：'+val)
            //     this.$emit('input', val);
            //     alert(this.value);
            // }
        }
    }
</script>
<style>
    .layui-laydate{
        z-index: 75;
    }
</style>