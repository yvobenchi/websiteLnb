$(document).ready(function() {

    var maskIsShown = true;

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100 && maskIsShown) {
            $('.header-background').removeClass("bg");
            maskIsShown = false;
        }
        else if ($(window).scrollTop() < 100 && !maskIsShown) {
            $('.header-background').addClass("bg");
            maskIsShown = true;
        }
    });

    $('.header-background ul li a').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var elem = $(target);
        var offsetTop = elem.offset().top;
        var body = $("html, body");
        body.animate({
            scrollTop:offsetTop
        }, '500', 'swing');
    });

});