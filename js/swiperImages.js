var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: {
        el: '.swiper-thumbs',
        slidesPerView: 'auto',
        slideToClickedSlide: true,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 999999,
    speed: 1 
  });

  