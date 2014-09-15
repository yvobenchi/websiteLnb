(function ( $ ) {

    $.fn.scroll_navi = function(options) {
        
        var defaults = {
            speed: 1000
        };
        
        var settings = $.extend( {}, defaults, options );
        
        return this.each( function() {
            var elem = $(this);
            var elem_a = "#"+elem.attr("id")+" a";
            
            $(elem_a).click(function(event){
				var link_outerpage = $(this).attr("data-outerpage");
				if(link_outerpage=='true')
				{
					console.log("this is outerpage link");	
				}
				else{
                event.preventDefault();
					var link_add = $(this).attr("href");
					var pos = $(link_add).offset().top;
					$('html, body').animate({scrollTop: pos}, settings.speed);
				}
            });
            
        });
    };
 
}( jQuery ));