const mobileOpen = document.querySelector('.menu__mobile');
const mobileClose = document.querySelector('.mobile__close');
const headerNav = document.querySelector('.header');
const menuOverlay = document.querySelector('.overlay__menu');
const body = document.querySelector('body');

const handlingOpen = (e) => {
  e.preventDefault();

  headerNav.style.transform = 'translateY(0)';
  menuOverlay.style.visibility = 'visible';
  menuOverlay.style.opacity = '0.6';
  body.style.overflow = 'hidden';
};

const handlingClose = (e) => {
  e.preventDefault();

  headerNav.style.transform = 'translateY(-113px)';
  menuOverlay.style.opacity = '0';
  menuOverlay.style.visibility = 'hidden';
  body.style.overflow = 'scroll';
};

mobileOpen.addEventListener('click', handlingOpen);

mobileClose.addEventListener('click', handlingClose);
