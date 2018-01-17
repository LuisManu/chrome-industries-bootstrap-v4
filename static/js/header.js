var cbpAnimatedHeader = (function() {

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

	$(document).on('click', '.navbar-toggler', function() {
		// $(this).find('.menu-btn').toggleClass('slideOutLeft');
		var navbarState = $(this).find('.material-icons').find('span').html();
		if (navbarState == 'menu') {
			navbarState = 'close';
		} else {
			navbarState = 'menu';
		}
		$(this).find('.material-icons').find('span').html(navbarState);
	});
	$(document).on('click', '#mobile-menu-accordion .nav-link', function() {
		var menuButtonState = $(this).find('.material-icons').html();
		if (menuButtonState == 'add') {
			menuButtonState = 'remove';
		} else {
			menuButtonState = 'add';
		}
		$(this).find('.material-icons').html(menuButtonState);
		$(this).toggleClass('bg-grey');
		$(this).toggleClass('mx-4');
		$(this).toggleClass('px-4')
	});
	

	// $('.dropdown').hover(
	// 	function() {
	// 		$(this).find('.dropdown-menu').addClass('d-block').addClass('slideInDown');
	// 	}, function() {
	// 		$(this).find('.dropdown-menu').removeClass('d-block');
	// 	}
	// );

	// $('.dropdown-product-categories a').hover(
	// 	function() {
	// 		$(this).find(':first-child').removeClass('pt-2');
	// 	}, function() {
	// 		$(this).find(':first-child').addClass('pt-2');
	// 	}
	// );
})();