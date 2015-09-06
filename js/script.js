
$(document).ready(function(e) {
	$('.with-hover-text, .regular-link').click(function (e) {
		e.stopPropagation();
	});

	/***************
	 * = Hover text *
	 * Hover text for the last slide
	 ***************/
	$('.with-hover-text').hover(
		function (e) {
			$(this).css('overflow', 'visible');
			$(this).find('.hover-text')
				.show()
				.css('opacity', 0)
				.delay(200)
				.animate(
				{
					paddingTop: '25px',
					opacity: 1
				},
				'fast',
				'linear'
			);
		},
		function (e) {
			var obj = $(this);
			$(this).find('.hover-text')
				.animate(
				{
					paddingTop: '0',
					opacity: 0
				},
				'fast',
				'linear',
				function () {
					$(this).hide();
					$(obj).css('overflow', 'hidden');
				}
			);
		}
	);

	var img_loaded = 0;
	var j_images = [];

});

jQuery( document ).ready(function() {
	jQuery('#reg-top').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0);
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#reg-top').fadeIn('fast');
		} else {
			jQuery('#reg-top').fadeOut('fast');
		}
	});
});