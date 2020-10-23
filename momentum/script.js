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
    document.body.style.backgroundImage = `url(assets/images/night/01.jpg)`;
    greeting.textContent = 'Good Night';
    document.body.style.color = '#ffffff';
    overlay.style.backgroundColor = '#000000';
  } else if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = `url(assets/images/morning/01.jpg)`;
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = `url(assets/images/afternoon/01.jpg)`;
    greeting.textContent = 'Good Afternoon';
  } else {
    //Evening
    document.body.style.backgroundImage = `url(assets/images/evening/01.jpg)`;
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#ffffff';
    overlay.style.backgroundColor = '#000000';
  }
}


showTime();
setBgAndGreeting();