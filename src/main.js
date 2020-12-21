import TripInfoView from './view/trip-info';
import SiteMenuView from './view/site-menu';
import TripFiltersView from './view/trip-filters';
import ListView from './view/list';
import SortingView from './view/trip-sorting';
import EditEventView from './view/edit-event';
import EventView from './view/event';
import {generateEvent} from './mock/event';
import {render} from './util';
import {RenderPosition} from './const';

const EVENTS_AMOUNT = 18;

const events = new Array(EVENTS_AMOUNT).fill().map(generateEvent);


const siteMainElement = document.querySelector(`.page-body`);
const tripMainElement = siteMainElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);
const eventsListComponent = new ListView();

const renderEvent = (eventsListElement, eventElement) => {
  const eventComponent = new EventView(eventElement).getElement();
  const eventEditComponent = new EditEventView(eventElement).getElement();


  const replaceCardToForm = () => {
    eventsListElement.replaceChild(eventEditComponent, eventComponent);
  };

  const replaceFormToCard = () => {
    eventsListElement.replaceChild(eventComponent, eventEditComponent);
  };

  eventComponent.querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceCardToForm();
  });

  eventEditComponent.querySelector(`.event--edit`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(eventsListElement, eventComponent, RenderPosition.BEFOREEND);
};

render(tripMainElement, new TripInfoView(events).getElement(), RenderPosition.AFTERBEGIN);
render(tripControlsElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(tripControlsElement, new TripFiltersView().getElement(), RenderPosition.BEFOREEND);
render(tripEventsElement, new SortingView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsElement, eventsListComponent.getElement(), RenderPosition.BEFOREEND);

const renderEventsList = () => {
  for (let i = 0; i < EVENTS_AMOUNT; i++) {
    renderEvent(eventsListComponent.getElement(), events[i]);
  }
};

renderEventsList();
