import IMask from 'imask';

const phoneInput = document.querySelector('.popup__input_type_phone');
const phoneInputErrorElement = document.querySelector('.phone-input-error');

const btn = document.querySelector('.popup__button-submit');

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

phoneInput.addEventListener('input', phoneInputHandler);

function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.remove('popup__button-submit_disabled');
    btn.removeAttribute('disabled');
    phoneInputErrorElement.textContent = '';
  } else {
    btn.classList.add('popup__button-submit_disabled');
    btn.setAttribute('disabled', true);
    phoneInputErrorElement.textContent = 'Введите корректный номер телефона';
  }
}