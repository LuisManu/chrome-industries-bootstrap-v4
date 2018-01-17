(function() {

	$(document).on('click', '.navbar-toggler', function() {
		var navbarState = $(this).find('.material-icons').find('span').html();
		if (navbarState == 'menu') {
			navbarState = 'close';
		} else {
			navbarState = 'menu';
		}
		$(this).find('.material-icons').find('span').html(navbarState);
	});
	
	$(document).on('click', '#mobile-menu-accordion .nav-link', function() {
		var navLink = $(this);
		var menuButton = navLink.find('.material-icons');
		var menuButtonState = menuButton.html();
		var spinState;

		menuStateChange();
		toggleClassIcon();

		function menuStateChange() {
			if (menuButtonState == 'add') {
				menuButtonState = 'remove';
				spinState = 'spin-left';
			} else {
				menuButtonState = 'add';
				spinState = 'spin-right';
			}
		}

		function toggleClassIcon() {
			menuButton.toggleClass(spinState);

			setTimeout(function () {
				menuButton.toggleClass(spinState);
				menuButton.html(menuButtonState);
			}, 700);

			navLink.toggleClass('bg-grey').toggleClass('mx-4').toggleClass('px-4');
		}
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