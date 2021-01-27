import TripFiltersView from '../view/trip-filters';
import {render, replace, remove} from '../util/render';
import {FILTER} from '../util/filter';
import {RenderPosition, FilterTypes, UpdateType} from '../const';

export default class FilterPresenter {
  constructor(filterContainer, filterModel, pointsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._pointsModel = pointsModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._pointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilters();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new TripFiltersView(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);
  }

  _getFilters() {
    return Object.values(FilterTypes).map((filter) => {
      return {
        type: filter,
        name: filter.toUpperCase(),
        count: FILTER[filter](this._pointsModel.getPoints()).length
      };
    });
  }

  proscribeFilters() {
    this._filterComponent.proscribeFilters();
  }

  activateFilters() {
    this._filterComponent.proscribeFilters();
  }
}
