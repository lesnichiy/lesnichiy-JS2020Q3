const COLOR_PRIMARY = '#000000';
const COLOR_PRIMARY_CONTRAST = '#ffffff';

const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');
const overlay = document.querySelector('.overlay');

//Show Time
function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  time.innerHTML = `${addZero(hours)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;

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
    greeting.textContent = 'Good Night';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    overlay.style.backgroundColor = COLOR_PRIMARY;
  } else if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = `url(assets/images/morning/11.jpg)`;
    greeting.textContent = 'Good Morning';
    document.body.style.color = COLOR_PRIMARY;
    overlay.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = `url(assets/images/day/11.jpg)`;
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = COLOR_PRIMARY;
    overlay.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else {
    //Evening
    document.body.style.backgroundImage = `url(assets/images/evening/10.jpg)`;
    greeting.textContent = 'Good Evening';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    overlay.style.backgroundColor = COLOR_PRIMARY;
  }
}

//Get Name from localStorage
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Your Name Here]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//Set Name to localStorage
function setName(evt) {
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      localStorage.setItem('name', evt.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', evt.target.innerText);
  }
}

//Get Focus from localStorage
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Your Focus For Today Here]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//Set Focus to localStorage
function setFocus(evt) {
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      localStorage.setItem('focus', evt.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', evt.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



showTime();
setBgAndGreeting();
getName();
getFocus();