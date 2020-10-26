const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');
const overlayMobileMenu = document.querySelector('.header-overlay-mobile-menu');
//const bodyElement = document.querySelector('body');


//Burger menu
function toggleMobileMenu() {
  burgerButton.classList.toggle('header-site-menu-burger-button--opened');
  headerInnerWrapper.classList.toggle('header-inner-wrapper--opened');
  headerSiteMenuNav.classList.toggle('header-site-menu--opened');
  document.body.classList.toggle('scroll-hidden');
  overlayMobileMenu.classList.toggle('header-overlay-mobile-menu--opened');
}

burgerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleMobileMenu();
});

overlayMobileMenu.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleMobileMenu();
});


//Popup window
const cardsSliderWrapper = document.querySelector('.main-page-pets-slider-cards');
const popupWindow = document.querySelector('.modal-window-wrapper');
const popupWindowTitle = document.querySelector('.modal-window-title');

function showHidePopup(name) {
  popupWindow.classList.toggle('modal-window-wrapper--closed');
  document.body.classList.toggle('scroll-hidden');

  popupWindowTitle.textContent = name;

}

function popupListener(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('main-page-pets-slider-card')) {
    let currentCardName = evt.target.querySelector('.main-page-pets-slider-card-name').textContent;
    showHidePopup(currentCardName);
  }
  if (evt.target.parentNode.classList.contains('main-page-pets-slider-card')) {
    let currentCardName = evt.target.parentNode.querySelector('.main-page-pets-slider-card-name').textContent;
    showHidePopup(currentCardName);
  }

  //close popup
  const popupWindowOverlay = document.querySelector('.modal-window-overlay');
  const popupWindowCloseButton = document.querySelector('.modal-window-close-button');

  popupWindowOverlay.addEventListener('click', showHidePopup);
  popupWindowCloseButton.addEventListener('click', showHidePopup);

}

cardsSliderWrapper.addEventListener('click', popupListener);