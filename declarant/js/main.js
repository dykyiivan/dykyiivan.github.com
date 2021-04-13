$(function () {
  $(".burger").on("click", function (e) {
    $(".burger,.menu").toggleClass("active");
    $('body').toggleClass('lock');
  });
  $(".header__menu .menu__link").on("click", function(){
    $(".menu, .burger").removeClass("active");
    $('body').toggleClass('lock');
  })

  $(".benefits__btn").on("click", function () {
    $(".benefits__more-text").toggleClass("show");
  });

  $(".services__btn").on("click", function () {
    $(".services__show-all").addClass("show");
    $(".services__btn--all").hide();
    $(".services__btn--hide").show();
  });

  $(".services__btn--hide").on("click", function () {
    $(".services__show-all").removeClass("show");
    $(".services__btn--all").show();
    $(".services__btn--hide").hide();
  });

  // Services Slider 
  $(".services__slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ],
  });

  // Reviews Slider
  $('.reviews__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next reviews__btn reviews__btn--next"><img src="img/arrow-right.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev reviews__btn reviews__btn--prev"><img src="img/arrow-left.svg"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  $("input[type=tel]").inputmask({ "mask": "+38(999)99-999-99" });

});

new window.JustValidate('.form__body', {
  rules: {
    tel: {
      required: true,
    },
    name: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Введіть ваше ім'я"
    },
    tel: {
      required: "Введіть номер телефону"
    }

  },

});