import EmptyListView from '../view/empty-list';
import ListView from '../view/list';
import SortingView from '../view/trip-sorting';
import PointPresenter from './point';
import {render, remove} from '../util/render';
import {SortTypes, RenderPositions, UserActions, UpdateTypes, FilterTypes, States} from '../const';
import {sortByDate, sortByPrice, sortByDuration} from '../util/event';
import {FILTER} from '../util/filter';
import NewPointPresenter from './new-point';
import LoadingView from '../view/events-loading';
import {isOnline} from '../util/global';
import TripInfoView from '../view/trip-info';

export default class RoutePresenter {
  constructor(routeMainContainer, routePointsContainer, pointsModel, filterModel, destinationsModel, offersModel, api) {
    this._pointPresenter = {};
    this._pointsModel = pointsModel;
    this._filterModel = filterModel;

    this._currentSortType = SortTypes.DAY;

    this._sortingComponent = null;
    this._routeMainContainer = routeMainContainer;
    this._routePointsContainer = routePointsContainer;
    this._destinationsModel = destinationsModel;
    this._offersModel = offersModel;
    this._api = api;

    this._isLoading = true;
    this._routeInfoComponent = null;

    this._eventsListComponent = new ListView();
    this._emptyListComponent = new EmptyListView();
    this._loadingComponent = new LoadingView();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);

    this._newPointPresenter = new NewPointPresenter(this._eventsListComponent, this._offersModel, this._destinationsModel, this._handleViewAction);
  }

  init() {
    this._renderPointsList();
    this._renderRoute();
    this._renderRouteInfo();

    this._pointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
    this._destinationsModel.addObserver(this._handleModelEvent);
    this._offersModel.addObserver(this._handleModelEvent);
  }

  createPoint(callback) {
    this._currentSortType = SortTypes.DAY;
    this._filterModel.setFilter(UpdateTypes.MAJOR, FilterTypes.EVERYTHING);
    this._newPointPresenter.init(callback);
  }

  destroy() {
    this._clearRoute({resetSortType: true});
    remove(this._eventsListComponent);

    this._pointsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
    this._destinationsModel.removeObserver(this._handleModelEvent);
    this._offersModel.removeObserver(this._handleModelEvent);
  }

  _getPoints() {
    const filterType = this._filterModel.getFilters();
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
      remove(this._sortingComponent);
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
    render(this._routePointsContainer, this._sortingComponent, RenderPositions.AFTERBEGIN);
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserActions.UPDATE_POINT:
        this._pointPresenter[update.id].setViewState(States.SAVING);

        this._api.updatePoint(update)
          .then((response) => {
            this._pointsModel.updatePoint(updateType, response);
          })
          .catch(() => {
            this._pointPresenter[update.id].setViewState(States.ABORTING);
          });
        break;
      case UserActions.ADD_POINT:
        this._newPointPresenter.setSaving();

        this._api.addPoint(update)
          .then((response) => {
            this._pointsModel.addPoint(updateType, response);
          })
          .catch(() => {
            this._newPointPresenter.setAborting();
          });
        break;
      case UserActions.DELETE_POINT:
        this._pointPresenter[update.id].setViewState(States.DELETING);

        this._api.deletePoint(update)
          .then(() => {
            this._pointsModel.deletePoint(updateType, update);
          })
          .catch(() => {
            this._pointPresenter[update.id].setViewState(States.ABORTING);
          });
        break;
    }
  }

  _handleModeChange() {
    this._newPointPresenter.destroy();
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _clearRoute({resetSortType = false} = {}) {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
    this._newPointPresenter.destroy();

    remove(this._sortingComponent);
    remove(this._emptyListComponent);
    remove(this._loadingComponent);

    if (resetSortType) {
      this._currentSortType = SortTypes.DAY;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateTypes.PATCH:
        this._pointPresenter[data.id].init(data);
        if (!isOnline()) {
          window.addEventListener(`online`, () => {
            this._pointPresenter[data.id].init(data);
          });
        }
        break;
      case UpdateTypes.MINOR:
        this._clearRoute();
        this._renderRoute();
        this._renderRouteInfo();
        break;
      case UpdateTypes.MAJOR:
        this._clearRoute(true);
        this._renderRoute();
        this._renderRouteInfo();
        break;
      case UpdateTypes.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderRoute();
        this._renderRouteInfo();
        break;
    }
  }

  _renderLoading() {
    render(this._routePointsContainer, this._loadingComponent, RenderPositions.BEFOREEND);
  }

  _renderPoint(points) {
    const pointPresenter = new PointPresenter(this._eventsListComponent, this._offersModel, this._destinationsModel, this._handleViewAction, this._handleModeChange);
    pointPresenter.init(points);
    this._pointPresenter[points.id] = pointPresenter;
  }

  _renderRoutePoints(points) {
    points.forEach((point) => this._renderPoint(point));
  }

  _renderEmptyList() {
    render(this._routePointsContainer, this._emptyListComponent, RenderPositions.BEFOREEND);
  }

  _renderPointsList() {
    render(this._routePointsContainer, this._eventsListComponent, RenderPositions.BEFOREEND);
  }

  _renderRouteInfo() {
    if (!this._pointsModel.getPoints().length) {
      return;
    }

    if (this._routeInfoComponent !== null) {
      remove(this._routeInfoComponent);
      this._routeInfoComponent = null;
    }

    this._routeInfoComponent = new TripInfoView(this._pointsModel.getPoints());
    render(this._routeMainContainer, this._routeInfoComponent, RenderPositions.AFTERBEGIN);
  }

  _renderRoute() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    const routePoints = this._getPoints();
    const pointsAmount = routePoints.length;

    if (pointsAmount === 0) {
      this._renderEmptyList();
      return;
    }
    this._renderRouteInfo();
    this._renderSort();
    this._renderRoutePoints(routePoints);
  }
}
