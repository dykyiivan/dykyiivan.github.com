window.addEventListener('load', function (e) {
  const swiper = new Swiper('.examples__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      479: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,

      },
      570: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }

    }
  });

  const swiper2 = new Swiper('.licenses-container', {
    slidesPerView: 2,
    spaceBetween: 0,
    // Navigation arrows
    navigation: {
      nextEl: '.licenses-button-next',
      prevEl: '.licenses-button-prev',
    },
    pagination: {
      el: ".licenses-pagination",
      type: "fraction"
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      570: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },

    }
  });


  const swiper3 = new Swiper('.reviews-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      840: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    }
  });
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });

  //or for example
  var options = {
    max_value: 5,
    step_size: 0.5,
    initial_value: 4,

  }
  $(".reviews-slide__rate").rate(options)


});

const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const btnCancel = document.querySelectorAll('.btn-cancel');


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

btnCancel.forEach((el) => {
  el.addEventListener('click', (e) => {
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    modalOverlay.classList.remove('modal-overlay--visible');
  });
});

$(function () {
  $('select').niceSelect();

  $("input[type=tel]").inputmask({ mask: "8(999) 999-9999" });

  $(".header__burger").on("click", function (e) {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  })

  $(".menu__item a").on("click", function () {
    $(".header__burger, .menu").toggleClass("active");
  });

  $('select.nav-select').on('change', function () {
    var selected_id = $(this).find('option:selected').attr('href');
    $('.tab-content .tab-pane').removeClass('show active');
    $(selected_id).addClass('show active');
  });
});

new JustValidate(".question__form", {
  rules: {
    question: {
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
    question: {
      required: "Введите ваш вопрос",
      minLength: "Поле может содержать не менее 10 символов",
    },
    tel: {
      required: "Введите номер телефона",
      minLength: "Поле может содержать не менее 10 цифр",
    },
  },
});
new JustValidate(".form-sign-up", {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    tel: {
      required: true,
      minLength: 10,
      maxLength: 20,
    },
  },
  messages: {
    name: {
      required: "Введите ваше имя",
    },
    tel: {
      required: "Введите номер телефона",
      minLength: "Поле может содержать не менее 10 цифр",
    },
    email: {
      required: "Введите email",
    }
  },
});

new JustValidate(".form-discount", {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    tel: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Введите ваше имя",
    },
    tel: {
      required: "Введите номер телефона",
      minLength: "Поле может содержать не менее 10 цифр",
    },
    email: {
      required: "Введите email",
    }
  },
});

new JustValidate(".form-request", {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    tel: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Введите ваше имя",
    },
    tel: {
      required: "Введите номер телефона",
      minLength: "Поле может содержать не менее 10 цифр",
    },
    email: {
      required: "Введите email",
    }
  },
});
// Scroll to anchor
var $root = $("html, body");
$('a[href^="#"], .data__btn').click(function () {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
  return false;
});

// Fixed Menu
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("header__fixed");
  } else {
    $(".header").removeClass("header__fixed");
  }
});








