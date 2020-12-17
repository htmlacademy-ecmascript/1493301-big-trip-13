import {createElement} from '../util';
import {FilterTypes} from '../const';

const createTripFiltersTemplate = () => {
  return `<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked}>
      <label class="trip-filters__filter-label" for="filter-everything">${FilterTypes.EVERYTHING}</label>
    </div>
    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">${FilterTypes.FUTURE}</label>
    </div>
    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">${FilterTypes.PAST}</label>
    </div>
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};

export default class TripFiltersView {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getTemplate() {
    return createTripFiltersTemplate(this._filter);
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
