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
	
	$(document).on('click', '.spinner', function() {
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
			if (navLink.hasClass('nav-link')) {
				navLink.toggleClass('bg-grey').toggleClass('mx-4').toggleClass('px-4');
			}
			
		}
	});
})();