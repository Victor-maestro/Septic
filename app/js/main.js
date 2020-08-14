'use strict';

/* jQuery */
$(function() {
  // Mask form
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');
});

/* Javascript */

// Swiper Dealer
var swiper_dealer = new Swiper('.swiper-dealer', {
	speed: 1200,
	spaceBetween: 40,
	breakpointsInverse: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {

		1200: { 
			slidesPerView: 3,
			centeredSlides: false,
			touchRatio: 0,
		},
		768: { 
			slidesPerView: 2,
			centeredSlides: false,
			touchRatio: 1,
			autoplay: {
				delay: 5000,
			},
		},
		320: { 
			spaceBetween: 20,
			slidesPerView: 1,
			centeredSlides: true,
			touchRatio: 1,
		}, 
	},
	
});
