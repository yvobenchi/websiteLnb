$(document).ready(function(){
    
});

$(window).load(function(){
    Parse.initialize("Zc2Ozfm3pRaKbfSSr2SKepOaBXgj83CFO5VAoIsX", "uU4kPub39Ih1bGG7Zs7E0Q1ElQYfwwAWA6JXrdMk");

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
    var formData = $( this ).serializeArray(); 

    var UserContact = Parse.Object.extend("UserContact");
    var userContact = new UserContact();
     
    userContact.set("name", formData[0].value);
    userContact.set("email", formData[1].value);
    userContact.set("comment", formData[2].value);
     
    userContact.save(null, {
      success: function(userContact) {
        // Execute any logic that should take place after the object is saved.
        $('#myModal').modal('hide');
      },
      error: function(userContact, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

});





