const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');
const overlayMobileMenu = document.querySelector('.header-overlay-mobile-menu');

let petsList = []; //8 items from pets.json
let fullPetsList = []; //48 items

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
const popupWindowPicture = document.querySelector('.modal-window-picture');
const popupWindowType = document.querySelector('.modal-window-subtitle-type');
const popupWindowBreed = document.querySelector('.modal-window-subtitle-breed');
const popupWindowDescription = document.querySelector('.modal-window-description');
const popupWindowAge = document.querySelector('.modal-window-pet-info-item-age');
const popupWindowInoculations = document.querySelector('.modal-window-pet-info-item-inoculations');
const popupWindowDiseases = document.querySelector('.modal-window-pet-info-item-diseases');
const popupWindowParasites = document.querySelector('.modal-window-pet-info-item-parasites');

function showHidePopup(name) {
  popupWindow.classList.toggle('modal-window-wrapper--closed');
  document.body.classList.toggle('modal-window-scroll-hidden');

  if (!popupWindow.classList.contains('modal-window-wrapper--closed')) {
    createPopupContentData(name);
  }
}

function createPopupContentData(name) {
  let currentPet = petsList.find( pet => pet.name === name);
  popupWindowTitle.textContent = currentPet.name;
  popupWindowPicture.src = currentPet.img;
  popupWindowType.textContent = currentPet.type;
  popupWindowBreed.textContent = currentPet.breed;
  popupWindowDescription.textContent = currentPet.description;
  popupWindowAge.textContent = currentPet.age;
  popupWindowInoculations.textContent = currentPet.inoculations;
  popupWindowDiseases.textContent = currentPet.diseases;
  popupWindowParasites.textContent = currentPet.parasites;

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

//pets from json
const requestPets = new XMLHttpRequest();

function createPets() {
  const petsCardsWrapper = document.querySelector('.pets-our-friends-cards');
  petsCardsWrapper.innerHTML += createPetCards();
}

function createPetCards() {
  let strPetCards = ``;

  for (let i = 0; i < petsList.length; i++) {
    strPetCards = `${strPetCards}<li class='pets-our-friends-card'>
            <img src='${petsList[i].img}' alt='Cat ${petsList[i].name}' class='pets-our-friends-card-picture'>
            <h4 class='pets-our-friends-card-name shelter-main-page-h4'>${petsList[i].name}</h4>
            <button class='shelter-button pets-our-friends-card-button'>Learn more</button>
          </li>`;
  }

  return strPetCards;
}

requestPets.open('GET', './../../assets/pets.json');

requestPets.onload = () => {
  petsList = JSON.parse(requestPets.response);
  console.log(petsList);

  createPets();

};

requestPets.send();