$(function() {
	//弹窗
	  $(".virtualList li").mouseover(function(){
	     $(this).children('.virtualPop').show();
	  });
	  $(".virtualList li").mouseout(function(){
	    $(this).children('.virtualPop').hide();
	  });
	  
	//工具栏
	
	$(".virtualHidden").toggle(
		function(){
			$('.virtualMenu').addClass('virtualMenu_on');
			$('.virtualHidden').text('显示工具栏');
		},function(){
			$('.virtualMenu').removeClass('virtualMenu_on');
			$('.virtualHidden').text('隐藏工具栏');
		}
	);
});