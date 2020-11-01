import * as storage from './storage.js';
import create from './utils/create.js';
import language from './layouts/index.js'; // { en, ru}
import Key from './Key.js';

const main = create('main', '',
    [
      create('h1', 'title', 'Virtual Keyboard'),
      create('h3', 'subtitle', 'Windows keyboard that has been made under Linux'),
      create('p', 'hint', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language. Last language saves in localStorage')
    ]
);

export default class Keyboard {
  constructor(rowsOrder) {
    this.rowsOrder = rowsOrder;
    this.keysPressed = {};
    this.isCaps = false;
  }

  init(langCode) {
    this.keyBase = language[langCode];
    this.output = create('textarea', 'output', null, main,
        ['placeholder', 'Your text...'],
        ['rows', 5],
        ['cols', 50],
        ['spellcheck', false],
        ['autocorrect', 'off']);
    this.container = create('div', 'keyboard', null, main, ['language', langCode]);
    document.body.prepend(main);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.rowsOrder.forEach( (row, i) => {
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach( (code) => {
        const keyObj = this.keyBase.find( (key) => key.code === code );
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });

    document.addEventListener('keydown', this.handleEvent);
    document.addEventListener('keyup', this.handleEvent);
  }

  handleEvent = (evt) => {
    if (evt.stopPropagation) evt.stopPropagation();
    const {code, type} = evt;
    const keyObj = this.keyButtons.find((key) => key.code === code);
    if (!keyObj) return;
    this.output.focus();

    if (type.match(/keydown|mousedown/)) {
      if (type.match(/key/)) evt.preventDefault();
      keyObj.div.classList.add('active');

      //Switch language
      if (code.match(/Control/)) this.ctrlKey = true;
      if (code.match(/Alt/)) this.altKey = true;

      if (code.match(/Control/) && this.altKey) this.switchLanguage();
      if (code.match(/Alt/) && this.ctrlKey) this.switchLanguage();

    } else if (type.match(/keyup|mouseup/)) {
      keyObj.div.classList.remove('active');

      //Switch language
      if (code.match(/Control/)) this.ctrlKey = false;
      if (code.match(/Alt/)) this.altKey = false;
    }
  };

  switchLanguage = () => {
    const langAbbr = Object.keys(language);
    let langInx = langAbbr.indexOf(this.container.dataset.language);
    this.keyBase = langInx + 1  < langAbbr.length ? language[langAbbr[langInx += 1]]
        : language[langAbbr[langInx -= langInx]];

    this.container.dataset.language = langAbbr[langInx];
    storage.set('kbLang', langAbbr[langInx]);

    this.keyButtons.forEach( (button) => {
      const keyObj = this.keyBase.find((key) => key.code === button.code);
      if (!keyObj) return;
      button.shift = keyObj.shift;
      button.small = keyObj.small;
      if (keyObj.shift && keyObj.shift.match(/^a-zA-Zа-яА-ЯёЁ0-9/g)) {
        button.sub.innerHTML = keyObj.shift;
      } else {
        button.sub.innerHTML = '';
      }
      button.letter.innerHTML = keyObj.small;
    });
  };
}