$(document).ready(function () {



$(".bottom_arrow").on("click",
    function(){
        var myHref = $(this).data("href");
        $("html, body").animate({scrollTop: $("#" + myHref).position().top}, 1000);



    });

    $("li").on("click",
        function(){
            var myHref = $(this).data("href");
            $("html, body").animate({scrollTop: $("#" + myHref).position().top}, 1000);



        });


//STICKY MENU


    var myNavigation = $('.main_nav');

    var myNavigationPosition = myNavigation.offset().top;
    var height1 = $('.page_intro').height();
    console.log(height1)
    var height2 = $('.spacer_beans').height();
    console.log(height2)
    var height3 = $('.page_menu').height()/2;
    console.log(height3)

    var allHeight = height1 + height2+ height3;


    $(document).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();

        if(scrollPosition > allHeight) {
            console.log('wiwiwi');
            myNavigation.addClass('sticky');
        } else {
            myNavigation.removeClass('sticky');
        }

    });

    //$(window).on('resize', function () {
    //    myNavigationPosition = myNavigation.offset().top;
    //});



    $(window).enllax();



});

