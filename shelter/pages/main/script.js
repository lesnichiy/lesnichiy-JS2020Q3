const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerSiteMenu = document.querySelector('.header-site-menu');
const headerLogo = document.querySelector('.header-logo');

function openMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--closed');
  headerSiteMenu.classList.add('header-site-menu--opened');
  headerLogo.classList.toggle('visually-hidden');
}

function closeMobileMenu() {
  headerSiteMenu.classList.remove('header-site-menu--opened');
  headerSiteMenu.classList.add('header-site-menu--closed');
  headerLogo.classList.toggle('visually-hidden');
}

burgerButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (headerSiteMenu.classList.contains('header-site-menu--closed')) {
    openMobileMenu();
  } else if (headerSiteMenu.classList.contains('header-site-menu--opened')) {
    closeMobileMenu();
  }
});
