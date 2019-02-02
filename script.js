
$(function() {
	$('.icon-phone-circled, .zakaz-button, #order .red-button').click(function() {
		$('#popup-container').css('display','flex');
    return false;
	});
	$('#popup-container').click(function(e) {
		if(this === e.target) {
		     $('#popup-container').css('display','none');
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
	$('#menu320px').on('click', function() {
		if ($('#menu').css('display') == 'none') {
			$('#menu').show();
			$(this).removeClass('icon-menu');
			$(this).addClass('icon-cancel-1');
		} else {
			$('#menu').hide();
			$(this).removeClass('icon-cancel-1');
			$(this).addClass('icon-menu');
		}
	});
  $(window).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth > 704) {
			var bgPositionMen = windowWidth - windowWidth/1.7;
		} else if (windowWidth >= 337 && windowWidth <= 704) {
			var bgPositionMen = windowWidth-397;
		}	else if (windowWidth >= 337 && windowWidth <= 704) {
			var bgPositionEllipse = -60;
			var bgPositionMen = windowWidth-337+78;
			$('#about-me .fixed-container').css('background-position-x', bgPositionMen + 'px');
		}
		$('#about-me').css('background-position-x', bgPositionEllipse + 'px');

		if ($('#menu320px').css('display') == 'none') {
      $('#menu').show();
			$('#menu320px').removeClass('icon-menu');
			$('#menu320px').addClass('icon-cancel-1');
    } else {
			$('#menu').hide();
			$('#menu320px').removeClass('icon-cancel-1');
			$('#menu320px').addClass('icon-menu');
    }

	});
});
