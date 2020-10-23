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
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12hr Format
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

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
    document.body.style.backgroundImage = `url(assets/images/night/8.jpg)`;
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


showTime();
setBgAndGreeting();