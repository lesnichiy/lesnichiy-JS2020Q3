const COLOR_PRIMARY = '#000000';
const COLOR_PRIMARY_CONTRAST = '#ffffff';
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const timeElem = document.querySelector('#time');
const dayElem = document.querySelector('#day')
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


  setTimeout(showTime, 1000)
}

//add Zeros
function addZero(n) {
  return ((parseInt(n, 10) < 10) ? '0' : '') + n;
}

//Set Background and Greeting
function setBgAndGreeting() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 6) {
    //Night
    document.body.style.backgroundImage = `url(assets/images/night/02.jpg)`;
    greetingElem.textContent = 'Good Night';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    overlayElem.style.backgroundColor = COLOR_PRIMARY;
  } else if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = `url(assets/images/morning/11.jpg)`;
    greetingElem.textContent = 'Good Morning';
    document.body.style.color = COLOR_PRIMARY;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = `url(assets/images/day/11.jpg)`;
    greetingElem.textContent = 'Good Afternoon';
    document.body.style.color = COLOR_PRIMARY;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else {
    //Evening
    document.body.style.backgroundImage = `url(assets/images/evening/10.jpg)`;
    greetingElem.textContent = 'Good Evening';
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
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      localStorage.setItem('name', evt.target.innerText);
      nameElem.blur();
    }
  } else {
    localStorage.setItem('name', evt.target.innerText);
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
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      localStorage.setItem('focus', evt.target.innerText);
      focusElem.blur();
    }
  } else {
    localStorage.setItem('focus', evt.target.innerText);
  }
}

nameElem.addEventListener('keypress', setName);
nameElem.addEventListener('blur', setName);
focusElem.addEventListener('keypress', setFocus);
focusElem.addEventListener('blur', setFocus);



showTime();
setBgAndGreeting();
getName();
getFocus();