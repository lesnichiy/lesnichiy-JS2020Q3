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
    if (displayBoard.value === '-') {
      displayBoard.value += number;
    } else {
      displayBoard.value = number;
      MemoryNewNumber = false;
    }

  } else {
    if (displayBoard.value === '0') {
      displayBoard.value = number;
    } else if (displayBoard.value === '-') {
      displayBoard.value += number;
    } else {
      displayBoard.value += number;
    }
  }
}

function operationPress(operation) {
  let localOperationMemoryNumber = displayBoard.value;

  if ( localOperationMemoryNumber === '0' && operation === '-') {
    displayBoard.value = '-';
  } else if (MemoryNewNumber && MemoryPendingOperation && operation === '-') {
    displayBoard.value = '-';
    MemoryNewNumber = false;
  } else {
    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
      displayBoard.value = MemoryCurrentNumber;
    } else if (operation === '√') {
      if ( (+localOperationMemoryNumber) < 0) {
        alert('Вы пытаетесь извлечь корень из отрицательного числа. Не надо так.');
        displayBoard.value = +localOperationMemoryNumber;
      } else {
        MemoryCurrentNumber = Math.sqrt(+localOperationMemoryNumber);
        displayBoard.value = MemoryCurrentNumber.toFixed(10).replace(/0*$/,"").replace(/[.]$/,'');
      }
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
      } else if (MemoryPendingOperation === 'X^Y') {
        if ( MemoryCurrentNumber < 0 && (+localOperationMemoryNumber) === 0.5) {
          alert('Вы пытаетесь извлечь корень из отрицательного числа. Не надо так.');
          displayBoard.value = +localOperationMemoryNumber;
        } else {
          MemoryCurrentNumber =  MemoryCurrentNumber ** (+localOperationMemoryNumber);
        }
      } else {
        MemoryCurrentNumber = +localOperationMemoryNumber;
      }
      displayBoard.value = MemoryCurrentNumber.toFixed(10).replace(/0*$/,"").replace(/[.]$/,'');
      MemoryPendingOperation = operation;
    }
  }

}

function clear(id) {
  if (id === 'ce') {
    displayBoard.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    displayBoard.value = '0';
    MemoryNewNumber = false;
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