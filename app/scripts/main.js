$(document).ready(function(){
    $("#nav").scroll_navi();
    $('.product-carousel').slick({
    	arrows: false,
    	autoplay: true,
    	autoplaySpeed: 4000,
    	pauseOnDotsHover: true,
    	speed: 400,
    	dots: true
	});
	$( ".slick-dots" ).find("li button").hide();
	$( ".slick-dots" ).find("li").each(function(i){
		if(i==0){
			$(this).append(" <i class='fa fa-map-marker fa-2x'></i>");
			$(this).append(" <div class='picto-txt'>Find</div> ");
		}
        else if(i==1){
			$(this).append(" <i class='fa fa-line-chart fa-2x'></i>");
			$(this).append(" <div class='picto-txt'>Improve</div> ");
		}
		else{
			$(this).append(" <i class='fa fa-users fa-2x'></i>");
			$(this).append(" <div class='picto-txt'>Share</div> ");
		}
    });
	
	
  });