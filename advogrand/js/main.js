$(function(){

  //Filter Tabs
  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if(cat === "all") {
      $("[data-category]").removeClass("hide");
    } else {
      $("[data-category]").each(function() {
        let workCat = $(this).data("category");

        if (workCat != cat) {
          $(this).addClass('hide');
        } else (
          $(this).removeClass('hide')
        )

      });
    }
  });

  //Slick Slider
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/partners/right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/partners/left.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Mobile Menu
  $(".header__burger").on("click", function(e) {
    $(".header__burger, .menu").toggleClass("active");
  });

  // Scroll to section
  $(".menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
  });

  // Counter
  $(".counter__amount").counterUp({
    delay: 5,
    time: 500
  });

  //Modal
  $(".form__close").on("click", function() {
    $(".overlay, #consultation, #order").fadeOut(700);
  });

  $("[data-modal=consultation]").on("click", function(){
    $("#consultation").fadeIn();
  });
  
  $("[data-modal=order]").each(function(i) {
    $(this).on("click", function () {
      $("#order .form__subtitle").text($(".tariff-package__title").eq(i).text());
      $("#order").fadeIn("slow");
    });
  });
  
  // Validate Form
  function validateForms(form) {
    $(form).validate({
      rules: {
        phone: {
          required: true
        },
        name: {
          required: true
        },
      },
      messages: {
        name: "Неохідно ввести Ваше ім'я",
        phone: "Неохідно ввести номер телефону"
      },
    });
  }
 validateForms("#consultation form");
 validateForms("#order form");
 validateForms("#contact__form");

  //Mask for Phone input
  $("input[name=phone]").mask("+38 (999) 99-9999-99");

});
