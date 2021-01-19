import Observer from '../util/observer';
import {FilterTypes} from '../const';

export default class FilterModel extends Observer {
  constructor() {
    super();
    this._activeFilter = FilterTypes.EVERYTHING;
  }

  getFilter() {
    return this._activeFilter;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }
}
