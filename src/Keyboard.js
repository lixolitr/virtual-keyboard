export default class Keyboard {
  constructor() {
    this.layout = 'en';
    this.capsLock = false;
  }

  generateLayout() {
    // Создаем массивы с данными о кнопках клавиатуры для каждой раскладки
    const enLayout = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'backspace',
      'tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'del',
      'caps',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'enter',
      'shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      'up',
      'shift',
      'ctrl',
      'win',
      'alt',
      'space',
      'alt',
      'left',
      'down',
      'right',
      'ctrl',
    ];
    const ruLayout = ['й', 'ц', 'у', 'к', 'е', 'н'];
    const layoutData = this.layout === 'en' ? enLayout : ruLayout;

    // Создаем DOM-элементы кнопок с соответствующими символами и атрибутами
    const buttons = layoutData.map((symbol) => {
      const button = document.createElement('button');
      button.classList.add('keyboard__button');
      button.textContent = symbol;
      button.dataset.button = symbol;
      return button;
    });
  }

  handleKeyPress() {
    // обработка нажатий клавиш
  }

  switchLayout() {
    // переключение раскладки клавиатуры
  }
}
