import {createTripInfoTemplate} from './view/trip-info';
import {createSiteMenuTemplate} from './view/site-menu';
import {createTripFiltersTemplate} from './view/trip-filters';
import {createListTemplate} from './view/list';
import {createTripSortingTemplate} from './view/trip-sorting';
import {createNewEventTemplate} from './view/new-event';
import {createEditEventTemplate} from './view/edit-event';
import {createEventTemplate} from './view/event';
import {createEventsLoadingTemplate} from './view/events-loading';

const EVENTS_AMOUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.page-body`);
const tripMainElement = siteMainElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
render(tripControlsElement, createSiteMenuTemplate(), `afterbegin`);
render(tripControlsElement, createTripFiltersTemplate(), `beforeend`);
render(tripEventsElement, createTripSortingTemplate(), `afterbegin`);
render(tripEventsElement, createListTemplate(), `beforeend`);

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createEditEventTemplate(), `afterbegin`);


const renderEventsList = () => {
  for (let i = 0; i < EVENTS_AMOUNT; i++) {
    render(tripEventsListElement, createEventTemplate(), `beforeend`);
  }
};

renderEventsList();

render(tripEventsListElement, createNewEventTemplate(), `beforeend`);
render(tripEventsListElement, createEventsLoadingTemplate(), `beforeend`);
