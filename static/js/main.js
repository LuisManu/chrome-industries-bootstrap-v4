(function() {
	$('.btn-hover').hover(
		function() {
			$(this).find('span').addClass('btn-line');
		}, function() {
			$(this).find('span').removeClass('btn-line');
		}
	);
})();