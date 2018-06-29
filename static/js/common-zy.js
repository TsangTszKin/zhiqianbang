
var zytools = {
	autoHeight:function (excess){
		
		var windowH = window.innerHeight;
		var allH = $('.contant').outerHeight();
		
		if(allH < windowH){
			
			$('.z-main').css('height',windowH - excess)
		}
		
		
		
	},
}
	

	
	

