import {createTripInfoTemplate} from './view/trip-info';
import {createSiteMenuTemplate} from './view/site-menu';
import {createTripFilters} from './view/trip-filters';
import {createListTemplate} from './view/list';
import {createTripSorting} from './view/trip-sorting';
import {createNewEventTemplate} from './view/new-event';
import {createEditEventTemplate} from './view/edit-event';
import {createEventTemplate} from './view/event';
import {createLoading} from './view/events-loading';

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
render(tripControlsElement, createTripFilters(), `beforeend`);
render(tripEventsElement, createTripSorting(), `afterbegin`);
render(tripEventsElement, createListTemplate(), `beforeend`);

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createEditEventTemplate(), `afterbegin`);


for (let i = 0; i < EVENTS_AMOUNT; i++) {
  render(tripEventsListElement, createEventTemplate(), `beforeend`);
}

render(tripEventsListElement, createNewEventTemplate(), `beforeend`);
render(tripEventsListElement, createLoading(), `beforeend`);
