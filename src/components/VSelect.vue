<template>
        <div class="layui-unselect layui-form-select" :class="{'layui-form-selected':selectShow}">
            <div class="layui-select-title">
                <input type="text" placeholder="请选择" @click="changeSelect" readonly :value="currentValue.Text" class="layui-input layui-unselect">
                <i class="layui-edge"></i>
            </div>
            <dl class="layui-anim layui-anim-upbit" v-show="selectShow" style="display:none;z-index: 75">
                <dd v-for="item in options" :class="{'layui-this':currentValue.Value==item.Value}" @click="currentSelect(item)"  value="item.Value">{{item.Text}}</dd>
            </dl>
        </div>
</template>
<script>
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

export default {
    props:['value','options'],
    data(){
        return {
            selectShow:false,
            currentValue: {
                Text:'',
                Value:null,
            }
        }
    },
    created(){
       this.initSelect();
    },
    mounted(){
    	var self = this;
    	var $this = $(self.$el);
    	window.addEventListener("mouseup", function(event) {
    		if(!$this.hasClass("layui-form-selected"))
    			return;
    		var target = event.target;
    		console.log(target)
    		if($this.find("input").get(0) == target)
    			return true;
    		
    		target.click();
    		$this.find("input").get(0).click();
    		$this.removeClass("layui-form-selected");
    		$this.find("dl").css("diplay", "none");
    	})
    },
    methods:{
        currentSelect(item){
            let self=this;
            self.currentValue=item
            this.changeSelect();
            this.$emit('input', item.Value);
        },
        changeSelect(){
            this.selectShow=!this.selectShow;
        },
        initSelect(){
            let self=this
            self.options.forEach(item=>{
                if(item.Value==self.value){
                    self.currentValue={
                        Text:item.Text,
                        Value:item.Value
                    }
                }
            })
        }
    },
    watch: {
        value: function () {
            this.initSelect();
        }
    }
}
</script>