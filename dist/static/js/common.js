//置顶
$(document).ready(function () {
    $.goup({
        trigger: 100,
        bottomOffset: 50,
        locationOffset: 50,
        titleAsText: true
    });

});

//页面最小高度
window.onload = function(){
   console.log($(window).height());
   /*$('.mainCont').height($(window).height()-88);*/
   $('.mainCont').css('min-height',$(window).height()-88);
};

//左侧菜单
$('.menusList li a.menus_main').on('click',function(){
	$('.menusList li a.menus_main').removeClass('menus_mainOn');
	$(this).addClass('menus_mainOn');
	var iclass = $(this).attr("class");  
	
	if (iclass=="current"){
		$(this).next().slideUp();
	}else {
		$(this).addClass("current").next().slideDown()
		.parent().siblings().children("a").removeClass("current").next().slideUp();
		return false; 
	}
});

$('.menus_sub a').on('click',function(){
	$('.menus_sub a').removeClass('menus_subOn');
	$(this).addClass('menus_subOn');
});


