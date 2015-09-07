
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


$(document).ready(function(){
	$("#reg-top").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
});