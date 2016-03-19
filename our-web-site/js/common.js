$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.main-navigation');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
})