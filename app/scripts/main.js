$(document).ready(function(){
    
});

$(window).load(function(){
    $("#nav").scroll_navi();

    var $body = $('body');

    $body.addClass('ready');

    var mainSectionHeight = $('#section1').outerHeight();
    var navHasChanged = false;
    var animationHasChanged = false;

    $(document).scroll(function(){
        var scrollY = $(document).scrollTop();
        if (scrollY > mainSectionHeight-1 && !navHasChanged) {
            $('#nav').addClass('various');
            navHasChanged = true;
        }

        if (scrollY < mainSectionHeight && navHasChanged) {
            $('#nav').removeClass('various');
            navHasChanged = false;
        }

        if(scrollY > mainSectionHeight/2 && !animationHasChanged) {
            $('.description-product .product1').addClass('various1');
            $(".description-product .product2").delay(400).queue(function(){
                $(this).addClass("various1");
            });
            $(".description-product .product3").delay(800).queue(function(){
                $(this).addClass("various1");
            });
        }

    });

});


$('form').submit(function(event){
    event.preventDefault();
    var postData = $( this ).serializeArray();
    $.ajax({
        url: "http://localhost:8080/information",
        type: 'POST',
        data: postData,
        success: function(){
            //panel success
        },
        error: function(){
            //panel error
        }
    }).done(function() {
            $('#myModal').modal('toggle');
        });
});





