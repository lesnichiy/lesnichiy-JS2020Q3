const COLOR_PRIMARY = '#000000';
const COLOR_PRIMARY_CONTRAST = '#ffffff';
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const IMAGES_URLs_PER_HOUR = createBgImgDayArrURLs();

const timeElem = document.querySelector('#time');
const dayElem = document.querySelector('#day');
const greetingElem = document.querySelector('#greeting');
const nameElem = document.querySelector('#name');
const focusElem = document.querySelector('#focus');
const overlayElem = document.querySelector('.overlay');

//Show Time
function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDay();
  let date = today.getDate();
  let month = today.getMonth();

  timeElem.innerHTML = `${addZero(hours)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;
  dayElem.innerHTML = `${DAYS[day]}, ${date} ${MONTHS[month]}`;

  if ( minutes === 0 && seconds === 0) {
    setBgAndGreeting();
  }


  setTimeout(showTime, 1000)
}

//add Zeros
function addZero(n) {
  return ((parseInt(n, 10) < 10) ? '0' : '') + n;
}

//get random number in range
function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

//create array with url of 24 random images
function createBgImgDayArrURLs() {
  const BASE_BG_IMG_URL = `assets/images/`;
  const MIN_IMG_NUM = 1;
  const MAX_IMG_NUM = 20;
  const DAY_HOURS = 24;

  const resultArr = [];

  for (let i = 0; i < DAY_HOURS; i++) {
    let imgRandName = `${addZero(randomNumber(MIN_IMG_NUM, MAX_IMG_NUM))}.jpg`;

    if (i < 6) {
      //Night
      let currentNightImg = `${BASE_BG_IMG_URL}night/${imgRandName}`;
      if (resultArr.includes(currentNightImg)) {
        i--;
      } else  {
        resultArr.push(currentNightImg);
      }
    } else if (i < 12) {
      //Morning
      let currentMorningImg = `${BASE_BG_IMG_URL}morning/${imgRandName}`;
      if (resultArr.includes(currentMorningImg)) {
        i--;
      } else  {
        resultArr.push(currentMorningImg);
      }
    } else if (i < 18) {
      //day
      let currentDayImg = `${BASE_BG_IMG_URL}day/${imgRandName}`;
      if (resultArr.includes(currentDayImg)) {
        i--;
      } else  {
        resultArr.push(currentDayImg);
      }
    } else {
      //Evening
      let currentEveningImg = `${BASE_BG_IMG_URL}evening/${imgRandName}`;
      if (resultArr.includes(currentEveningImg)) {
        i--;
      } else  {
        resultArr.push(currentEveningImg);
      }
    }
  }

  return resultArr;
}

//smooth change img
function viewBgImage(url) {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.src = url;
  img.onload = () => {
    body.style.backgroundImage = `url(${url})`;
  };
}

//change bg image by button
const changeBgButton = document.querySelector('.change-bg-img-button');
const currentDate = new Date();
let currentHour = currentDate.getHours();
function changeBgImage() {
  currentHour++;
  currentHour = currentHour % 24;
  viewBgImage(IMAGES_URLs_PER_HOUR[currentHour]);
  changeBgButton.disabled = true;
  setTimeout(function() { changeBgButton.disabled = false }, 1000);
}
changeBgButton.addEventListener('click', changeBgImage);

//Set Background and Greeting
function setBgAndGreeting() {
  let today = new Date();
  let hour = today.getHours();

  viewBgImage(IMAGES_URLs_PER_HOUR[hour]);

  if (hour < 6) {
    //Night
    greetingElem.textContent = 'Good Night, ';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    overlayElem.style.backgroundColor = COLOR_PRIMARY;
  } else if (hour < 12) {
    //Morning
    greetingElem.textContent = 'Good Morning, ';
    document.body.style.color = COLOR_PRIMARY;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else if (hour < 18) {
    //Afternoon
    greetingElem.textContent = 'Good Afternoon, ';
    document.body.style.color = COLOR_PRIMARY;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else {
    //Evening
    greetingElem.textContent = 'Good Evening, ';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    overlayElem.style.backgroundColor = COLOR_PRIMARY;
  }
}

//Get Name from localStorage
function getName() {
  if (localStorage.getItem('name') === null) {
    nameElem.textContent = '[Enter Your Name Here]';
  } else {
    nameElem.textContent = localStorage.getItem('name');
  }
}

//Set Name to localStorage
function setName(evt) {
  if (evt.type === 'click') {
    nameElem.textContent = '';
  }
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      if (nameElem.textContent === '') {
        if (localStorage.getItem('name')) {
          nameElem.textContent = localStorage.getItem('name');
        } else {
          nameElem.textContent = '[Enter Your Name Here]';
        }
        nameElem.textContent = localStorage.getItem('name') || '[Enter Your Name Here]';
      } else {
        localStorage.setItem('name', nameElem.textContent);
      }
      nameElem.blur();
    }
  }
  if (evt.type === 'blur') {
    if (nameElem.textContent === '') {
      nameElem.textContent = localStorage.getItem('name') || '[Enter Your Name Here]';
    } else {
      localStorage.setItem('name', nameElem.textContent);
    }
  }
}

//Get Focus from localStorage
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focusElem.textContent = '[Enter Your Focus For Today Here]';
  } else {
    focusElem.textContent = localStorage.getItem('focus');
  }
}

//Set Focus to localStorage
function setFocus(evt) {
  if (evt.type === 'click') {
    focusElem.textContent = '';
  }
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      if (focusElem.textContent === '') {
        focusElem.textContent = localStorage.getItem('focus') || '[Enter Your Focus For Today Here]';
      } else {
        localStorage.setItem('focus', focusElem.textContent);
      }
      focusElem.blur();
    }
  }
  if (evt.type === 'blur') {
    if (focusElem.textContent === '') {
      focusElem.textContent = localStorage.getItem('focus') || '[Enter Your Focus For Today Here]';
    } else {
      localStorage.setItem('focus', focusElem.textContent);
    }
  }
}


//Event Listeners of Name and Focus
nameElem.addEventListener('click', setName);
nameElem.addEventListener('keypress', setName);
nameElem.addEventListener('blur', setName);
focusElem.addEventListener('click', setFocus);
focusElem.addEventListener('keypress', setFocus);
focusElem.addEventListener('blur', setFocus);



//Run
showTime();
setBgAndGreeting();
getName();
getFocus();
