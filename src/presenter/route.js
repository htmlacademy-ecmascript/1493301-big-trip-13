import EmptyListView from '../view/empty-list';
import ListView from '../view/list';
import SortingView from '../view/trip-sorting';
import RoutePresenter from './point';
import {render, remove} from '../util/render';
import {SortTypes, RenderPosition, UserAction, UpdateType, FilterTypes} from '../const';
import {sortByDate, sortByPrice, sortByDuration} from '../util/event';
import {FILTER} from '../util/filter';
import NewPointPresenter from './new-point';

export default class Route {
  constructor(routeMainContainer, routePointsContainer, filterModel, pointsModel) {
    this._routePresenter = {};
    this._pointsModel = pointsModel;
    this._filterModel = filterModel;

    this._currentSortType = SortTypes.DAY;

    this._sortingComponent = null;
    this._routeMainContainer = routeMainContainer;
    this._routePointsContainer = routePointsContainer;

    this._eventsListComponent = new ListView();
    this._sortingComponent = new SortingView();
    this._emptyListComponent = new EmptyListView();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);

    this._pointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._NewPointPresenter = new NewPointPresenter(this._eventsListComponent, this._handleViewAction);
  }

  init() {
    render(this._routePointsContainer, this._eventsListComponent, RenderPosition.BEFOREEND);
    this._renderRoute();

  }

  createEvent() {
    this._currentSortType = SortTypes.DEFAULT;
    this._filterModel.setFilter(UpdateType.MAJOR, FilterTypes.EVERYTHING);
    this._NewPointPresenter.init(this._buttonNewPoint);
  }

  _getPoints() {
    const filterType = this._filterModel.getFilter();
    const routePoints = this._pointsModel.getPoints();
    const filteredPoints = FILTER[filterType](routePoints);

    switch (this._currentSortType) {
      case SortTypes.DAY:
        return filteredPoints.sort(sortByDate);
      case SortTypes.TIME:
        return filteredPoints.sort(sortByDuration);
      case SortTypes.PRICE:
        return filteredPoints.sort(sortByPrice);
    }
    return filteredPoints;
  }

  _handlerSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;

    this._clearRoute();
    this._renderRoute();
  }

  _renderSort() {
    if (this._sortingComponent !== null) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);

    render(this._routePointsContainer, this._sortingComponent, RenderPosition.AFTERBEGIN);
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this._pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this._pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this._pointsModel.deletePoint(updateType, update);
        break;
    }
  }

  _handleModeChange() {
    this._NewPointPresenter.destroy();

    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _clearRoute({resetSortType = false} = {}) {
    const pointsAmount = this._getPoints().length;

    this._NewPointPresenter.destroy();

    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePresenter = {};

    remove(this._sortingComponent);
    remove(this._emptyListComponent);

    this._renderedPointsAmount = Math.min(pointsAmount, this._renderedPointsAmount);


    if (resetSortType) {
      this._currentSortType = SortTypes.DEFAULT;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._routePresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearRoute();
        this._renderRoute();
        break;
      case UpdateType.MAJOR:
        this._clearRoute({resetSortType: true, resetRenderedPointsAmount: true});
        this._renderRoute();
        break;
    }
  }

  _renderPoint(points) {
    const routePresenter = new RoutePresenter(this._eventsListComponent, this._handleViewAction, this._handleModeChange);
    routePresenter.init(points);
    this._routePresenter[points.id] = routePresenter;
  }

  _renderRoutePoints(points) {
    points.forEach((point) => this._renderPoint(point));
  }

  _renderEmptyList() {
    render(this._routePointsContainer, this._emptyListComponent, RenderPosition.BEFOREEND);
  }

  _renderRouteControls() {
    const routeControlsElements = this._routeMainContainer.querySelector(`.trip-controls`);
    render(routeControlsElements, this._menuComponent, RenderPosition.AFTERBEGIN);
    render(routeControlsElements, this._filtersComponent, RenderPosition.BEFOREEND);
  }

  _renderPointsList() {
    const pointsAmount = this._getPoints().length;
    const routePoints = this._getPoints().slice(0, Math.min(pointsAmount));

    this._renderRoutePoints(routePoints);
    this._renderRoutePoints(0, Math.min(this._pointsModel.length));
  }

  _renderRoute() {
    const routePoints = this._getPoints();
    const pointsAmount = routePoints.length;

    if (pointsAmount === 0) {
      this._renderEmptyList();
      return;
    }

    this._renderSort();
    this._renderRoutePoints(routePoints);
  }
}
