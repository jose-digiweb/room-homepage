const mobileOpen = document.querySelector('.menu__mobile');
const mobileClose = document.querySelector('.mobile__close');
const navMenu = document.querySelector('.nav__menu');
const menuOverlay = document.querySelector('.overlay__menu');
const body = document.querySelector('body');

const handlingOpen = (e) => {
  e.preventDefault();

  if (window.innerWidth < 620) {
    menuOverlay.classList.add('overlay');
    navMenu.style.transform = 'translateY(0)';
    body.style.overflow = 'hidden';
  }
};

const handlingClose = (e) => {
  e.preventDefault();

  if (window.innerWidth < 620) {
    menuOverlay.classList.remove('overlay');
    navMenu.style.transform = 'translateY(-113px)';
    body.style.overflow = 'scroll';
  }
};

mobileOpen.addEventListener('click', handlingOpen);

mobileClose.addEventListener('click', handlingClose);
