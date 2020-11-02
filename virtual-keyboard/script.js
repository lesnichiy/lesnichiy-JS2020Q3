const Keyboard = {
  elements: {
    outputText: null,
    keyboardMain: null,
    keysContainer: null,
    keys: []
  },

  properties: {
    value: "",
    capsLock: false
  },

  keyLayouts: {
    ru: [
      /*1st row*/
      {
        small: 'ё',
        shift: 'Ё',
        code: 'Backquote',
      },
      {
        small: '1',
        shift: '!',
        code: 'Digit1',
      },
      {
        small: '2',
        shift: '"',
        code: 'Digit2',
      },
      {
        small: '3',
        shift: '№',
        code: 'Digit3',
      },
      {
        small: '4',
        shift: ';',
        code: 'Digit4',
      },
      {
        small: '5',
        shift: '%',
        code: 'Digit5',
      },
      {
        small: '6',
        shift: ':',
        code: 'Digit6',
      },
      {
        small: '7',
        shift: '?',
        code: 'Digit7',
      },
      {
        small: '8',
        shift: '*',
        code: 'Digit8',
      },
      {
        small: '9',
        shift: '(',
        code: 'Digit9',
      },
      {
        small: '0',
        shift: ')',
        code: 'Digit0',
      },
      {
        small: '-',
        shift: '_',
        code: 'Minus',
      },
      {
        small: '=',
        shift: '+',
        code: 'Equal',
      },
      {
        small: 'Backspace',
        shift: null,
        code: 'Backspace',
      },
        /*2nd row*/
      {
        small: 'Tab',
        shift: null,
        code: 'Tab',
      },
      {
        small: 'й',
        shift: 'Й',
        code: 'KeyQ',
      },
      {
        small: 'ц',
        shift: 'Ц',
        code: 'KeyW',
      },
      {
        small: 'у',
        shift: 'У',
        code: 'KeyE',
      },
      {
        small: 'к',
        shift: 'К',
        code: 'KeyR',
      },
      {
        small: 'е',
        shift: 'Е',
        code: 'KeyT',
      },
      {
        small: 'н',
        shift: 'Н',
        code: 'KeyY',
      },
      {
        small: 'г',
        shift: 'Г',
        code: 'KeyU',
      },
      {
        small: 'ш',
        shift: 'Ш',
        code: 'KeyI',
      },
      {
        small: 'щ',
        shift: 'Щ',
        code: 'KeyO',
      },
      {
        small: 'з',
        shift: 'З',
        code: 'KeyP',
      },
      {
        small: 'х',
        shift: 'Х',
        code: 'BracketLeft',
      },
      {
        small: 'ъ',
        shift: 'Ъ',
        code: 'BracketRight',
      },
        /*3rd row*/
      {
        small: 'CapsLock',
        shift: null,
        code: 'CapsLock',
      },
      {
        small: 'ф',
        shift: 'Ф',
        code: 'KeyA',
      },
      {
        small: 'ы',
        shift: 'Ы',
        code: 'KeyS',
      },
      {
        small: 'в',
        shift: 'В',
        code: 'KeyD',
      },
      {
        small: 'а',
        shift: 'А',
        code: 'KeyF',
      },
      {
        small: 'п',
        shift: 'П',
        code: 'KeyG',
      },
      {
        small: 'р',
        shift: 'Р',
        code: 'KeyH',
      },
      {
        small: 'о',
        shift: 'О',
        code: 'KeyJ',
      },
      {
        small: 'л',
        shift: 'Л',
        code: 'KeyK',
      },
      {
        small: 'д',
        shift: 'Д',
        code: 'KeyL',
      },
      {
        small: 'ж',
        shift: 'Ж',
        code: 'Semicolon',
      },
      {
        small: 'э',
        shift: 'Э',
        code: 'Quote',
      },
      {
        small: 'Enter',
        shift: null,
        code: 'Enter',
      },
        /*4th row*/
      {
        small: 'Shift',
        shift: null,
        code: 'ShiftLeft',
      },
      {
        small: 'я',
        shift: 'Я',
        code: 'KeyZ',
      },
      {
        small: 'ч',
        shift: 'Ч',
        code: 'KeyX',
      },
      {
        small: 'с',
        shift: 'С',
        code: 'KeyC',
      },
      {
        small: 'м',
        shift: 'М',
        code: 'KeyV',
      },
      {
        small: 'и',
        shift: 'И',
        code: 'KeyB',
      },
      {
        small: 'т',
        shift: 'Т',
        code: 'KeyN',
      },
      {
        small: 'ь',
        shift: 'Ь',
        code: 'KeyM',
      },
      {
        small: 'б',
        shift: 'Б',
        code: 'Comma',
      },
      {
        small: 'ю',
        shift: 'Ю',
        code: 'Period',
      },
      {
        small: '.',
        shift: ',',
        code: 'Slash',
      },
        /*5th row*/
      {
        small: 'done',
        shift: null,
        code: 'Done',
      },
      {
        small: 'ru',
        shift: 'en',
        code: 'Lang',
      },
      {
        small: ' ',
        shift: null,
        code: 'Space',
      },
      {
        small: 'arrowLeft',
        shift: null,
        code: 'ArrowLeft',
      },
      {
        small: 'arrowRight',
        shift: null,
        code: 'ArrowRight',
      },
      /*"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "done", "ru", "space", "arrowLeft", "arrowRight"*/
    ],
    en: [
      /*1st row*/
      {
        small: '`',
        shift: '~',
        code: 'Backquote',
      },
      {
        small: '1',
        shift: '!',
        code: 'Digit1',
      },
      {
        small: '2',
        shift: '@',
        code: 'Digit2',
      },
      {
        small: '3',
        shift: '#',
        code: 'Digit3',
      },
      {
        small: '4',
        shift: '$',
        code: 'Digit4',
      },
      {
        small: '5',
        shift: '%',
        code: 'Digit5',
      },
      {
        small: '6',
        shift: '^',
        code: 'Digit6',
      },
      {
        small: '7',
        shift: '&',
        code: 'Digit7',
      },
      {
        small: '8',
        shift: '*',
        code: 'Digit8',
      },
      {
        small: '9',
        shift: '(',
        code: 'Digit9',
      },
      {
        small: '0',
        shift: ')',
        code: 'Digit0',
      },
      {
        small: '-',
        shift: '_',
        code: 'Minus',
      },
      {
        small: '=',
        shift: '+',
        code: 'Equal',
      },
      {
        small: 'Backspace',
        shift: null,
        code: 'Backspace',
      },
      /*2nd row*/
      {
        small: 'Tab',
        shift: null,
        code: 'Tab',
      },
      {
        small: 'q',
        shift: 'Q',
        code: 'KeyQ',
      },
      {
        small: 'w',
        shift: 'W',
        code: 'KeyW',
      },
      {
        small: 'e',
        shift: 'E',
        code: 'KeyE',
      },
      {
        small: 'r',
        shift: 'R',
        code: 'KeyR',
      },
      {
        small: 't',
        shift: 'T',
        code: 'KeyT',
      },
      {
        small: 'y',
        shift: 'Y',
        code: 'KeyY',
      },
      {
        small: 'u',
        shift: 'U',
        code: 'KeyU',
      },
      {
        small: 'i',
        shift: 'I',
        code: 'KeyI',
      },
      {
        small: 'o',
        shift: 'O',
        code: 'KeyO',
      },
      {
        small: 'p',
        shift: 'P',
        code: 'KeyP',
      },
      {
        small: '[',
        shift: '{',
        code: 'BracketLeft',
      },
      {
        small: ']',
        shift: '}',
        code: 'BracketRight',
      },
        /*3rd row*/
      {
        small: 'CapsLock',
        shift: null,
        code: 'CapsLock',
      },
      {
        small: 'a',
        shift: 'A',
        code: 'KeyA',
      },
      {
        small: 's',
        shift: 'S',
        code: 'KeyS',
      },
      {
        small: 'd',
        shift: 'D',
        code: 'KeyD',
      },
      {
        small: 'f',
        shift: 'F',
        code: 'KeyF',
      },
      {
        small: 'g',
        shift: 'G',
        code: 'KeyG',
      },
      {
        small: 'h',
        shift: 'H',
        code: 'KeyH',
      },
      {
        small: 'j',
        shift: 'J',
        code: 'KeyJ',
      },
      {
        small: 'k',
        shift: 'K',
        code: 'KeyK',
      },
      {
        small: 'l',
        shift: 'L',
        code: 'KeyL',
      },
      {
        small: ';',
        shift: ':',
        code: 'Semicolon',
      },
      {
        small: "'",
        shift: '"',
        code: 'Quote',
      },
      {
        small: 'Enter',
        shift: null,
        code: 'Enter',
      },
        /*4th row*/
      {
        small: 'Shift',
        shift: null,
        code: 'ShiftLeft',
      },
      {
        small: 'z',
        shift: 'Z',
        code: 'KeyZ',
      },
      {
        small: 'x',
        shift: 'X',
        code: 'KeyX',
      },
      {
        small: 'c',
        shift: 'C',
        code: 'KeyC',
      },
      {
        small: 'v',
        shift: 'V',
        code: 'KeyV',
      },
      {
        small: 'b',
        shift: 'B',
        code: 'KeyB',
      },
      {
        small: 'n',
        shift: 'N',
        code: 'KeyN',
      },
      {
        small: 'm',
        shift: 'M',
        code: 'KeyM',
      },
      {
        small: ',',
        shift: '<',
        code: 'Comma',
      },
      {
        small: '.',
        shift: '>',
        code: 'Period',
      },
      {
        small: '/',
        shift: '?',
        code: 'Slash',
      },
        /*5th row*/
      {
        small: 'done',
        shift: null,
        code: 'Done',
      },
      {
        small: 'en',
        shift: 'ru',
        code: 'Lang',
      },
      {
        small: ' ',
        shift: null,
        code: 'Space',
      },
      {
        small: 'arrowLeft',
        shift: null,
        code: 'ArrowLeft',
      },
      {
        small: 'arrowRight',
        shift: null,
        code: 'ArrowRight',
      },


      /*"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "done", "en", "space", "arrowLeft", "arrowRight"*/
    ]
  },

  keyButtons: [],

  init(lang) {
    // Create elements
    this.elements.outputText = document.createElement('textarea');
    this.elements.keyboardMain = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup elements
    this.elements.outputText.classList.add("use-keyboard-input");
    this.elements.outputText.setAttribute('placeholder', 'Click here and print your text');
    this.elements.keyboardMain.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys(this.keyLayouts[lang]));

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.keyboardMain.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.outputText);
    document.body.appendChild(this.elements.keyboardMain);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });

  },

  _createKeys(keyLayout) {
    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["Backspace", "BracketRight", "Enter", "Slash"].indexOf(key.code) !== -1;

      this.keyButtons.push(key);

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.dataset['code'] = key.code;
      keyElement.classList.add("keyboard__key");

      switch (key.code) {
        case "Tab":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("keyboard_tab");

          break;

        case "Backspace":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("backspace");

          break;

        case "CapsLock":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          break;

        case "ShiftLeft":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn", "keyboard__key--activatable");
          keyElement.innerHTML = key.small;

          break;

        case "Enter":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          break;

        case "Space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          break;

        case "ArrowLeft":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("keyboard_arrow_left");

          break;

        case "ArrowRight":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn");
          keyElement.innerHTML = createIconHTML("keyboard_arrow_right");

          break;

        case "Done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--fn", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
          });

          break;

        default:

          if (key.small.match(/[a-zA-Zа-яА-ЯёЁ]/) && !(key.small === 'ru' || key.small === 'en')) {
            const shiftDiv = document.createElement('div');
            const smallDiv = document.createElement('div');
            shiftDiv.classList.add('keyboard__key-shift');
            smallDiv.classList.add('keyboard__key-small');
            shiftDiv.textContent = '';
            smallDiv.textContent = key.small;

            keyElement.appendChild(shiftDiv);
            keyElement.appendChild(smallDiv);
          } else {
            const shiftDiv = document.createElement('div');
            const smallDiv = document.createElement('div');
            shiftDiv.classList.add('keyboard__key-shift');
            smallDiv.classList.add('keyboard__key-small');

            shiftDiv.textContent = key.shift;
            smallDiv.textContent = key.small;

            keyElement.appendChild(shiftDiv);
            keyElement.appendChild(smallDiv);
          }

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    //Add event listener on keys
    document.addEventListener('keydown', this.handleEvent);
    document.addEventListener('keyup', this.handleEvent);
    this.elements.keysContainer.addEventListener('mousedown', this.preHandleEvent);
    this.elements.keysContainer.addEventListener('mouseup', this.preHandleEvent);

    return fragment;
  },

  preHandleEvent(evt) {
    evt.stopPropagation();
    const keyDiv = evt.target.closest('.keyboard__key');
    if (!keyDiv) return;
    const { dataset: { code } } = keyDiv;
    keyDiv.addEventListener('mouseleave', (evt) => {
      keyDiv.classList.remove('keyboard__key--pressed');
    });

    Keyboard.handleEvent( { code, type: evt.type} );
  },

  handleEvent(evt) {
    if (evt.stopPropagation) evt.stopPropagation();
    const { code, type} = evt;
    const keyObj = Keyboard.keyButtons.find( key => key.code === code);
    if (!keyObj) return;
    Keyboard.elements.outputText.focus();

    if (type.match(/keydown|mousedown/)) {
      //if (type.match(/key/)) evt.preventDefault();
      let keyIndex = Keyboard.keyButtons.findIndex( key => key.code === code);
      Keyboard.elements.keys[keyIndex].classList.add('keyboard__key--pressed');


      //Switch language
      if (keyObj.code.match(/Lang/)) {
        this.switchLanguage(keyObj.shift);
      }

    } else if (type.match(/keyup|mouseup/)) {
      let keyIndex = Keyboard.keyButtons.findIndex( key => key.code === code);
      Keyboard.elements.keys[keyIndex].classList.remove('keyboard__key--pressed');
    }


  },

  switchLanguage(nextLang) {

    this.keyButtons = [];
    this.keyLayouts[nextLang].forEach((button, i) => {
      const keyObj = button;
      if (!keyObj) return;
      this.keyButtons.push(button);

      let currentKey = this.elements.keys[i];

      if (!this.elements.keys[i].dataset.code.match(/Backspace|Tab|Caps|Shift|Enter|Done|Arrow|Space/)) {
        if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g) ) {
          currentKey.querySelector('.keyboard__key-shift').innerHTML = keyObj.shift;
        } else if (keyObj.shift && (keyObj.shift === 'ru' || keyObj.shift === 'en')) {
          currentKey.querySelector('.keyboard__key-shift').innerHTML = keyObj.shift;
        } else {
          currentKey.querySelector('.keyboard__key-shift').innerHTML = '';
        }
        currentKey.querySelector('.keyboard__key-small').innerHTML = keyObj.small;
      }


    });

  },

  /*_triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },*/

  open(initialValue) {
    this.properties.value = initialValue || "";
    this.elements.keyboardMain.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.elements.outputText.blur();
    this.elements.keyboardMain.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init('ru');
});
