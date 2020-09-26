const numbersList = document.querySelectorAll('.number');
const operationsList = document.querySelectorAll('.operator');
const clearButtonsList = document.querySelectorAll('.clear-btn');
const decimalButton = document.querySelector('#decimal');
const displayBoard = document.querySelector('#display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';


for (let i = 0; i < numbersList.length; i++) {
  let numberButton = numbersList[i];
  numberButton.addEventListener('click', function (evt) {
    numberPress(evt.target.textContent);
  });
}

for (let i = 0; i < operationsList.length; i++) {
  let operationButton = operationsList[i];
  operationButton.addEventListener('click', function (evt) {
    operationPress(evt.target.textContent);
  });
}

for (let i = 0; i < clearButtonsList.length; i++) {
  let clearButton = clearButtonsList[i];
  clearButton.addEventListener('click', function (evt) {
    clear(evt.target.textContent);
  });
}

decimalButton.addEventListener('click', decimal);

function numberPress(number) {
  if (MemoryNewNumber) {
    displayBoard.value = number;
    MemoryNewNumber = false;
  } else {
    if (displayBoard.value === '0') {
      displayBoard.value = number;
    } else {
      displayBoard.value += number;
    }
  }
}

function operationPress(operation) {
  let localOperationMemoryNumber = displayBoard.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    displayBoard.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemoryNumber;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemoryNumber;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemoryNumber;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemoryNumber;
    } else {
      MemoryCurrentNumber = +localOperationMemoryNumber;
    }
    displayBoard.value = MemoryCurrentNumber;
    MemoryPendingOperation = operation;
  }
}

function clear(id) {
  if (id === 'ce') {
    displayBoard.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    displayBoard.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}

function decimal() {
  let localDecimalMemoryNumber = displayBoard.value;

  if (MemoryNewNumber) {
    localDecimalMemoryNumber = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemoryNumber.indexOf('.') === -1) {
      localDecimalMemoryNumber += '.';
    }
  }
  displayBoard.value = localDecimalMemoryNumber;
}