
(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#spinner").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#wrapper").delay(50).fadeOut("slow");

      });       

  	})



   /*----------------------------------------------------*/

  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*----------------------------------------------------*/

   $('#myInput').on('input', function() {
	const val = $(this).val().toUpperCase();
	$(".program_card").each(function() {
 
		if ($(this).html().toUpperCase().indexOf(val) !== -1) {
			$(this).show()
		} else {
			$(this).hide()
 
		}
	});
 })
 
	

})(jQuery);



