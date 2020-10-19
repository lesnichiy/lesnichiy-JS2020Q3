const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerSiteMenu = document.querySelector('.header-site-menu');
const headerLogo = document.querySelector('.header-logo');

function openMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--closed');
  headerSiteMenu.classList.add('header-site-menu--opened');
  headerLogo.classList.toggle('visually-hidden');
  headerSiteMenu.addEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--opened');
  headerSiteMenu.classList.add('header-site-menu--closed');
  headerLogo.classList.toggle('visually-hidden');
  headerSiteMenu.removeEventListener('click', closeMobileMenuByClickOnOverlay);
}

function closeMobileMenuByClickOnOverlay(evt) {
  if (evt.target === headerSiteMenu) {
    closeMobileMenu();
  }
}

burgerButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (headerSiteMenu.classList.contains('header-site-menu--closed')) {
    openMobileMenu();
  } else if (headerSiteMenu.classList.contains('header-site-menu--opened')) {
    closeMobileMenu();
  }
});