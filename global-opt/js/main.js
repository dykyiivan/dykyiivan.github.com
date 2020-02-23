$(function(){
  $('.reviews-slider').slick({
     slidesToShow: 3,
     prevArrow: '<button type="button" class="slick-prev"><img src="img/prev-arrow.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="img/next-arrow.png"></button>',
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        dots: true
  
      }
    }
  ]
  });

  $('.header__burger').click(function() {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  new WOW().init();
});
