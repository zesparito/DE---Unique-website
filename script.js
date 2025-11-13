// --- Service Carousel Controls ---
const carousel = document.querySelector('.service-carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 400, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -400, behavior: 'smooth' });
});
