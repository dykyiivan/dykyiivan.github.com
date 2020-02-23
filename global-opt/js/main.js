$(function(){
     // Scroll
     var margin = 0;
     $("a").click(function() { 
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px"
      }, {
         duration: 1600, 
         easing: "swing"
      });
      return false;
   });

// Slick Slider
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
  // Mobile Menu
  $('.header__burger').click(function() {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Wow.js
  new WOW().init();




});
