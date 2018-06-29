<template>
  <b :class="{css:true}" @click="clickHandler" v-show="isShow">{{title}}</b>
</template>
<script>
import auth from '../ssoAuth'
    export default {
    	props:{
    	     css:{
    	    	 type:String,
    	    	 required:false
    	     },
    	     title:{
    	    	 type:String,
    	    	 required:true
    	     },
    	     clickHandler:{
    	    	 type:Function,
    	    	 required:false,
    	    	 default:function(){}
    	     },
    	     types:{
    	    	 type:String,
    	    	 required:false,
    	    	 default:{}
    	     }
    	},
    	data:function(){
    		return{
    			isShow:false
    		}
    	},
    	mounted:function(){
    		var typeArray = this.types.split(",");
    		var userInfo = auth.userInfo();
    		 if(typeArray.length>0){
    			 for(var i = 0;i<typeArray.length;i++){
    				 if(typeArray[i] == userInfo.type){
    					 this.isShow = true;
    					 break;
    				 }
    			 }
    		}else{
    			this.isShow = true;
    		} 
    	
    	}
    }
</script>