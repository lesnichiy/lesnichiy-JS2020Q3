const burgerButtonOpen = document.querySelector('.header-site-menu-burger-button--open');
const burgerButtonClose = document.querySelector('.header-site-menu-burger-button--close');
const headerSiteMenu = document.querySelector('.header-site-menu');
const headerLogo = document.querySelector('.header-logo');

function openMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--closed');
  headerSiteMenu.classList.add('header-site-menu--opened');
  headerLogo.classList.add('visually-hidden');
  burgerButtonOpen.classList.add('visually-hidden');
  headerSiteMenu.addEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--opened');
  headerSiteMenu.classList.add('header-site-menu--closed');
  headerLogo.classList.remove('visually-hidden');
  burgerButtonOpen.classList.remove('visually-hidden');
  headerSiteMenu.removeEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenuByClickOnOverlay(evt) {
  if (evt.target === headerSiteMenu) {
    closeMobileMenu();
  }
}

burgerButtonOpen.addEventListener('click', (evt) => {
  evt.preventDefault();

  openMobileMenu();
});

burgerButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();

  closeMobileMenu();
});