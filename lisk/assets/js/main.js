$(function(){

  $('.select').niceSelect();

  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $(".tabs .tab")
    .click(function (e) {
      e.preventDefault();
      $(".tabs .tab")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".tab__item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");
  
  $('.we-offer__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev we-offer__prev we-offer__btn"></button>',
    nextArrow: '<button type="button" class="slick-next we-offer__next we-offer__btn"></button>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });


  $(".categories__tabs .categories__tab")
    .click(function (e) {
      e.preventDefault();
      $(".categories__tabs .categories__tab")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".categories__item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");
  
  $(".best-seller__categories .best-seller__tab")
    .click(function (e) {
      e.preventDefault();
      $(".best-seller__categories .best-seller__tab")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".best-seller__item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");
  
  $(".brand__container").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

  $('.btn-categories').on('click', function () {
    $('.categories-list').toggleClass('show');
  });

  $(".header__burger").on("click", function (e) {
    $(".header__burger,.nav__list").toggleClass("active");
    $('body').toggleClass('lock');
  })
  
});