$(function() {
  // Burger Menu 
  $(".header__burger").on("click", function(){
    $(".menu,.header__burger").toggleClass("active");
   
  });

  //Modal Form
  $("[data-modal=calls]").on("click", function() {
    $(".overlay, #consultation").fadeIn("slow");
  });
  
  $(".product__button").each(function(i) {
    $(this).on("click", function() {
      $("#order .modal__subtitle").text($(".product__title").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  /* Close Modal From*/
  $(".modal__close").on("click", function() {
    $(".overlay, #thanks, #conslutation, #order").fadeOut("slow");
  });

  /* Validate Form */
  $("#consultation form").validate({
    rules: {
      name: "required",
      phone: "required"
    },
    messages: {
      name: " Будь-ласка, введіть Ваше ім'я",
      phone: "Введіть номер телефону"
    }
  });

  $("#order form").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: " Будь-ласка, введіть Ваше ім'я",
      email: {
        required: "Будь-ласка, введіть Ваш email",
        email: "Введіть правильну email адресу"
      },
      phone: "Введіть номер телефону"
    }
  });

  // Mask for Input Form
  $("input[name=phone]").mask("+38(999)999-99-99");

  // WoW JS
  new WOW().init();

});