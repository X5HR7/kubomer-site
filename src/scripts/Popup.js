export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.querySelector('.success')?.classList.remove('success');
    this._popup.querySelector('.popup__error').textContent = '';
    window.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt !== undefined && evt.key !== undefined) {
      if (evt.key.toLowerCase() === 'escape') {
        this.close();
      }
    }
  }

  setEventListeners() {
    const btnClose = this._popup.querySelector('.popup__button-close');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
