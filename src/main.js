import RoutePresenter from './presenter/route';
import PointsModel from './model/points';
import SiteMenuView from './view/site-menu';
import {RenderPosition, MenuTabs, UpdateType} from './const';
import {render, remove} from './util/render';
import FilterModel from './model/filter';
import FilterPresenter from './presenter/filter';
import OffersModel from './model/offers';
import DestinationsModel from './model/destinations';
import StatsView from './view/stats';
import Api from './api/api';
import {isOnline} from './util/global';
import Store from './api/store.js';
import Provider from './api/provider';
import {toast} from './util/toast';
import ConnectionErrorView from './view/connection-error';

const AUTHORIZATION = `Basic ow13r13p55s02va34`;
const ENDPOINT = `https://13.ecmascript.pages.academy/big-trip`;

const STORE_PREF = `bigtrip-localstorage`;
const STORE_VER = `v13`;
const STORE_LABEL = `${STORE_PREF}-${STORE_VER}`;

const store = new Store(STORE_LABEL, window.localStorage);

const api = new Api(ENDPOINT, AUTHORIZATION);
const apiWithProvider = new Provider(api, store);
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const menuComponent = new SiteMenuView();
const connectionErrorComponent = new ConnectionErrorView();


const siteMainElement = document.querySelector(`.page-body`);
const routeMainElement = siteMainElement.querySelector(`.trip-main`);
const routeControlsElements = routeMainElement.querySelector(`.trip-controls`);
const routeEventsElement = siteMainElement.querySelector(`.trip-events`);
const addNewPoint = routeMainElement.querySelector(`.trip-main__event-add-btn`);

let statisticsComponent = null;

const handleCreateEventFormClose = () => {
  addNewPoint.disabled = false;
};

const newEventClickHandler = (evt) => {
  evt.preventDefault();
  if (!isOnline()) {
    toast(`You can't create new point offline`);
    return;
  }

  routePresenter.createPoint(handleCreateEventFormClose);
  addNewPoint.disabled = true;
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
      filterPresenter.activateFilters();
      routePresenter.init();
      remove(statisticsComponent);
      break;
    case MenuTabs.STATS:
      filterPresenter.proscribeFilters();
      routePresenter.destroy();
      statisticsComponent = new StatsView(pointsModel.getPoints());
      render(routeEventsElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};

const filterPresenter = new FilterPresenter(routeControlsElements, filterModel, pointsModel);
filterPresenter.init();

const routePresenter = new RoutePresenter(routeMainElement, routeEventsElement, pointsModel, filterModel, destinationsModel, offersModel, apiWithProvider);
routePresenter.init();

Promise.all([
  apiWithProvider.getOffers(),
  apiWithProvider.getDestinations(),
  apiWithProvider.getPoints()
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


window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`./sw.js`);
});


window.addEventListener(`online`, () => {
  document.title = document.title.replace(` [offline]`, ``);

  remove(connectionErrorComponent);

  if (!apiWithProvider.getisSynced()) {
    apiWithProvider.sync();
  }
});

window.addEventListener(`offline`, () => {
  document.title += ` [offline]`;

  render(routeMainElement, connectionErrorComponent, RenderPosition.AFTERBEGIN);
});
