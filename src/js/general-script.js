// Jquery Call
$(document).ready(function () {
	//OwlCarousel with id and options
	$('#testimonials').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 4000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			}
		}
	});

});