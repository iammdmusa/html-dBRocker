jQuery(document).ready(function($){
	//Flexslider part
	$('.flexslider').flexslider({
		pauseOnHover: true,
		controlNav: false,
		directionNav: false,
		slideshowSpeed: 3500,
		randomize:false,
		startAt: 0
	});
		
	$(window).load(function () {
		var bnrHeight = $('.flexslider li').height();
		$(".flexslider .flex_centered").height(bnrHeight);
		$(".flexslider .flex_centered").css('visibility','visible');
		
	});
	
	$(window).resize(function(){
		var bnrHeight = $('.flexslider li').height();
		$(".flexslider .flex_centered").height(bnrHeight);
		$(".flexslider .flex_centered").height(bnrHeight);
	});
	
	//product image changer part 1
	$('.prod-sp').first().addClass('prod-active');
	
	$(window).load(function () {
		imgchanger();
		imgchanger1();
	});

	$(window).resize(function(){
		imgchanger();
		navheight11();
	});

	navheight11();
	productanchor();
	//imgchanger1();
	
});

//product image changer part 1
function imgchanger(){
	var imgHeight = $('.prod-active img').height();
	$("#prod-slider").height(imgHeight);
	$("#prod-slider-wrapper").height(imgHeight);
}

//product image changer part 2
function imgchanger1(){
	$('.prod-sp').hide();    
	$('.prod-active').show();

    $('#prod-button-next').click(function(){
		$('.prod-active').removeClass('prod-active').addClass('prod-oldActive');    
					   if ( $('.prod-oldActive').is(':last-child')) {
			$('.prod-sp').first().addClass('prod-active');
			}
			else{
			$('.prod-oldActive').next().addClass('prod-active');
			}
		$('.prod-oldActive').removeClass('prod-oldActive');
		$('.prod-sp').fadeOut();
		$('.prod-active').fadeIn();
		imgchanger();
	});
    
    $('#prod-button-previous').click(function(){
		$('.prod-active').removeClass('prod-active').addClass('prod-oldActive');    
			   if ( $('.prod-oldActive').is(':first-child')) {
			$('.prod-sp').last().addClass('prod-active');
			}
			   else{
		$('.prod-oldActive').prev().addClass('prod-active');
			   }
		$('.prod-oldActive').removeClass('prod-oldActive');
		$('.prod-sp').fadeOut();
		$('.prod-active').fadeIn();
		imgchanger();
	});
}


function navheight11() {
	var	height1 = $('.header').height();
	var	height2 = $('.prod-nav-height').height();
	var	totalheight = height2;

	$(window).scroll(function() {
		if( $(this).scrollTop() >= totalheight ) {
			$('.fixed-prod-nav').addClass('fixed-prod-nav-act');
			$('.show-at-fixed').css("visibility", "visible");
		} else {
			$('.fixed-prod-nav').removeClass('fixed-prod-nav-act');
			$('.show-at-fixed').css("visibility", "hidden");
		}
	});
}


function productanchor() {
  $('a[href*=#]:not([href=#])').click(function() {
    if($(".wrapper-prod-sub-nav").is(":visible"))
	{
		$('.product-menu').find('span.tl-btn2').addClass('icon-icon-ios7-arrow-down').removeClass('icon-icon-ios7-arrow-up');
		$('.wrapper-prod-sub-nav').css("visibility", "hidden");
	}
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
}