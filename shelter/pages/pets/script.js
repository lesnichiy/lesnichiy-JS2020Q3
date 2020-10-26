const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');
const overlayMobileMenu = document.querySelector('.header-overlay-mobile-menu');

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
const cardsSliderWrapper = document.querySelector('.pets-our-friends-cards');
const popupWindow = document.querySelector('.modal-window-wrapper');
const popupWindowTitle = document.querySelector('.modal-window-title');

function showHidePopup(name) {
  popupWindow.classList.toggle('modal-window-wrapper--closed');
  document.body.classList.toggle('modal-window-scroll-hidden');

  popupWindowTitle.textContent = name;

}

function popupListener(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('pets-our-friends-card')) {
    let currentCardName = evt.target.querySelector('.pets-our-friends-card-name').textContent;
    showHidePopup(currentCardName);
  }
  if (evt.target.parentNode.classList.contains('pets-our-friends-card')) {
    let currentCardName = evt.target.parentNode.querySelector('.pets-our-friends-card-name').textContent;
    showHidePopup(currentCardName);
  }

  //close popup
  const popupWindowOverlay = document.querySelector('.modal-window-overlay');
  const popupWindowCloseButton = document.querySelector('.modal-window-close-button');

  popupWindowOverlay.addEventListener('click', showHidePopup);
  popupWindowCloseButton.addEventListener('click', showHidePopup);

}

cardsSliderWrapper.addEventListener('click', popupListener);