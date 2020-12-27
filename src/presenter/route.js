import TripInfoView from '../view/trip-info';
import SiteMenuView from '../view/site-menu';
import TripFiltersView from '../view/trip-filters';
import EmptyListView from '../view/empty-list';
import ListView from '../view/list';
import SortingView from '../view/trip-sorting';
import RoutePresenter from './point';
import {render} from '../util/render';
import {updateItem} from '../util/global';
import {SortTypes, RenderPosition} from '../const';
import {sortByDate, sortByPrice, sortByDuration, generateDays} from '../util/event';

export default class Route {
  constructor(routeMainContainer, routePointsContainer) {
    this._routePresenter = {};
    this._currentSortType = SortTypes.DAY;


    this._routeMainContainer = routeMainContainer;
    this._routePointsContainer = routePointsContainer;

    this._eventsListComponent = new ListView();
    this._sortingComponent = new SortingView();
    this._menuComponent = new SiteMenuView();
    this._filtersComponent = new TripFiltersView();
    this._emptyListComponent = new EmptyListView();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);

  }

  init(routePoints) {

    this._sourcePoints = routePoints.slice().sort(sortByDate);
    this._routePoints = this._sourcePoints.slice();

    this._sourcedDays = generateDays(this._routePoints);
    this._days = this._sourcedDays.slice();

    render(this._routeMainContainer, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderRouteInfo();
    this._renderRoute();

  }

  _sortPoints(sortType) {
    switch (sortType) {
      case SortTypes.TIME:
        this._routePoints.sort(sortByDuration);
        this._days = null;
        break;
      case SortTypes.PRICE:
        this._routePoints.sort(sortByPrice);
        break;
      case SortTypes.DAY:
        this._routePoints.sort(sortByDate);
        break;
      default:
        this._routePoints = this._sourcePoints.slice();
        this._days = this._sourcedDays.slice();
    }
    this._currentSortType = sortType;
  }


  _renderSort() {
    render(this._routePointsContainer, this._sortingComponent, RenderPosition.AFTERBEGIN);
    this._sortingComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }


  _handlePointChange(updatePoint) {
    this._routePoints = updateItem(this._routePoints, updatePoint);
    this._routePresenter[updatePoint.id].init(updatePoint);
  }

  _handleModeChange() {
    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _clearPointsList() {
    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePresenter = {};
  }


  _renderPoint(points) {
    const routePresenter = new RoutePresenter(this._eventsListComponent, this._handlePointChange, this._handleModeChange);
    routePresenter.init(points);
    this._routePresenter[points.id] = routePresenter;
  }

  _renderRoutePoints() {
    this._routePoints
      .forEach((routePoint) => this._renderPoint(routePoint));

  }

  _renderEmptyList() {
    render(this._routePointsContainer, this._emptyListComponent, RenderPosition.BEFOREEND);
  }

  _renderRouteInfo() {
    const routeInfoComponent = new TripInfoView(this._routePoints);
    render(this._routeMainContainer, routeInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderRouteControls() {
    const routeControlsElements = this._routeMainContainer.querySelector(`.trip-controls`);
    render(routeControlsElements, this._menuComponent, RenderPosition.AFTERBEGIN);
    render(routeControlsElements, this._filtersComponent, RenderPosition.BEFOREEND);
  }

  _renderPointsList() {
    render(this._routePointsContainer, this._eventsListComponent, RenderPosition.BEFOREEND);
  }

  _renderRoute() {
    if (this._routePoints.length === 0) {
      this._renderEmptyList();
      return;
    }
    this._renderRouteControls();
    this._renderSort();
    this._renderPointsList();
    this._renderRoutePoints(this._routePoints);
  }

  _handlerSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointsList();
    this._renderRoute();
  }
}

