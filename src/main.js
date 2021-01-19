import {generateEvent} from './mock/event';
import RoutePresenter from './presenter/route';
import PointsModel from './model/points';
import SiteMenuView from './view/site-menu';
import TripInfoView from './view/trip-info';
import {RenderPosition} from './const';
import {render} from './util/render';
import FilterModel from './model/filter';
import FilterPresenter from './presenter/filter';

const EVENTS_AMOUNT = 18;
const routePoints = new Array(EVENTS_AMOUNT).fill().map(generateEvent);

const pointsModel = new PointsModel();
pointsModel.setPoints(routePoints);

const filterModel = new FilterModel();


const siteMainElement = document.querySelector(`.page-body`);
const routeMainElement = siteMainElement.querySelector(`.trip-main`);
const routeControlsElements = routeMainElement.querySelector(`.trip-controls`);
const routeEventsElement = siteMainElement.querySelector(`.trip-events`);
const buttonNewPoint = siteMainElement.querySelector(`.trip-main__event-add-btn`);


render(routeMainElement, new TripInfoView(), RenderPosition.AFTERBEGIN);
render(routeControlsElements, new SiteMenuView(), RenderPosition.AFTERBEGIN);
const filterPresenter = new FilterPresenter(routeControlsElements, filterModel, pointsModel);

filterPresenter.init();

const routePresenter = new RoutePresenter(routeMainElement, routeEventsElement, filterModel, pointsModel);
routePresenter.init();


buttonNewPoint.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  routePresenter.createEvent();
});
