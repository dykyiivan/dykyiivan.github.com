$(function () {

  $(".burger").on("click", function (e) {
    $(".burger,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".menu__item a").on("click", function (e) {
    $(".burger,.menu").toggleClass("active");
  });

  $(".hero__btn").on("click", function (e) {
    $(".overlay, .modal").fadeIn(400);
    $("body").toggleClass("lock");
  });

  $(".modal__close").on("click", function () {
    $("body").toggleClass("lock"), $(".overlay, #callback").fadeOut(400);
  });

  $("input[type=tel]").inputmask({ mask: "+38(999) 999-9999" });

  $(".hero__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-next next-btn"><img src="images/right.svg"></button>',
    prevArrow:
      '<button type="button" class="slick-prev prev-btn"><img src="images/left.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".customers__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    nextArrow:
      '<button type="button" class="slick-next next-btn"><img src="images/right.svg"></button>',
    prevArrow:
      '<button type="button" class="slick-prev prev-btn"><img src="images/left.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".reviews__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow:
      '<button type="button" class="slick-next next-btn"><img src="images/right.svg"></button>',
    prevArrow:
      '<button type="button" class="slick-prev prev-btn"><img src="images/left.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("header__fixed");
    } else {
      $(".header").removeClass("header__fixed");
    }
  });

  // Scroll to anchor
  var $root = $("html, body");
  $('a[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );

    return false;
  });

  // Counter
  let a = 0;
  $(window).scroll(function () {
    let oTop = $("#about").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".numbers__count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 3000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });

  new JustValidate(".order-form", {
    rules: {
      username: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 20,
      },
    },
    messages: {
      username: {
        required: "Введіть Ваше імя",
        minLength: "Поле має містити щонайменше 3 символи",
      },
      tel: {
        required: "Введіть номер телефону",
        minLength: "Поле має містити щонайменше 10 цифр",
      },
    },
  });
  new JustValidate(".contact__form", {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
      surname: {
        required: true,
        minLength: 10,
        maxLength: 20,
      },
      message: {
        required: true,
        minLength: 10,
      },
    },
    messages: {
      name: {
        required: "Введіть Ваше імя",
        minLength: "Поле має містити щонайменше 3 символи",
      },
      surname: {
        required: "Введіть Ваше прізвище",
        minLength: "Поле має містити щонайменше 4 літери",
      },
      message: {
        required: "Введіть Ваше повідомлення",
        minLength: "Поле має містити щонайменше 10 символи",
      },
    },
  });
});
