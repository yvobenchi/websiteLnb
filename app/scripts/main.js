$(document).ready(function(){
    

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
// var y = $(this).scrollTop();
// var divProductTitle = $( ".title-description-product" );
// var offset = divProductTitle.offset().top;
// if (y > offset/2) {
//     console.log("hello");
//     divProductTitle.animate({opacity:'0.9'},2000);
// }
// test=1;
// });



$(window).load(function(){
    $("#nav").scroll_navi();
	//animation in the title of homePage
	var div=$("#section1 #content_text h1");  
    div.delay(1000).animate({opacity:'1'},2000);
    // var div2=$("#section1 .punshline"); 
    // div2.animate({opacity:'1'},2000);

    //annimation in the title of product page
    

});





