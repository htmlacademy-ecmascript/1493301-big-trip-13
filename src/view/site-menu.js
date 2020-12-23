import AbstractView from './abstract';
import {capitalize} from '../util/global';
import {MenuTabs} from '../const';


const createSiteMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn" href="#">${capitalize(MenuTabs.TABLE)}</a>
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${capitalize(MenuTabs.STATS)}</a>
  </nav>`;
};

export default class SiteMenuView extends AbstractView {
  getTemplate() {
    return createSiteMenuTemplate();
  }
}

