import AbstractView from './abstract';
import {SortTypes} from '../const';
import {capitalize} from '../util/global';

const createSortingItemTemplate = (sortType, currentSortType) => {
  const isInactive = (sortTypes) => sortTypes === `event` || sortTypes === `offers`;
  return `<div class="trip-sort__item  trip-sort__item--${sortType}">
    <input data-sort-type="${sortType}" id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}" ${sortType === currentSortType ? `checked` : ``} ${isInactive(sortType) ? `disabled` : ``} >
    <label class="trip-sort__btn" for="sort-${sortType}" ${isInactive(sortType) ? `` : `data-sort-type="${sortType}"`}>
      ${capitalize(sortType)}
    </label>
  </div>`;
};

const createTripSortingTemplate = (currentSortType) => {
  const sortItemsTemplate = Object.values(SortTypes).map((sortType) => createSortingItemTemplate(sortType, currentSortType)).join(``);
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsTemplate}
    </form>`;
};


export default class SortingView extends AbstractView {
  constructor(currentSortType) {
    super();
    this._currentSortType = currentSortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createTripSortingTemplate(this._currentSortType);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `INPUT`) {
      return;
    }
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
