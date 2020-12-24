import TripInfoView from '../view/trip-info';
import SiteMenuView from '../view/site-menu';
import TripFiltersView from '../view/trip-filters';
import EmptyListView from '../view/empty-list';
import ListView from '../view/list';
import SortingView from '../view/trip-sorting';
import RoutePresenter from './point';
import {RenderPosition} from '../const';
import {render} from '../util/render';
import {updateItem} from '../util/global';

export default class Route {
  constructor(routeMainContainer, routePointsContainer) {
    this._routePresenter = {};

    this._routeMainContainer = routeMainContainer;
    this._routePointsContainer = routePointsContainer;

    this._eventsListComponent = new ListView();
    this._sortingComponent = new SortingView();
    this._menuComponent = new SiteMenuView();
    this._filtersComponent = new TripFiltersView();
    this._listEmptyComponent = new EmptyListView();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(routePoints) {
    this._routePoints = routePoints.slice();
    this._renderRoute();
  }


  _renderSort() {
    render(this._routePointsContainer, this._sortingComponent, RenderPosition.AFTERBEGIN);
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


  _renderPoint(eventElement) {
    const routePresenter = new RoutePresenter(this._eventsListComponent, this._handlePointChange, this._handleModeChange);
    routePresenter.init(eventElement);
    this._routePresenter[eventElement.id] = routePresenter;
  }

  _renderRoutePoints() {
    this._routePoints
      .forEach((routePoint) => this._renderPoint(routePoint));

  }

  _renderListEmpty() {
    render(this._routePointsContainer, this._listEmptyComponent, RenderPosition.BEFOREEND);
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
    this._renderRouteControls();
    if (this._routePoints.length === 0) {
      this._renderListEmpty();
      return;
    }
    this._renderRouteInfo();
    this._renderSort();
    this._renderPointsList();
    this._renderRoutePoints(this._routePoints);
  }
}
