import Observer from '../util/observer';
import {FilterTypes} from '../const';

export default class FilterModel extends Observer {
  constructor() {
    super();
    this._currentFilter = FilterTypes.EVERYTHING;
  }

  getFilters() {
    return this._currentFilter;
  }

  setFilter(updateType, filter) {
    this._currentFilter = filter;
    this._notify(updateType, filter);
  }
}
