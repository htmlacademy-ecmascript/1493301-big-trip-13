import AbstractView from './abstract';
import {capitalize} from '../util/global';
import {MenuTabs} from '../const';


const createSiteMenuTemplate = () => {
  const defaultValue = MenuTabs.TABLE;
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${Object.values(MenuTabs).map((MenuTab) =>
    `<a class="trip-tabs__btn  ${MenuTab === defaultValue ? `trip-tabs__btn--active` : ``}" href="#${MenuTab}" data-value="${MenuTab}">${capitalize(MenuTab)}</a>`
  ).join(``)}
  </nav>`;
};

export default class SiteMenuView extends AbstractView {
  constructor() {
    super();
    this._menuTabsClickHandler = this._menuTabsClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }

  _menuTabsClickHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }
    evt.preventDefault();

    this.getElement().querySelector(`.trip-tabs__btn--active`).classList.remove(`trip-tabs__btn--active`);
    evt.target.classList.add(`trip-tabs__btn--active`);

    this._callback.menuTabsClick(evt.target.dataset.value);
  }

  setMenuTabsClickHandler(callback) {
    this._callback.menuTabsClick = callback;
    this.getElement().addEventListener(`click`, this._menuTabsClickHandler);
  }
}
