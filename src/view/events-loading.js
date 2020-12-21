import {createElement} from '../util';

const createEventsLoadingTemplate = () => {
  return `
  <p class="trip-events__msg">Loading...</p>`;
};


export default class LoadingView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventsLoadingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
