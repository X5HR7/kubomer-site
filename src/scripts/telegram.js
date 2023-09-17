import { URL_API, CHAT_ID } from './constants.js';

const form = document.querySelector('.popup__form');
const phoneInputElement = form.querySelector('.popup__input_type_phone');
const submitButton = form.querySelector('.popup__button-submit');
const errorField = form.querySelector('.phone-input-error');

const handleFormSubmit = event => {
  event.preventDefault();

  submitButton.textContent = 'Сохранение...';
  submitButton.classList.add('popup__button-submit_disabled');
  submitButton.setAttribute('disabled', true);

  const message = `<b>Новая заявка!</b>\n<b>Телефон:</b> ${phoneInputElement.value}`;

  fetch(URL_API, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    }),
  })
    .then(res => {
      if (res.ok) {
        errorField.textContent = 'Ваша заявка отправлена!';
        errorField.classList.add('success');
      }
    })
    .catch(() => {
      errorField.classList.remove('success');
      errorField.textContent =
        'Во время запроса произошла ошибка! Проверьте Интернет соединение или попробуйте позже.';
    })
    .finally(() => {
      submitButton.textContent = 'Отправить';
      submitButton.classList.remove('popup__button-submit_disabled');
      submitButton.removeAttribute('disabled');
    });
};

form.addEventListener('submit', handleFormSubmit);
