
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
		//�������� ����������� ��������� ������� �� ������
		event.preventDefault();

		//�������� ������������� ���� � �������� href
		var id  = $(this).attr('href'),

		//������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
			top = $(id).offset().top;

		//��������� ������� �� ���������� - top �� 1500 ��
		$('body,html').animate({scrollTop: top}, 800);
	});
});