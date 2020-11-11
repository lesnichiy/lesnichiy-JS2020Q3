const COLOR_PRIMARY = '#000000';
const COLOR_PRIMARY_CONTRAST = '#ffffff';
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const IMAGES_URLs_PER_HOUR = createBgImgDayArrURLs();
const NAME_FIELD_DEFAULT_TEXT = '[Enter Your Name Here]';
const FOCUS_FIELD_DEFAULT_TEXT = '[Enter Your Focus For Today Here]';
const CITY_FIELD_DEFAULT_TEXT = '[Enter Your City Here]';

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
    getWeather();
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
  const img = document.createElement('img');
  img.src = url;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${url})`;
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
    document.body.style.textShadow = `0 0 5px ${COLOR_PRIMARY}`;
    overlayElem.style.backgroundColor = COLOR_PRIMARY;
  } else if (hour < 12) {
    //Morning
    greetingElem.textContent = 'Good Morning, ';
    document.body.style.color = COLOR_PRIMARY;
    document.body.style.textShadow = `0 0 5px ${COLOR_PRIMARY_CONTRAST}`;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else if (hour < 18) {
    //Afternoon
    greetingElem.textContent = 'Good Afternoon, ';
    document.body.style.color = COLOR_PRIMARY;
    document.body.style.textShadow = `0 0 5px ${COLOR_PRIMARY_CONTRAST}`;
    overlayElem.style.backgroundColor = COLOR_PRIMARY_CONTRAST;
  } else {
    //Evening
    greetingElem.textContent = 'Good Evening, ';
    document.body.style.color = COLOR_PRIMARY_CONTRAST;
    document.body.style.textShadow = `0 0 5px ${COLOR_PRIMARY}`;
    overlayElem.style.backgroundColor = COLOR_PRIMARY;
  }
}

//Get value for contenteditable field
function getValue(element, elementName, defaultText) {
  element.textContent = localStorage.getItem(elementName) || defaultText;
}

//Set value in contenteditable field
function setValue(evt, element, elementName, defaultText) {
  if (evt.type === 'click') {
    element.textContent = '';
  }
  if (evt.type === 'keypress') {
    if (evt.which === 13 || evt.keyCode === 13) {
      if (element.textContent === '') {
        element.textContent = localStorage.getItem(elementName) || defaultText;
      } else {
        localStorage.setItem(elementName, element.textContent);
      }
      element.blur();
      if (element.id === 'weather-city') getWeather();
    }
  }
  if (evt.type === 'blur') {
    if (element.textContent === '') {
      element.textContent = localStorage.getItem(elementName) || defaultText;
    } else if (element.textContent !== defaultText) {
      localStorage.setItem(elementName, element.textContent);
    }
  }
}

nameElem.addEventListener('click', (evt) => setValue(evt, evt.target, 'name', NAME_FIELD_DEFAULT_TEXT));
nameElem.addEventListener('keypress', (evt) => setValue(evt, evt.target, 'name', NAME_FIELD_DEFAULT_TEXT));
nameElem.addEventListener('blur', (evt) => setValue(evt, evt.target, 'name', NAME_FIELD_DEFAULT_TEXT));
focusElem.addEventListener('click', (evt) => setValue(evt, evt.target, 'focus', FOCUS_FIELD_DEFAULT_TEXT));
focusElem.addEventListener('keypress', (evt) => setValue(evt, evt.target, 'focus', FOCUS_FIELD_DEFAULT_TEXT));
focusElem.addEventListener('blur', (evt) => setValue(evt, evt.target, 'focus', FOCUS_FIELD_DEFAULT_TEXT));


//Quotes
const quoteBlockquote = document.querySelector('.quote blockquote');
const quoteFigcaption = document.querySelector('.quote figcaption');
const changeQuoteButton = document.querySelector('.change-quote-button');

async function getQuote() {
  const url = `https://favqs.com/api/qotd`;
  const res = await fetch(url);
  const data = await res.json();
  quoteBlockquote.textContent = data.quote.body;
  quoteFigcaption.textContent = data.quote.author;
}
document.addEventListener('DOMContentLoaded', getQuote);
changeQuoteButton.addEventListener('click', getQuote);

//Weather
const weatherCityElem = document.querySelector('#weather-city');
const weatherDataWrapper = document.querySelector('.weather-data-wrapper');
const weatherIconElem = document.querySelector('.weather-icon');
const weatherDescriptionElem = document.querySelector('.weather-description');
const weatherTemperatureElem = document.querySelector('.weather-temperature');
const weatherHumidityElem = document.querySelector('.weather-humidity');
const weatherWindSpeedElem = document.querySelector('.weather-wind-speed');

const openWeatherApiKey = `4d7e149d43676736e640d174434d7fc9`;
let openWeatherLang = `en`;
let openWeatherUnitsType = `metric`;

async function getWeather() {
  if (weatherCityElem.textContent === '' || weatherCityElem.textContent === CITY_FIELD_DEFAULT_TEXT) {
    return;
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityElem.textContent}&lang=${openWeatherLang}&appid=${openWeatherApiKey}&units=${openWeatherUnitsType}`;
    const res = await fetch(url);
    const data = await res.json();
    const temperatureRender = (temperature) => {
      temperature = Math.round(temperature);
      return (temperature >= 0) ? `+${temperature}` : temperature ;
    };

    try {
      weatherIconElem.classList.add(`owf-${data.weather[0].id}`);
      weatherDescriptionElem.textContent = data.weather[0].description;
      weatherTemperatureElem.textContent = `${temperatureRender(data.main.temp)}°C`;
      weatherHumidityElem.textContent = `${data.main.humidity}%`;
      weatherWindSpeedElem.textContent = `${data.wind.speed} m/s`;
    } catch (err) {
      weatherCityElem.textContent = `[${data.message}]`;
      weatherIconElem.className = `weather-icon owf owf-2x`;
      weatherDescriptionElem.textContent = ``;
      weatherTemperatureElem.textContent = ``;
      weatherHumidityElem.textContent = ``;
      weatherWindSpeedElem.textContent = ``;
    }

    if (weatherTemperatureElem.textContent) {
      weatherDataWrapper.classList.remove('weather-data-wrapper--hidden');
      weatherDataWrapper.classList.add('weather-data-wrapper--visible');
    } else {
      weatherDataWrapper.classList.add('weather-data-wrapper--hidden');
      weatherDataWrapper.classList.remove('weather-data-wrapper--visible');
    }
  }
}
document.addEventListener('DOMContentLoaded', getWeather);
weatherCityElem.addEventListener('click', (evt) => setValue(evt, evt.target, 'city', CITY_FIELD_DEFAULT_TEXT));
weatherCityElem.addEventListener('keypress', (evt) => setValue(evt, evt.target, 'city', CITY_FIELD_DEFAULT_TEXT));
weatherCityElem.addEventListener('blur', (evt) => setValue(evt, evt.target, 'city', CITY_FIELD_DEFAULT_TEXT));

//Run
showTime();
setBgAndGreeting();
getValue(nameElem, 'name', NAME_FIELD_DEFAULT_TEXT);
getValue(focusElem, 'focus', FOCUS_FIELD_DEFAULT_TEXT);
getValue(weatherCityElem, 'city', CITY_FIELD_DEFAULT_TEXT);