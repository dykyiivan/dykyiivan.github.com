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
	$('#text').focus(function () {
		$('#hint').hide();
	});

	$('#email').focus(function () {
		$('#hidden').hide();
	});
	$('#message').focus(function () {
		$('#placeholder').hide();
	});

	$('#text').blur(function () {
		if ($(this).val().trim() === '') {
			$('#hint').show();
		}
	});
	$('#email').blur(function () {
		if ($(this).val().trim() === '') {
			$('#hidden').show();
		}
	});
	$('#message').blur(function () {
		if ($(this).val().trim() === '') {
			$('#placeholder').show();
		}
	});