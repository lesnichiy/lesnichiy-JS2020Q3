const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');

function openMobileMenu() {
  headerWrapper.classList.remove('header--closed');
  headerWrapper.classList.add('header--opened');
  //header.addEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenu() {
  headerWrapper.classList.remove('header--opened');
  headerWrapper.classList.add('header--closed');
  //header.removeEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenuByClickOnOverlay(evt) {
  if (evt.target === header) {
    closeMobileMenu();
  }
}

burgerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  burgerButton.classList.toggle('header-site-menu-burger-button--opened');
  headerInnerWrapper.classList.toggle('header-inner-wrapper--opened');
  headerSiteMenuNav.classList.toggle('header-site-menu--opened');

});