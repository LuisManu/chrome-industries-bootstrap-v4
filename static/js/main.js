(function() {
    $('.free-rides a').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
    });
})();