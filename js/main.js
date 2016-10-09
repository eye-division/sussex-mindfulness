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
    //lightbox.option({
      //'wrapAround': true
    //});
    
    // fitvid on embed
    //$('.media').fitVids();
    
  });

})(jQuery); // End of use strict
