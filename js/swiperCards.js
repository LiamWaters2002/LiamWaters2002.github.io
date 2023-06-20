var TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 4,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

var cards = document.querySelectorAll('.swiper-slide');

cards.forEach(card => {
  card.addEventListener('click', () => {
    var pageUrl = card.getAttribute('data-page');
    if (pageUrl) {
      window.location.href = pageUrl;
    }
  });
});