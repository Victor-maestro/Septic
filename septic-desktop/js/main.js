'use strict';
/* jQuery */

$(function () {
  // Mask form
  $('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99'); // Section modal

  $(".popup").magnificPopup({
    showCloseBtn: true
  });
  $('.close').on("click", function () {
    $.magnificPopup.close();
  }); // $(".btn-modal").click(function(evt){
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
  // Radio hint

  $('.hint').click(function (evt) {
    evt.preventDefault();
    $(this).children('.hint__inner').toggleClass('hidden');
  }); // Selected checkbox

  $('.options_checkbox input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      $(this).parent().addClass('checkbox_active');
      $('.options_checkbox input:checkbox').not(this).prop('checked', false);
      $('.options_checkbox input:checkbox').not(this).parent().removeClass('checkbox_active');
    }
  }); // Radio click

  $('.radio').click(function (e) {
    var $input = $(this).children('input[type="radio"]');

    if (e.target !== $input[0]) {
      $input.click();
    }
  }); // Quantity input -/+

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
  }); // Количество сантехнических точек

  $('.number .number__minus, .number .number__plus').click(function () {
    $('.radio__input[name="san_point"]').prop('checked', false);
  });
  $('.radio__input[name="san_point"]').click(function () {
    if ($(this).is(':checked')) {
      $('.number .number__input').val('0');
    }
  }); // Сhanging the image

  $('input[name="prize"]').click(function () {
    var target = 'url(./img/quiz/6/' + $(this).attr('data-value') + '.png)';
    $('.info__final').css('backgroundImage', target);
    var targetText = $(this).next('.radio__label').text();
    $('.info__denomination').text(targetText);
  }); // Form-quiz

  var steps = $(".quiz__form").children(".quiz__tab");
  var currentStep = 0;
  var slideCount = steps.length;
  $(".slide__summ").text(slideCount);

  for (var y = 0; y < steps.length; y++) {
    $(".quiz__steps").append('<span class="quiz__step"></span>');
  }

  var bullets = $(".quiz__steps").children(".quiz__step");
  $(bullets[0]).addClass("active");
  var stepsLeft = slideCount - 1;
  $(".info__number").text(stepsLeft);
  $(".nav__btn_prev").on("click", function (evt) {
    evt.preventDefault();
    stepsLeft++;
    currentStep--;
    changeStep(currentStep);
    $(".slide__current").text(currentStep + 1);

    if (currentStep === 0) {
      $(this).hide();
      $(".nav__prev").show();
    }

    if (currentStep === steps.length - 2) {
      $(".info__steps").show();
      $(".info__final").hide();
    }

    $('.hint__inner').addClass('hidden');
  });
  $(".nav__btn_next").click(function () {
    if (steps[0]) {
      $(".nav__btn_prev").show();
      $(".nav__prev").hide();
    }

    if (currentStep == steps.length - 2) {
      $(".info__steps").hide();
      $(".info__final").show();
    }

    if (currentStep == steps.length - 1) {
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
  } // WOW


  var wow = new WOW({
    boxClass: 'wow',
    offset: 100,
    mobile: false
  });
  $('.top__title, .top__date, .top__text').addClass('animated bounceInRight');
  $('.top__stamp').addClass('animated bounceIn');
  $('.title-text').addClass('animated flipInX');
  $('.instruction__title, .instruction__uptitle, .instruction__lst-item').addClass('animated fadeInRight');
  $('.instruction__picture, .reviews__yandex').addClass('animated zoomIn');
  $('.guarantee__stamp').addClass('animated slideInLeft');
  $('.guarantee__text').addClass('animated slideInRight');
  $('.features__item').addClass('animated slideInUp');
});
new WOW().init();
/* Javascript */
// Swiper Dealer

var swiper_dealer = new Swiper('.swiper-dealer', {
  speed: 1200,
  spaceBetween: 40,
  breakpointsInverse: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      touchRatio: 0
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      touchRatio: 1,
      autoplay: {
        delay: 5000
      }
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      centeredSlides: true,
      touchRatio: 1
    }
  }
});