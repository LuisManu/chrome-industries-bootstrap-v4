(function() {
	var waypoint = new Waypoint({
		element: document.getElementsByTagName('main'),
		handler: function(direction) {
			if (direction == 'down') {
				$('#nav-top').addClass('mt-n-47');
				$('#nav-top').removeClass('mt-0');
				$('#logo-header').addClass('fadeOut').removeClass('fadeIn');
				$('#logo-header-sm').removeClass('invisible').addClass('fadeIn').removeClass('fadeOut');
			} else {
				$('#nav-top').removeClass('mt-n-47');
				$('#nav-top').addClass('mt-0');
				$('#logo-header').removeClass('fadeOut').addClass('fadeIn');
				$('#logo-header-sm').addClass('invisible').removeClass('fadeIn').addClass('fadeOut');
			}
		},
		offset: -100
	});
	var waypoint = new Waypoint({
		element: document.getElementsByTagName('footer'),
		handler: function(direction) {
			console.log(direction);
			if (direction == 'down') {
				$('#nav-second').addClass('mt-n-80');
				$('#nav-second').removeClass('mt-0');
			} else {
				$('#nav-second').removeClass('mt-n-80');
				$('#nav-second').addClass('mt-0');
			}
		}
	});
})();