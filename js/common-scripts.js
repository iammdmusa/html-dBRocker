

jQuery(document).ready(function($){
	
	$(window).load(function(){
		// Carousel Slider code begins
		var viewarea;
		var viewarea1;
		var height2;
		var active_slide;
		var winWdth;
		
		var maxItemCount = $('#carousel-panel > div.carousel-thumb').length;
		
		if(maxItemCount > 5) initiateProductSlider(maxItemCount)
		else if(maxItemCount <= 5 && maxItemCount > 0) $('#carousel-panel').css({'left':0})
		
		winWdth = $(window).width();
		if(winWdth > 1280){
			width_height1();
		}
		else if(winWdth > 980){
			width_height2();
		}
		else
		width_height3();
		
		$(window).resize(function(){
			winWdth = $(window).width();
			if(winWdth > 1280){
				width_height1();
			}
			else if(winWdth > 980){
				width_height2();
			}
			else
			width_height3();
		});
				
		function width_height1(){
			viewarea = winWdth -190;
			viewarea1 = viewarea/5;
			
			$('.carousel-thumb').css('width',viewarea1);
			$('#carousel-panel').css('left',-viewarea1);
		
			var myVar = setInterval(function(){ myTimer() }, 250);
			function myTimer() {
				height2 = $('.carousel-thumb img').height();
				$('.left-arrow').css('height',height2);
				$('.right-arrow').css('height',height2);
			}
			active_slide=2;
		}
		
		function width_height2(){
			viewarea = winWdth -190;
			viewarea1 = viewarea/3;
			//alert(viewarea);
			
			$('.carousel-thumb').css('width',viewarea1);
			$('#carousel-panel').css('left',-viewarea1);
		
			var myVar = setInterval(function(){ myTimer() }, 250);
			function myTimer() {
				height2 = $('.carousel-thumb img').height();
				$('.left-arrow').css('height',height2);
				$('.right-arrow').css('height',height2);
			}
			active_slide=1;
		}
		
		function width_height3(){
			viewarea = winWdth -190;
			viewarea1 = viewarea/1;
			
			$('.carousel-thumb').css('width',viewarea1);
			$('#carousel-panel').css('left',-viewarea1);
		
			var myVar = setInterval(function(){ myTimer() }, 250);
			function myTimer() {
				height2 = $('.carousel-thumb img').height();
				$('.left-arrow').css('height',height2);
				$('.right-arrow').css('height',height2);
			}
			active_slide=0;
		}
		
		function initiateProductSlider(maxItemCount){
			var presentlyRunning			= false	
			var	currentlyShowingSlide		= 0
			var	animationSpeed				= 400
			var sliderIntervalTimer			= 3000
			var sliderEasing				= 'easeInOutCubic'
			var maxItemCount				= maxItemCount
			
			$('#carousel-panel').width( ( maxItemCount * viewarea1 ) +(2 * viewarea1) )

			$('#carousel-panel > div.carousel-thumb').eq(0).css({'margin-left' : viewarea1})
			$('#carousel-panel > div.carousel-thumb').eq(active_slide).addClass('active')
		
			$('#left-navigation-arrow').on('click', function(){
				if(presentlyRunning) return false
				clearInterval(autoSlidingPointer)
				showPreviousItems()
				autoSlidingPointer = setInterval(showNextItems, sliderIntervalTimer )
			})
	
			$('#right-navigation-arrow').on('click', function(){
				if(presentlyRunning) return false
				clearInterval(autoSlidingPointer)
				showNextItems()
				autoSlidingPointer = setInterval(showNextItems, sliderIntervalTimer )
			})
			
			function showPreviousItems(){
				presentlyRunning = true
				$('#carousel-panel > div.carousel-thumb').eq(0).css({'margin-left' : 0})
				
				$('#carousel-panel > div.carousel-thumb:last-child').prependTo('#carousel-panel')
				
				$('#carousel-panel > div.carousel-thumb').eq(0).stop(true, true).animate({'margin-left': viewarea1}, animationSpeed, sliderEasing, function(){
					
					$('#carousel-panel > div.carousel-thumb').removeClass('active')
					$('#carousel-panel > div.carousel-thumb').eq(active_slide).addClass('active')
					
					presentlyRunning = false
				})
			}

			function showNextItems(){
				presentlyRunning = true
				$('#carousel-panel > div.carousel-thumb:last-child').css({'margin-left' : 0})
				
				$('#carousel-panel > div.carousel-thumb').eq(0).stop(true, true).animate({'margin-left': 0}, animationSpeed, sliderEasing, function(){
					$('#carousel-panel > div.carousel-thumb').eq(0).appendTo('#carousel-panel')
					$('#carousel-panel > div.carousel-thumb').eq(0).css({'margin-left' : viewarea1})
					
					$('#carousel-panel > div.carousel-thumb').removeClass('active')
					$('#carousel-panel > div.carousel-thumb').eq(active_slide).addClass('active')
					presentlyRunning = false
				})
			}
			var autoSlidingPointer = setInterval(showNextItems, sliderIntervalTimer )
			

		} // end initiateCarouselSlider()
	});
	
	
	
	

});

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
$.easing["jswing"]=$.easing["swing"];$.extend($.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return $.easing[$.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-$.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return $.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return $.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})