jQuery(document).ready(function($){
	$('ul > li:has(ul) > a').append('<span class="tl-btn fa icon-plus"></span>');
	// Hide submenus
	$("#toggle-nav > li").click(function(e) {
		$(this).children("ul").slideToggle(300);
			var $currIcon=$(this).find("span.tl-btn");
				if($currIcon.hasClass("icon-plus"))
					$currIcon.addClass('icon-minus').removeClass('icon-plus');
				else  
					$currIcon.addClass('icon-plus').removeClass('icon-minus');         
		//  $($currIcon).addClass('icon-plus').removeClass('icon-minus');
		e.preventDefault();
	});
	
	/* Product Sub Navigation*/
	$(".product-menu > li").click(function(e) {
		$(this).children("ul").slideToggle(300);
			var $currIcon=$(this).find("span.tl-btn2");
				if($currIcon.hasClass("icon-icon-ios7-arrow-down")){
					$currIcon.addClass('icon-icon-ios7-arrow-up').removeClass('icon-icon-ios7-arrow-down');
					$('.wrapper-prod-sub-nav').css("visibility", "visible");
				}
				else{  
					$currIcon.addClass('icon-icon-ios7-arrow-down').removeClass('icon-icon-ios7-arrow-up');
					$('.wrapper-prod-sub-nav').css("visibility", "hidden");
				}
		//  $($currIcon).addClass('icon-plus').removeClass('icon-minus');
		e.preventDefault();
	});
	
	$(".filter-btn").click(function(e) {
		e.preventDefault();
		$(".div-filter").slideToggle(300);
		if($(this).text() == 'CLOSE FILTER')
		{
			$(this).text('OPEN FILTER');
		}
		else
		{
           $(this).text('CLOSE FILTER');
		}
		e.preventDefault();
	});
	
	$('.toggle-nav').click(function() {
		toggleNavigation()
	});
});

// The toggleNav function itself
function toggleNavigation() {
	if ($('.sliding-nav').hasClass('display-nav')) {
		// Close Nav
		$('.sliding-nav').removeClass('display-nav');
		$('.homepage').removeClass('right-site-menu');
		$('.header').css("left", "0px");
	} else {
	   // Open Nav
	   $('.sliding-nav').addClass('display-nav');
	   $('.homepage').addClass('right-site-menu');
	   $('.header').css("left", "250px");
	}
}