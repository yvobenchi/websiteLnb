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

    var $body = $('body');

    $body.addClass('ready');

    var mainSectionHeight = $('#section1').outerHeight();
    var navHasChanged = false;

    $(document).scroll(function(){

        var scrollY = $body.scrollTop();

        if (scrollY > mainSectionHeight && !navHasChanged) {
            $('#nav').addClass('various');
            navHasChanged = true;
        }

        if (scrollY < mainSectionHeight && navHasChanged) {
            $('#nav').removeClass('various');
            navHasChanged = false;
        }


    });

});





