(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    // hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });

    // Lightbox2 options
    /*lightbox.option({
      'wrapAround': true
    });
    */
    // fitvid on embed
    //$('.media').fitVids();
    //
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 8000,
      animationSpeed: 600,
      touch: true
    });

     // expander Bourbon
    $('.expander-trigger').click(function(){
      $(this).toggleClass("expander-hidden");
    });

    // scrollTo
    $('#mbctlinks').localScroll({offset:-250, duration:800});

  });

})(jQuery); // End of use strict
