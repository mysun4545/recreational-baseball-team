const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

new Swiper(".hero-swiper", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".hero-swiper .swiper-button-next",
    prevEl: ".hero-swiper .swiper-button-prev",
  },
  pagination: {
    el: ".hero-swiper .swiper-pagination",
    clickable: true,
  },
  autoplay: prefersReducedMotion
    ? false
    : { delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false },
});

AOS.init({
  duration: 800,
  offset: 80,
  once: true,
  disable: prefersReducedMotion,
});
