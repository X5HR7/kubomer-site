import './styles/index.css';

import './scripts/telegram.js';
import './scripts/phoneMask.js';
import './scripts/slider.js';

import Popup from './scripts/Popup.js';

const popupSelector = '.popup';

const buttonList = [
  document.querySelector('.header__button'),
  document.querySelector('.promo__button'),
  document.querySelector('.requests__button'),
  document.querySelector('.footer__button'),
];

const popup = new Popup(popupSelector);
popup.setEventListeners();

buttonList.forEach(button => button.addEventListener('click', () => popup.open()));