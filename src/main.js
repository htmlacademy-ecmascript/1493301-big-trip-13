import RoutePresenter from './presenter/route';
import PointsModel from './model/points';
import SiteMenuView from './view/site-menu';
import TripInfoView from './view/trip-info';
import {RenderPosition, MenuTabs, UpdateType} from './const';
import {render, remove} from './util/render';
import FilterModel from './model/filter';
import FilterPresenter from './presenter/filter';
import OffersModel from './model/offers';
import DestinationsModel from './model/destinations';
import StatsView from './view/stats';
import Api from './api';

const AUTHORIZATION = `Basic ow13r13p55s02va34`;
const END_POINT = `https://13.ecmascript.pages.academy/big-trip`;

const api = new Api(END_POINT, AUTHORIZATION);
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();

const siteMainElement = document.querySelector(`.page-body`);
const routeMainElement = siteMainElement.querySelector(`.trip-main`);
const routeControlsElements = routeMainElement.querySelector(`.trip-controls`);
const routeEventsElement = siteMainElement.querySelector(`.trip-events`);

const menuComponent = new SiteMenuView();

render(routeMainElement, new TripInfoView(), RenderPosition.AFTERBEGIN);

const filterPresenter = new FilterPresenter(routeControlsElements, filterModel, pointsModel);
filterPresenter.init();

const routePresenter = new RoutePresenter(routeMainElement, routeEventsElement, pointsModel, filterModel, destinationsModel, offersModel, api);
routePresenter.init();

let statisticsComponent = null;

const handleCreateEventFormClose = () => {
  routeMainElement.querySelector(`.trip-main__event-add-btn`).disabled = false;
};

const newEventClickHandler = (evt) => {
  evt.preventDefault();
  routePresenter.createEvent(handleCreateEventFormClose);
  routeMainElement.querySelector(`.trip-main__event-add-btn`).disabled = true;
  if (menuComponent.getElement().querySelector(`.trip-tabs__btn--active`).dataset.value === MenuTabs.STATS) {
    routePresenter.init();
    remove(statisticsComponent);
    menuComponent.getElement().querySelector(`.trip-tabs__btn--active`).classList.remove(`trip-tabs__btn--active`);
    menuComponent.getElement().querySelector(`[data-value="${MenuTabs.TABLE}"]`).classList.add(`trip-tabs__btn--active`);
  }
};

routeMainElement.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, newEventClickHandler);

const handleMenuTabsClick = (MenuTab) => {
  switch (MenuTab) {
    case MenuTabs.TABLE:
      routePresenter.init();
      remove(statisticsComponent);
      break;
    case MenuTabs.STATS:
      routePresenter.destroy();
      statisticsComponent = new StatsView(pointsModel.getPoints());
      render(routeEventsElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};

Promise.all([
  api.getOffers(),
  api.getDestinations(),
  api.getPoints()
])
  .then(([offers, destinations, events]) => {
    offersModel.setOffers(offers);
    destinationsModel.setDestinations(destinations);
    pointsModel.setPoints(UpdateType.INIT, events);
    render(routeControlsElements, menuComponent, RenderPosition.AFTERBEGIN);
    menuComponent.setMenuTabsClickHandler(handleMenuTabsClick);
  })
  .catch(() => {
    pointsModel.setPoints(UpdateType.INIT, []);
    render(routeControlsElements, menuComponent, RenderPosition.AFTERBEGIN);
    menuComponent.setMenuTabsClickHandler(handleMenuTabsClick);
  });
