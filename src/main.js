import {generateEvent} from './mock/event';
import RoutePresenter from './presenter/route';

const EVENTS_AMOUNT = 18;
const routePoints = new Array(EVENTS_AMOUNT).fill().map(generateEvent);

const siteMainElement = document.querySelector(`.page-body`);
const routeMainElement = siteMainElement.querySelector(`.trip-main`);
const routeEventsElement = siteMainElement.querySelector(`.trip-events`);

const routePresenter = new RoutePresenter(routeMainElement, routeEventsElement);
routePresenter.init(routePoints);
