'use strict';

/* jQuery */
$(function() {
  // Mask form
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');

	// Section modal
	$(".popup").magnificPopup({
		showCloseBtn: true,
	});
	$('.close').on( "click", function() {
		$.magnificPopup.close();
	});

	// $(".btn-modal").click(function(evt){
	// 	evt.preventDefault();
	// 	$(".modal").removeClass("hidden");
	// 	$(".overlay").removeClass("hidden");
	// });
	// $(".overlay, .close").click(function(){
	// 	$(".modal").addClass("hidden");
	// 	$(".overlay").addClass("hidden");
	// });
	// $(document).keyup(function(e) {
	// 	if (e.keyCode === 27) { 
	// 		$(".modal").addClass("hidden");
	// 		$(".overlay").addClass("hidden");
	// 	}
	// });


	// Show form in instruction
	$('.radio-msngs').click(function () {
		$(this).closest('.instruction__msngs').addClass('hidden');
		$('.form__wrap').removeClass('hidden')
	});

	// Radio hint
	$('.hint').click(function (evt) {
		evt.preventDefault();
		
		$(this).children('.hint__inner').toggleClass('hidden');
	});

	// Selected checkbox
	$('.options_checkbox input:checkbox').click(function(){
		if ($(this).is(':checked')) {
			$(this).parent().addClass('checkbox_active');
			$('.options_checkbox input:checkbox').not(this).prop('checked', false);
			$('.options_checkbox input:checkbox').not(this).parent().removeClass('checkbox_active');
		}
	});


	// Radio click
	$('.radio').click(function(e){
		var $input = $(this).children('input[type="radio"]');
		if (e.target !== $input[0]) {
				$input.click();
		}
  });

	// Quantity input -/+
	$('.number__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.number__plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
	});

	// Количество сантехнических точек
	$('.number .number__minus, .number .number__plus').click(function(){
		$('.radio__input[name="san_point"]').prop('checked', false);
	});

	$('.radio__input[name="san_point"]').click(function(){
		if ($(this).is(':checked')) {
			$('.number .number__input').val('0');
		}
	});


	// Сhanging the image
	$('input[name="prize"]').click(function(){

		var target = 'url(./img/quiz/prize/' + $(this).attr('data-value') + '.png)';
		$('.info__final').css('backgroundImage', target);

		var targetText = $(this).next('.radio__label').text();
		$('.info__denomination').text(targetText);

	});


	// Form-quiz
	var steps = $(".quiz__form").children(".quiz__tab");
	var currentStep = 0;
	var slideCount = steps.length;

	$(".slide__summ").text(slideCount);

	for (var y = 0; y < steps.length; y++) {
		$(".quiz__steps").append('<span class="quiz__step"></span>')
	}

	var bullets = $(".quiz__steps").children(".quiz__step");
	$(bullets[0]).addClass("active");


	var stepsLeft = slideCount - 1;
	$(".info__number").text(stepsLeft);
	

	$(".nav__btn_prev").on("click", function(evt){ 
		evt.preventDefault();
		
		stepsLeft++;

		currentStep--;
		changeStep(currentStep);
		$(".slide__current").text(currentStep + 1);

		if (currentStep === 0) { 
			$(this).hide();
			$(".nav__prev").show();
		} 

		if (currentStep === steps.length-2) { 
			$(".info__steps").show();
			$(".info__final").hide();
		} 

		$('.hint__inner').addClass('hidden');

	});

	$(".nav__btn_next").click(function(){ 
		if (steps[0]) { 
			$(".nav__btn_prev").show();
			$(".nav__prev").hide();
		}

		if (currentStep == steps.length-2) {
			$(".info__steps").hide();
			$(".info__final").show();
		}

		if (currentStep == steps.length-1) {
			$(this).closest(".quiz__nav").hide();
			$(".quiz__tab").hide();
			$(".quiz__steps").hide();
			$(".quiz__slide").hide();
			$(".quiz__final").show();
			$(".quiz__note").show();
			$(".timer").removeClass("hidden");
			$(".quiz__form").addClass('final-mobile');
		}

		stepsLeft--;

		currentStep++;
		changeStep(currentStep);

		$(".slide__current").text(currentStep + 1);
		$(".discounts").addClass('discounts_big');
		setTimeout(function () {
			$(".discounts").removeClass('discounts_big');
		}, 1000);

		$('.hint__inner').addClass('hidden');
	});

	function changeStep(i) {
		$(steps).hide();
		$(steps[i]).show();

		$(bullets[i]).addClass('active');
		$(bullets[i]).next().removeClass('active');

		$(".info__number").text(stepsLeft);
	}

});

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

		992: { 
			slidesPerView: 3,
			centeredSlides: false,
			touchRatio: 0,
		},
		768: { 
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
			touchRatio: 1,
			autoplay: {
				delay: 5000,
			},
		},
		320: { 
			slidesPerView: 1,
			centeredSlides: true,
			touchRatio: 1,
		}, 
	},
	
});

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".top__title, .top__date, .top__text", {duration: 3, opacity: 0, x: 300, stagger: 0.4, ease: "elastic"});
tl.from(".top__btn", {duration: 1.5, delay: -0.5, opacity: 0, scale: 0, ease: "bounce"});
tl.from(".top__stamp", {duration: 2, opacity: 0, scale: 2, ease: "expo"});

gsap.from(".top__sale_big", {repeat: -1, duration: 1.5, opacity: 0, scale: 0.5, ease: "power3"});



gsap.registerPlugin(ScrollTrigger);

gsap.from(".wrap-top__cloud_1", {
  xPercent: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap-top",
    scrub: true
  }, 
});

gsap.from(".wrap-top__cloud_2", {
  xPercent: 150,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap-top",
    scrub: true
  }, 
});

gsap.from(".wrap-top__cloud_3", {
  xPercent: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap-top",
    scrub: true
  }, 
});

// gsap.from(".wrap-top__home", {
// 	scale: 1.2,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".wrap-top",
//     scrub: true
//   }, 
// });

gsap.from(".tt_1", {
	scrollTrigger: {
		trigger: ".tt_1",
		toggleActions: "play none none none",
		start: "top 80%",
	},
	duration: 1.5, 
	opacity: 0, 
	x: 300, 
	ease: "bounce"
});

gsap.from(".tt_2", {
	scrollTrigger: {
		trigger: ".tt_2",
		toggleActions: "play none none none",
		start: "top 80%",
	},
	duration: 1.5, 
	opacity: 0, 
	x: 300,  
	ease: "bounce"
});

gsap.from(".tt_3", {
	scrollTrigger: {
		trigger: ".tt_3",
		toggleActions: "play none none none",
		start: "top 80%",
	},
	duration: 1.5, 
	opacity: 0, 
	x: 300, 
	ease: "bounce"
});

gsap.from(".instruction__block_image", {
	scrollTrigger: {
		trigger: ".instruction__wrap",
		toggleActions: "play none none none",
		start: "top 60%",
	},
	duration: 2, 
	x: -250,
	opacity: 0,
	ease: "power2"
});

gsap.from(".instruction__block_text", {
	scrollTrigger: {
		trigger: ".instruction__wrap",
		toggleActions: "play none none none",
		start: "top 60%",
	},
	duration: 2, 
	x: 250,
	opacity: 0,
	ease: "power2"
});

gsap.from(".instruction__msngs-item", {
	scrollTrigger: {
		trigger: ".instruction__wrap",
		toggleActions: "play none none none",
		start: "top 60%",
	},
	duration: 1, 
	delay: 1,
	y: 150,
	opacity: 0,
	stagger: 0.4,
	ease: "power2"
});

gsap.from(".producer__item", {
	scrollTrigger: {
		trigger: ".producer",
		toggleActions: "play none none none",
		start: "top 60%",
	},
	duration: 2, 
	scale: 0,
	opacity: 0,
	stagger: 0.4,
	ease: "power2"
});


gsap.from(".guarantee__stamp", {
	scrollTrigger: {
		trigger: ".guarantee",
		toggleActions: "play none none none",
		start: "top 70%",
		end: "bottom 70%",
		scrub: 1,
	},
	duration: 2, 
	x: -300,
	rotate: -360,
	ease: "power4"
});

gsap.from(".guarantee__text", {
	scrollTrigger: {
		trigger: ".guarantee",
		toggleActions: "play none none none",
		start: "top 70%",
		end: "bottom 70%",
		scrub: 3,
	},
	duration: 2, 
	x: 500,
	ease: "power4"
});


gsap.from(".features__item", {
	scrollTrigger: {
		trigger: ".features",
		toggleActions: "play none none none",
		start: "top 60%",
	},
	duration: 1.5, 
	y: 200,
	opacity: 0,
	stagger: 0.4,
	ease: "power2"
});


gsap.from(".reviews__yandex", {
	scrollTrigger: {
		trigger: ".reviews",
		toggleActions: "play none none none",
		start: "top 70%",
	},
	duration: 2, 
	x: 200,
	ease: "power2"
});


gsap.from(".contacts__block_content", {
	scrollTrigger: {
		trigger: ".contacts",
		toggleActions: "play none none none",
		start: "top 70%",
	},
	duration: 2, 
	x: -300,
	ease: "power2"
});

gsap.from(".contacts__block_map", {
	scrollTrigger: {
		trigger: ".contacts",
		toggleActions: "play none none none",
		start: "top 70%",
	},
	duration: 2, 
	x: 300,
	ease: "power2"
});