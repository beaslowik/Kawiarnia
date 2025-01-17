$(window).load(function() {

      /*
      SCROLL ON CLICK
      */
      $(".bottom_arrow").on("click",
            function() {
                  var myHref = $(this).data("href");
                  $("html, body").animate({
                        scrollTop: $("#" + myHref).position().top
                  }, 1000);
            });

      $("li").on("click",
            function() {
                  var myHref = $(this).data("href");
                  $("html, body").animate({
                        scrollTop: $("#" + myHref).position().top
                  }, 1000);
            });

      $(".arrow_go_top").on("click",
            function() {
                  var myHref = $(this).data("href");
                  $("html, body").animate({
                        scrollTop: $("#" + myHref).position().top
                  }, 1000);
            });

      /*
      STICKY MENU
      */
      var myNavigation = $('.main_nav');
      var myNavigationPosition = myNavigation.offset().top;
      var height1 = $('.page_intro').height();
      var height2 = $('.spacer_beans').height();
      var height3 = $('.page_menu').height() / 3;
      var allHeight = height1 + height2 + height3;

      $(document).on('scroll', function() {
            var scrollPosition = $(window).scrollTop();
            if (scrollPosition > allHeight) {
                  myNavigation.addClass('sticky');
            } else {
                  myNavigation.removeClass('sticky');
            }

      });

      $(window).enllax();

});
