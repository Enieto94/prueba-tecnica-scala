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
	//  go to section id of anchor clicked
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 200
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	//  Detecta movimiento scroll
	$(window).scroll(function (event) {
		var scrollTop = $(window).scrollTop();
		console.log("Vertical " + scrollTop);
		if (scrollTop > 100) {
			$('.menu').css({ "top": "0", "left": "0", "background": "#000000bc", "width": "100%" });
		}
		if (scrollTop < 100) {
			$('.menu').css({ "top": "inherit", "left": "30%", "width": "40%", "background": "none" });
		}

	});

});