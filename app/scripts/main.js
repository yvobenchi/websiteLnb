$(document).ready(function(){
    $("#nav").scroll_navi();

    // $(window).scroll(function() {
    //     var topvalue = win.scrollTop();
    //     var divProductTitle = $( ".title-description-product" ).offset.top;
    //     if(topvalue>=divProductTitle)
    //     {
    //         divProductTitle.animate({opacity:'1'},2000);
    //     }
    // });
});

// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     var divProductTitle = $( ".title-description-product" );
//     var offset = divProductTitle.offset().top;
//     if (y > offset/2) {
//         divProductTitle.animate({opacity:'1'},2000);
//     }
// });

$(window).load(function(){
	//animation in the title of homePage
	var div=$("#section1 #content_text h1");  
    div.delay(1000).animate({opacity:'1'},2000);
    // var div2=$("#section1 .punshline"); 
    // div2.animate({opacity:'1'},2000);

    //annimation in the title of product page
    

 //    var divProductTitle = $( ".title-description-product" );
	// var offset = divProductTitle.offset();
	// console.log($(window).scrollTop());
	// if($(window).scrollTop()>=offset.top){
	// 	console.log(offset);
	// 	divProductTitle.animate({opacity:'1'},2000);
	// }
});



