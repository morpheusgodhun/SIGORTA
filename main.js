$(document).ready(function() {
  $('#mobile-menu').on('click', function() {
      $('.nav').toggleClass('active');
  });

  var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
          delay: 2500,
        },
    });
});
