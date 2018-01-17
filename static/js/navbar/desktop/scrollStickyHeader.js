(function() {
	var docElem = document.documentElement,
		// header = document.querySelector('.header'),
		header = $('.header');
		didScroll = false,
		changeHeaderOn = 42;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 33 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.animate({bottom: '46px'});
			$('#nav-second').addClass('fixed-top');

			$('#logo-header').addClass('fadeOut').removeClass('fadeIn');
			
			$('#logo-header-sm').removeClass('invisible').addClass('fadeIn').removeClass('fadeOut');
		}
		else {
			header.animate({bottom: 0});
			$('#nav-second').removeClass('fixed-top');

			$('#logo-header').removeClass('fadeOut').addClass('fadeIn');

			$('#logo-header-sm').addClass('invisible').removeClass('fadeIn').addClass('fadeOut');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
})();