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

    // Оборачиваем кнопки в строки и клавиатуру в контейнер
    const rows = this.splitArray(buttons, 13);
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard');
    rows.forEach((row) => {
      const rowContainer = document.createElement('div');
      rowContainer.classList.add('keyboard__row');
      row.forEach((button) => rowContainer.appendChild(button));
      keyboardContainer.appendChild(rowContainer);
    });

    // Добавляем обработчики событий для нажатия на кнопки виртуальной клавиатуры
    keyboardContainer.addEventListener(
      'click',
      this.handleButtonClick.bind(this),
    );

    // Вставляем контейнер клавиатуры в DOM
    const appContainer = document.getElementById('body');
    appContainer.appendChild(keyboardContainer);
  }

  handleKeyPress() {
    // обработка нажатий клавиш
  }

  switchLayout() {
    // переключение раскладки клавиатуры
  }
}
