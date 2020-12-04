import {createTripInfoTemplate} from './view/trip-info';
import {createSiteMenuTemplate} from './view/site-menu';
import {createTripFiltersTemplate} from './view/trip-filters';
import {createListTemplate} from './view/list';
import {createTripSortingTemplate} from './view/trip-sorting';
import {createEditEventTemplate} from './view/edit-event';
import {createEventTemplate} from './view/event';
import {generateEvent} from './mock/event';
import {createNewEventTemplate} from './view/new-event';
import {createEventsLoadingTemplate} from './view/events-loading';

const EVENTS_AMOUNT = 18;

const events = new Array(EVENTS_AMOUNT).fill().map(generateEvent);


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

render(tripEventsListElement, createEditEventTemplate(events[0]), `afterbegin`);


const renderEventsList = () => {
  for (let i = 0; i < EVENTS_AMOUNT; i++) {
    render(tripEventsListElement, createEventTemplate(events[i]), `beforeend`);
  }
};

renderEventsList();

render(tripEventsListElement, createNewEventTemplate(), `beforeend`);
render(tripEventsListElement, createEventsLoadingTemplate(), `beforeend`);
