
$(function() {

  //Modal 
  $("[data-modal=request]").on("click", function() { 
    $(".overlay, #request").fadeIn("slow");

   });
   $(".modal__close").on("click", function(){
     $(".overlay, #request, #thanks").fadeOut();
   })

   //Validation
  function validateForms(form){
    $(form).validate({
      rules: {
        phone: {
          required: true,
          minlength: 10 
        }
      },
        messages: {
          phone: {
            required: "Поле обов'язкове до заповлення",
            minlength: jQuery.validator.format("Введіть мінімум {0} символів!")
          }
        }
    });
  };
  validateForms("#make-call");
  validateForms("#delivery-form");
  validateForms("#hero-form");
  
   //Counter 
   $(".feature__counter").counterUp({
     delay: 10,
     time: 1000
   });

   //Mask for Form
   $("input[name=phone").mask("+38(999)99-999-99");

   //Magnific PopUp
   $(".certification-body img").magnificPopup({
    items: {
      src: 'img/certificate.jpg'
    },
    type: 'image'
   })
});