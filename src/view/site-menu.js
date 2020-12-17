import {createElement, capitalize} from '../util';
import {MenuTabs} from '../const';


const createSiteMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn" href="#">${capitalize(MenuTabs.TABLE)}</a>
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${capitalize(MenuTabs.STATS)}</a>
  </nav>`;
};

export default class SiteMenuView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate();
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
