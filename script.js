$(function() {
	$('.popup-link').click(function() {
		$('.popup-wrapper').css('display','flex');
    return false;
	});
	$('.popup-wrapper').click(function(e) {
		if(this === e.target) {
		     $('.popup-wrapper').css('display','none');
	  }
	});
	// начало кода слайдер Slick
	$('.slider-nav').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: "<div class='left-arrow'></div>",
		nextArrow: "<div class='right-arrow'></div>",
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 897,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					mobileFirst: true
				}
			}
		]
	});
	// конец кода слайдер Slick
	// код меню при 320px
	$('.header__toogle-menu').on('click', function() {
		if ($('.header__nav').css('display') == 'none') {
			$('.header__nav').show();
			$(this).removeClass('icon-menu');
			$(this).addClass('icon-cancel-1');
		} else {
			$('.header__nav').hide();
			$(this).removeClass('icon-cancel-1');
			$(this).addClass('icon-menu');
		}
	});
  $(window).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth > 704) {
			var bgPositionEllipse = windowWidth - windowWidth/1.7;
		} else if (windowWidth >= 337 && windowWidth <= 704) {
			var bgPositionEllipse = windowWidth-397;
		} else if (windowWidth < 337) {
			var bgPositionEllipse = -60;
		}
		$('.about-me').css('background-position-x', bgPositionEllipse + 'px');

		if ($('.header__toogle-menu').css('display') == 'none') {
      $('.header__nav').show();
			$('.header__toogle-menu').removeClass('icon-menu');
			$('.header__toogle-menu').addClass('icon-cancel-1');
    } else {
			$('.header__nav').hide();
			$('.header__toogle-menu').removeClass('icon-cancel-1');
			$('.header__toogle-menu').addClass('icon-menu');
    }

	});
});
