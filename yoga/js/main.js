$(document).ready(function () {

  // Slick Slick
  $('.waiting__inner').slick({
    className: "center",
    centerMode: true,
    arrows: false,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.instructors__inner').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true
  });

  $('.reviews__inner').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev__icon.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next__icon.png"</button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]

  });

  // Magnific PopUp
  $(".assurance__item img").magnificPopup({
    items: {
      src: 'img/certificate__placeholder.jpg'
    },
    type: 'image'
  })

  // Validate Form
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required"
      },
      messages: {
        name: " Будь-ласка, введіть Ваше ім'я",
        phone: "Введіть номер телефону"
      }
    });
  }
  validateForms("#consultation form");
  validateForms("#order form");


  // Mask for Input Form
  $("input[name=phone]").mask("+38(999)999-99-99");

  // Modal Form
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".schedule__btn").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__subtitle").text($(".schedule__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  // Close Modal From
  $(".modal__close").on("click", function () {
    $(".overlay, #conslutation, #order").fadeOut("slow");
  });

});