const carouselImages = document.querySelectorAll('.carousel-item img');
const main = document.querySelector('.main');

if (window.innerWidth > 1220) {
  carouselImages[0].src = './images/desktop-image-hero-1.jpg';
  carouselImages[1].src = './images/desktop-image-hero-2.jpg';
  carouselImages[2].src = './images/desktop-image-hero-3.jpg';
}
if (window.innerWidth < 1220) {
  carouselImages[0].src = './images/mobile-image-hero-1.jpg';
  carouselImages[1].src = './images/mobile-image-hero-2.jpg';
  carouselImages[2].src = './images/mobile-image-hero-3.jpg';
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1220) {
    carouselImages[0].src = './images/desktop-image-hero-1.jpg';
    carouselImages[1].src = './images/desktop-image-hero-2.jpg';
    carouselImages[2].src = './images/desktop-image-hero-3.jpg';
  } else if (window.innerWidth < 1220) {
    carouselImages[0].src = './images/mobile-image-hero-1.jpg';
    carouselImages[1].src = './images/mobile-image-hero-2.jpg';
    carouselImages[2].src = './images/mobile-image-hero-3.jpg';
  } else {
  }
});
