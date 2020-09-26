const numbersList = document.querySelectorAll('.number');
const operationsList = document.querySelectorAll('.operator');
const clearButtonsList = document.querySelectorAll('.clear-btn');
const decimalButton = document.querySelector('#decimal');
const displayBoard = document.querySelector('#display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';


for (var i = 0; i < numbersList.length; i++) {
  let numberButton = numbersList[i];
  numberButton.addEventListener('click', function (evt) {
    numberPress(evt.target.textContent);
  });
}

function numberPress(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}