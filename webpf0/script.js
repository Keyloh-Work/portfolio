$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});


  $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;
});

$('.slider').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 7000,
	infinite: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	cssEase: 'linear',
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 769,
		settings: {
			slidesToShow: 1.5,
		}
	},
	{
		breakpoint: 426,
		settings: {
			slidesToShow: 1,
		}
	}
]
});



