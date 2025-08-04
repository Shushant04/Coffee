const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
  document.body.classList.add('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-menu');
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    grabCursor: true,
    dynamicsBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
