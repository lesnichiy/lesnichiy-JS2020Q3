const Keyboard = {
  elements: {
    outputText: null,
    keyboardMain: null,
    keysContainer: null,
    keys: []
  },

  properties: {
    value: "",
    isCaps: false,
    shiftKey: false,
  },

  keyLayouts: {
    ru: [
      /*1st row*/
      {
        small: 'ё',
        shift: 'Ё',
        code: 'Backquote',
        isFnKey: false,
      },
      {
        small: '1',
        shift: '!',
        code: 'Digit1',
        isFnKey: false,
      },
      {
        small: '2',
        shift: '"',
        code: 'Digit2',
        isFnKey: false,
      },
      {
        small: '3',
        shift: '№',
        code: 'Digit3',
        isFnKey: false,
      },
      {
        small: '4',
        shift: ';',
        code: 'Digit4',
        isFnKey: false,
      },
      {
        small: '5',
        shift: '%',
        code: 'Digit5',
        isFnKey: false,
      },
      {
        small: '6',
        shift: ':',
        code: 'Digit6',
        isFnKey: false,
      },
      {
        small: '7',
        shift: '?',
        code: 'Digit7',
        isFnKey: false,
      },
      {
        small: '8',
        shift: '*',
        code: 'Digit8',
        isFnKey: false,
      },
      {
        small: '9',
        shift: '(',
        code: 'Digit9',
        isFnKey: false,
      },
      {
        small: '0',
        shift: ')',
        code: 'Digit0',
        isFnKey: false,
      },
      {
        small: '-',
        shift: '_',
        code: 'Minus',
        isFnKey: false,
      },
      {
        small: '=',
        shift: '+',
        code: 'Equal',
        isFnKey: false,
      },
      {
        small: 'Backspace',
        shift: null,
        code: 'Backspace',
        isFnKey: true,
      },
        /*2nd row*/
      {
        small: 'Tab',
        shift: null,
        code: 'Tab',
        isFnKey: true,
      },
      {
        small: 'й',
        shift: 'Й',
        code: 'KeyQ',
        isFnKey: false,
      },
      {
        small: 'ц',
        shift: 'Ц',
        code: 'KeyW',
        isFnKey: false,
      },
      {
        small: 'у',
        shift: 'У',
        code: 'KeyE',
        isFnKey: false,
      },
      {
        small: 'к',
        shift: 'К',
        code: 'KeyR',
        isFnKey: false,
      },
      {
        small: 'е',
        shift: 'Е',
        code: 'KeyT',
        isFnKey: false,
      },
      {
        small: 'н',
        shift: 'Н',
        code: 'KeyY',
        isFnKey: false,
      },
      {
        small: 'г',
        shift: 'Г',
        code: 'KeyU',
        isFnKey: false,
      },
      {
        small: 'ш',
        shift: 'Ш',
        code: 'KeyI',
        isFnKey: false,
      },
      {
        small: 'щ',
        shift: 'Щ',
        code: 'KeyO',
        isFnKey: false,
      },
      {
        small: 'з',
        shift: 'З',
        code: 'KeyP',
        isFnKey: false,
      },
      {
        small: 'х',
        shift: 'Х',
        code: 'BracketLeft',
        isFnKey: false,
      },
      {
        small: 'ъ',
        shift: 'Ъ',
        code: 'BracketRight',
        isFnKey: false,
      },
        /*3rd row*/
      {
        small: 'CapsLock',
        shift: null,
        code: 'CapsLock',
        isFnKey: true,
      },
      {
        small: 'ф',
        shift: 'Ф',
        code: 'KeyA',
        isFnKey: false,
      },
      {
        small: 'ы',
        shift: 'Ы',
        code: 'KeyS',
        isFnKey: false,
      },
      {
        small: 'в',
        shift: 'В',
        code: 'KeyD',
        isFnKey: false,
      },
      {
        small: 'а',
        shift: 'А',
        code: 'KeyF',
        isFnKey: false,
      },
      {
        small: 'п',
        shift: 'П',
        code: 'KeyG',
        isFnKey: false,
      },
      {
        small: 'р',
        shift: 'Р',
        code: 'KeyH',
        isFnKey: false,
      },
      {
        small: 'о',
        shift: 'О',
        code: 'KeyJ',
        isFnKey: false,
      },
      {
        small: 'л',
        shift: 'Л',
        code: 'KeyK',
        isFnKey: false,
      },
      {
        small: 'д',
        shift: 'Д',
        code: 'KeyL',
        isFnKey: false,
      },
      {
        small: 'ж',
        shift: 'Ж',
        code: 'Semicolon',
        isFnKey: false,
      },
      {
        small: 'э',
        shift: 'Э',
        code: 'Quote',
        isFnKey: false,
      },
      {
        small: 'Enter',
        shift: null,
        code: 'Enter',
        isFnKey: true,
      },
        /*4th row*/
      {
        small: 'Shift',
        shift: null,
        code: 'ShiftLeft',
        isFnKey: true,
      },
      {
        small: 'я',
        shift: 'Я',
        code: 'KeyZ',
        isFnKey: false,
      },
      {
        small: 'ч',
        shift: 'Ч',
        code: 'KeyX',
        isFnKey: false,
      },
      {
        small: 'с',
        shift: 'С',
        code: 'KeyC',
        isFnKey: false,
      },
      {
        small: 'м',
        shift: 'М',
        code: 'KeyV',
        isFnKey: false,
      },
      {
        small: 'и',
        shift: 'И',
        code: 'KeyB',
        isFnKey: false,
      },
      {
        small: 'т',
        shift: 'Т',
        code: 'KeyN',
        isFnKey: false,
      },
      {
        small: 'ь',
        shift: 'Ь',
        code: 'KeyM',
        isFnKey: false,
      },
      {
        small: 'б',
        shift: 'Б',
        code: 'Comma',
        isFnKey: false,
      },
      {
        small: 'ю',
        shift: 'Ю',
        code: 'Period',
        isFnKey: false,
      },
      {
        small: '.',
        shift: ',',
        code: 'Slash',
        isFnKey: false,
      },
        /*5th row*/
      {
        small: 'done',
        shift: null,
        code: 'Done',
        isFnKey: true,
      },
      {
        small: 'ru',
        shift: 'en',
        code: 'Lang',
        isFnKey: true,
      },
      {
        small: ' ',
        shift: null,
        code: 'Space',
        isFnKey: true,
      },
      {
        small: 'arrowLeft',
        shift: null,
        code: 'ArrowLeft',
        isFnKey: true,
      },
      {
        small: 'arrowRight',
        shift: null,
        code: 'ArrowRight',
        isFnKey: true,
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
        isFnKey: false,
      },
      {
        small: '1',
        shift: '!',
        code: 'Digit1',
        isFnKey: false,
      },
      {
        small: '2',
        shift: '@',
        code: 'Digit2',
        isFnKey: false,
      },
      {
        small: '3',
        shift: '#',
        code: 'Digit3',
        isFnKey: false,
      },
      {
        small: '4',
        shift: '$',
        code: 'Digit4',
        isFnKey: false,
      },
      {
        small: '5',
        shift: '%',
        code: 'Digit5',
        isFnKey: false,
      },
      {
        small: '6',
        shift: '^',
        code: 'Digit6',
        isFnKey: false,
      },
      {
        small: '7',
        shift: '&',
        code: 'Digit7',
        isFnKey: false,
      },
      {
        small: '8',
        shift: '*',
        code: 'Digit8',
        isFnKey: false,
      },
      {
        small: '9',
        shift: '(',
        code: 'Digit9',
        isFnKey: false,
      },
      {
        small: '0',
        shift: ')',
        code: 'Digit0',
        isFnKey: false,
      },
      {
        small: '-',
        shift: '_',
        code: 'Minus',
        isFnKey: false,
      },
      {
        small: '=',
        shift: '+',
        code: 'Equal',
        isFnKey: false,
      },
      {
        small: 'Backspace',
        shift: null,
        code: 'Backspace',
        isFnKey: true,
      },
      /*2nd row*/
      {
        small: 'Tab',
        shift: null,
        code: 'Tab',
        isFnKey: true,
      },
      {
        small: 'q',
        shift: 'Q',
        code: 'KeyQ',
        isFnKey: false,
      },
      {
        small: 'w',
        shift: 'W',
        code: 'KeyW',
        isFnKey: false,
      },
      {
        small: 'e',
        shift: 'E',
        code: 'KeyE',
        isFnKey: false,
      },
      {
        small: 'r',
        shift: 'R',
        code: 'KeyR',
        isFnKey: false,
      },
      {
        small: 't',
        shift: 'T',
        code: 'KeyT',
        isFnKey: false,
      },
      {
        small: 'y',
        shift: 'Y',
        code: 'KeyY',
        isFnKey: false,
      },
      {
        small: 'u',
        shift: 'U',
        code: 'KeyU',
        isFnKey: false,
      },
      {
        small: 'i',
        shift: 'I',
        code: 'KeyI',
        isFnKey: false,
      },
      {
        small: 'o',
        shift: 'O',
        code: 'KeyO',
        isFnKey: false,
      },
      {
        small: 'p',
        shift: 'P',
        code: 'KeyP',
        isFnKey: false,
      },
      {
        small: '[',
        shift: '{',
        code: 'BracketLeft',
        isFnKey: false,
      },
      {
        small: ']',
        shift: '}',
        code: 'BracketRight',
        isFnKey: false,
      },
        /*3rd row*/
      {
        small: 'CapsLock',
        shift: null,
        code: 'CapsLock',
        isFnKey: true,
      },
      {
        small: 'a',
        shift: 'A',
        code: 'KeyA',
        isFnKey: false,
      },
      {
        small: 's',
        shift: 'S',
        code: 'KeyS',
        isFnKey: false,
      },
      {
        small: 'd',
        shift: 'D',
        code: 'KeyD',
        isFnKey: false,
      },
      {
        small: 'f',
        shift: 'F',
        code: 'KeyF',
        isFnKey: false,
      },
      {
        small: 'g',
        shift: 'G',
        code: 'KeyG',
        isFnKey: false,
      },
      {
        small: 'h',
        shift: 'H',
        code: 'KeyH',
        isFnKey: false,
      },
      {
        small: 'j',
        shift: 'J',
        code: 'KeyJ',
        isFnKey: false,
      },
      {
        small: 'k',
        shift: 'K',
        code: 'KeyK',
        isFnKey: false,
      },
      {
        small: 'l',
        shift: 'L',
        code: 'KeyL',
        isFnKey: false,
      },
      {
        small: ';',
        shift: ':',
        code: 'Semicolon',
        isFnKey: false,
      },
      {
        small: "'",
        shift: '"',
        code: 'Quote',
        isFnKey: false,
      },
      {
        small: 'Enter',
        shift: null,
        code: 'Enter',
        isFnKey: true,
      },
        /*4th row*/
      {
        small: 'Shift',
        shift: null,
        code: 'ShiftLeft',
        isFnKey: true,
      },
      {
        small: 'z',
        shift: 'Z',
        code: 'KeyZ',
        isFnKey: false,
      },
      {
        small: 'x',
        shift: 'X',
        code: 'KeyX',
        isFnKey: false,
      },
      {
        small: 'c',
        shift: 'C',
        code: 'KeyC',
        isFnKey: false,
      },
      {
        small: 'v',
        shift: 'V',
        code: 'KeyV',
        isFnKey: false,
      },
      {
        small: 'b',
        shift: 'B',
        code: 'KeyB',
        isFnKey: false,
      },
      {
        small: 'n',
        shift: 'N',
        code: 'KeyN',
        isFnKey: false,
      },
      {
        small: 'm',
        shift: 'M',
        code: 'KeyM',
        isFnKey: false,
      },
      {
        small: ',',
        shift: '<',
        code: 'Comma',
        isFnKey: false,
      },
      {
        small: '.',
        shift: '>',
        code: 'Period',
        isFnKey: false,
      },
      {
        small: '/',
        shift: '?',
        code: 'Slash',
        isFnKey: false,
      },
        /*5th row*/
      {
        small: 'done',
        shift: null,
        code: 'Done',
        isFnKey: true,
      },
      {
        small: 'en',
        shift: 'ru',
        code: 'Lang',
        isFnKey: true,
      },
      {
        small: ' ',
        shift: null,
        code: 'Space',
        isFnKey: true,
      },
      {
        small: 'arrowLeft',
        shift: null,
        code: 'ArrowLeft',
        isFnKey: true,
      },
      {
        small: 'arrowRight',
        shift: null,
        code: 'ArrowRight',
        isFnKey: true,
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
      let currentKey = Keyboard.elements.keys[keyIndex];
      currentKey.classList.add('keyboard__key--pressed');

      if (code.match(/Shift/)) {
        if (Keyboard.properties.shiftKey) {
          Keyboard.properties.shiftKey = false;
          Keyboard.switchUpperCase(false);
        } else {
          Keyboard.properties.shiftKey = true;
          Keyboard.switchUpperCase(true);
        }
        currentKey.classList.toggle('keyboard__key--active');
      }

      if (code.match(/Caps/)) {
        if (Keyboard.properties.isCaps) {
          Keyboard.properties.isCaps = false;
          Keyboard.switchUpperCase(false);
        } else {
          Keyboard.properties.isCaps = true;
          Keyboard.switchUpperCase(true);
        }
        currentKey.classList.toggle('keyboard__key--active');
      }

      //if (Keyboard.properties.shiftKey) Keyboard.switchUpperCase(true);

      //Switch language
      if (keyObj.code.match(/Lang/)) this.switchLanguage(keyObj.shift);


      if (!Keyboard.properties.isCaps) {
        Keyboard.printToOutput(keyObj, Keyboard.properties.shiftKey ? keyObj.shift : keyObj.small);
      } else if (Keyboard.properties.isCaps) {
        if (Keyboard.properties.shiftKey) {
          if (keyObj.isFnKey) {
            Keyboard.printToOutput(keyObj, '');
          } else {
            Keyboard.printToOutput(keyObj, currentKey.querySelector('.keyboard__key-shift').innerHTML ? keyObj.shift : keyObj.small);
          }
        } else {
          if (keyObj.isFnKey) {
            Keyboard.printToOutput(keyObj, '');
          } else {
            Keyboard.printToOutput(keyObj, !currentKey.querySelector('.keyboard__key-shift').innerHTML ? keyObj.shift : keyObj.small);
          }
        }
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

  switchUpperCase(isTrue) {
    if (isTrue) {
      Keyboard.keyButtons.forEach((button, i) => {

        if (button.shift) {
          if (!button.isFnKey && Keyboard.properties.shiftKey) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').classList.add('shift-key--active');
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').classList.add('shift-key--inactive');
          }
        }

        if (!button.isFnKey
            && Keyboard.properties.isCaps
            && !Keyboard.properties.shiftKey
            && !Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').innerHTML
        ) {
          Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.shift;
        } else if (!button.isFnKey && Keyboard.properties.isCaps && Keyboard.properties.shiftKey) {
          Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.small;
        } else if (!button.isFnKey && !Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').innerHTML) {
          Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.shift;
        }
      });
    } else {
      console.log('dsfsdfg');
      Keyboard.keyButtons.forEach((button, i) => {
        if (!button.isFnKey && Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').innerHTML && !Keyboard.properties.shiftKey) {
          Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').classList.remove('shift-key--active');
          Keyboard.elements.keys[i].querySelector('.keyboard__key-small').classList.remove('shift-key--inactive');

          if (!Keyboard.properties.isCaps) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.small;
          } else if (!Keyboard.properties.isCaps) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.shift;
          }
        } else if (!button.isFnKey && !Keyboard.elements.keys[i].querySelector('.keyboard__key-shift').innerHTML && Keyboard.properties.shiftKey) {
          if (!Keyboard.properties.isCaps) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.shift;
          } else if (Keyboard.properties.isCaps) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.small;
          }
        } else if (!button.isFnKey) {
          if (Keyboard.properties.isCaps) {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.shift;
          } else {
            Keyboard.elements.keys[i].querySelector('.keyboard__key-small').innerHTML = button.small;
          }
        }
      });
    }

  },

  printToOutput(keyObj, symbol) {
    let cursorPosition = Keyboard.elements.outputText.selectionStart;
    const leftText = Keyboard.elements.outputText.value.slice(0, cursorPosition);
    const rightText = Keyboard.elements.outputText.value.slice(cursorPosition);

    console.log(keyObj.code, cursorPosition);

    const fnButtonsHandler = {
      Tab: () => {
        Keyboard.elements.outputText.value = `${leftText}\t${rightText}`;
        cursorPosition += 1;
      },
      ArrowLeft: () => {
        cursorPosition = cursorPosition - 1 >= 0 ? cursorPosition - 1 : 0;
      },
      ArrowRight: () => {
        cursorPosition += 1;
      },
      Enter: () => {
        Keyboard.elements.outputText.value = `${leftText}\n${rightText}`;
        cursorPosition += 1;
      },
      Backspace: () => {
        Keyboard.elements.outputText.value = `${leftText.slice(0, -1)}${rightText}`;
        cursorPosition -= 1;
      },
      Space: () => {
        Keyboard.elements.outputText.value = `${leftText} ${rightText}`;
        cursorPosition += 1;
      },
    };

    if (fnButtonsHandler[keyObj.code]) {
      fnButtonsHandler[keyObj.code]();
    } else if (!keyObj.isFnKey) {
      cursorPosition += 1;
      Keyboard.elements.outputText.value = `${leftText}${symbol || ''}${rightText}`;
    }
    Keyboard.elements.outputText.setSelectionRange(cursorPosition, cursorPosition);

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
