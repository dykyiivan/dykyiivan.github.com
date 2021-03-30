$(function () {
  $(".burger").on("click", function (e) {
    $(".burger,.menu__list").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".form__btn--search").on("click", function () {
    $(".overlay").addClass("open");
    $(".search").addClass("active");
  });
  $(".search-mobile__close").on("click", function () {
    $(".overlay").removeClass("open");
    $(".search").removeClass("active");
  });

  $(".product__rating, .rating").rateYo({
    rating: 4.5,
    starWidth: "13px",
    normalFill: "#ccc",
  });

  $(".user-comment__rating").rateYo({
    rating: 4,
    starWidth: "13px",
    readOnly: true,
    normalFill: "#ccc",
  });
  $(".prod-feedback__rating--choose").rateYo({
    rating: 0,
    starWidth: "13px",
    normalFill: "#ccc",
  });

  $(".partners__container").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // show first content by default
  $(".tabs-nav li:first-child").addClass("active");
  $(".tabs__content").hide();
  $(".tabs__content:first").show();

  $(".bestseller__cat-item").on("click", function () {
    $(".tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tabs__content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
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

  $(".filter-style").styler();

  $(".range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
  });

  $(".vertical-menu__link--dropdown").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $(this).next().slideToggle("200");
  });

  $(".choose-clr__color").on("click", function (e) {
    e.preventDefault();
    if (!$(this).hasClass("current")) {
      $(this).addClass("current");
    } else {
      $(this).removeClass("current");
    }
  });

  $(".toolbox__btn--line").on("click", function () {
    $(this).addClass("active");
    $(".toolbox__btn--grid").removeClass("active");
    $(".product").addClass("product--list");
  });
  $(".toolbox__btn--grid").on("click", function () {
    $(this).addClass("active");
    $(".toolbox__btn--line").removeClass("active");
    $(".product").removeClass("product--list");
  });

  $(".products__image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".products__thumbs",
    variableWidth: true,
  });
  $(".products__thumbs").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: ".products__image",
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
  });

  $(
    ".user-action__item--favorite, .user-box__login, .user-box__register, .product__btn-add, .product__btn-favorite, .btn-secondary"
  ).on("click", function () {
    alert("this is a demo version of the site, the buttons do not work");
  });

  $(".user-action__item--cart").on("click", function () {
    $(".dropdown-cart").addClass("active");
  });
  $(".close-cart").on("click", function () {
    $(".dropdown-cart").removeClass("active");
  });


});
