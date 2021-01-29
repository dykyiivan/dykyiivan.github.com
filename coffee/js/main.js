let swiper = new Swiper(".favorite__slider", {
  slidesPerView: 2,
  slidesPerColumn: 2,
  autoHeight: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerColumn: 1,
    },
    960: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerColumn: 2,
    },
   1040: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerColumn: 2,
    },
  },
});

let swiperSecond = new Swiper(".selection__slider", {
  spaceBetween: 30,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let tabs = document.querySelector(".gift__body");
let btns = tabs.querySelectorAll(".gift__nav");
let items = tabs.querySelectorAll(".gift-item");

function change(arr, i) {
  arr.forEach((item) => {
    item.forEach((i) => {
      i.classList.remove("active");
    });
    item[i].classList.add("active");
  });
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    change([btns, items], i);
  });
}

const productBtn = document.querySelectorAll(".product__btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");

productBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal-overlay--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+38(999)99-999-99");
im.mask(selector);

let validateForms = function (selector, rules, succesModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {},
  });
};

validateForms(".form__buy", {
  name: {
    required: true,
    minLenght: 4,
  },
  tel: {
    required: true,
  },
  messages: {
    name: {
      required: "Email not valid!66",
    },
    phone: {
      required: "Login is required!88",
    },
  },
});



validateForms(".form__callback", {
  tel: {
    required: true,
    messages: {
      phone: {
        required: "Login is required!88",
      },
    },
  },
});


let btn = document.querySelector(".burger");
let menu = document.querySelector(".menu");
btn.onclick = function() {
  menu.classList.toggle("active");
}
