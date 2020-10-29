const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');
const overlayMobileMenu = document.querySelector('.header-overlay-mobile-menu');

let petsList = []; //8 items from pets.json
let currentSlidePetsList = [];

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

  //change Close Button style by hover on Overlay
  popupWindowOverlay.addEventListener('mouseenter', () => {
    popupWindowCloseButton.classList.add('modal-window-close-button--overlay-hover');
  });
  popupWindowOverlay.addEventListener('mouseleave', () => {
    popupWindowCloseButton.classList.remove('modal-window-close-button--overlay-hover');
  });

}

cardsSliderWrapper.addEventListener('click', popupListener);

//pets from json
const requestPets = new XMLHttpRequest();

function createPets(list) {
  //cardsSliderWrapper.innerHTML = '';
  /*let slidesNumber = 0;

  if (window.innerWidth >= 1280) {
    slidesNumber = 3;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    slidesNumber = 2;
  } else {
    slidesNumber = 1;
  }

  let currentCardsList = cardsSliderWrapper.querySelectorAll('.main-page-pets-slider-card');
  console.log(currentCardsList);
  if (currentCardsList.length > slidesNumber) {
    for (let i = 0; i < slidesNumber; i++) {
      currentCardsList[i].remove();
    }
  }
  for (let i = 0; i < currentCardsList.length; i++) {
    currentCardsList[i].classList.add('main-page-pets-slider-card--prev');
    currentCardsList[i].classList.remove('main-page-pets-slider-card--active');

  }*/

  cardsSliderWrapper.innerHTML = createPetCards(list);
  currentSlidePetsList = list;
}

function createPetCards(list) {
  let strPetCards = ``;

  for (let i = 0; i < list.length; i++) {
    strPetCards = `${strPetCards}<li class='main-page-pets-slider-card'>
            <img src='${list[i].img}' alt='${list[i].type} ${list[i].name}' class='main-page-pets-slider-card-picture'>
            <h4 class='main-page-pets-slider-card-name shelter-main-page-h4'>${list[i].name}</h4>
            <button class='shelter-button main-page-pets-slider-card-button'>Learn more</button>
          </li>`;
  }

  return strPetCards;
}

requestPets.open('GET', './../../assets/pets.json');

requestPets.onload = () => {
  petsList = JSON.parse(requestPets.response);
  console.log(petsList);

  currentSlidePetsList = createSliderArr();
  console.log(currentSlidePetsList);

  createPets(currentSlidePetsList);

};

requestPets.send();

//slider
const sliderLeftButton = document.querySelector('.main-page-pets-slider-button--left');
const sliderRightButton = document.querySelector('.main-page-pets-slider-button--right');

function createSliderArr() {
  const slideArr = [];
  let slidesNumber = 0;

  if (window.innerWidth >= 1280) {
    slidesNumber = 3;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    slidesNumber = 2;
  } else {
    slidesNumber = 1;
  }

  for (let i = 0; i < slidesNumber; i++) {
    let randElem = petsList[Math.floor(Math.random() * petsList.length)];

    if (currentSlidePetsList.some(item => item.name === randElem.name)) {
      i--;
    } else if (slideArr.length !== 0 && slideArr.some(item => item.name === randElem.name)) {
      i--;
    } else {
      slideArr.push(randElem);
    }
  }

  return slideArr;
}

function changeSlide() {
  createPets(createSliderArr());
}

sliderLeftButton.addEventListener('click', changeSlide);
sliderRightButton.addEventListener('click', changeSlide);