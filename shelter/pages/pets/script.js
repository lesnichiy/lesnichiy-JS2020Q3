const burgerButton = document.querySelector('.header-site-menu-burger-button');
const headerInnerWrapper = document.querySelector('.header-inner-wrapper');
const headerSiteMenuNav = document.querySelector('.header-site-menu');
const overlayMobileMenu = document.querySelector('.header-overlay-mobile-menu');

let pets = []; //8 items from pets.json
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
  let currentPet = pets.find( pet => pet.name === name);
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

function createPets(petsList) {
  const petsCardsWrapper = document.querySelector('.pets-our-friends-cards');
  petsCardsWrapper.innerHTML += createPetCards(petsList);
}

function createPetCards(petsList) {
  let strPetCards = ``;

  for (let i = 0; i < petsList.length; i++) {
    strPetCards = `${strPetCards}<li class='pets-our-friends-card'>
            <img src='${petsList[i].img}' alt='${petsList[i].type} ${petsList[i].name}' class='pets-our-friends-card-picture'>
            <h4 class='pets-our-friends-card-name shelter-main-page-h4'>${petsList[i].name}</h4>
            <button class='shelter-button pets-our-friends-card-button'>Learn more</button>
          </li>`;
  }

  return strPetCards;
}

requestPets.open('GET', './../../assets/pets.json');

requestPets.onload = () => {
  pets = JSON.parse(requestPets.response);
  console.log(pets);

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

  fullPetsList = sort863(fullPetsList);

  createPets(fullPetsList);
};

requestPets.send();

function sort863(list) {
  let length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList  = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find( (item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        const elem = list.splice(ind, 1)[0];
        list.splice(which8OfList * 8, 0, elem);

        i -= 2;
        break;
      }
    }
  }

  return list;
}