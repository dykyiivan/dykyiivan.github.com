$(function () {

  $(".header__burger").on("click", function (e) {
    $(".header__burger,.header__menu").toggleClass("active");
    $('body').toggleClass('lock');
  })


  $("#datepicker").datepicker();

  $('.reviews__inner').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
    ]

  });

  $('.counter-item__num').countUp({
    'time': 2000,
    'delay': 100
  });









});