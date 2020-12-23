import TripInfoView from './view/trip-info';
import SiteMenuView from './view/site-menu';
import TripFiltersView from './view/trip-filters';
import EmptyListView from './view/empty-list';
import ListView from './view/list';
import SortingView from './view/trip-sorting';
import EditEventView from './view/edit-event';
import EventView from './view/event';
import {generateEvent} from './mock/event';
import {render, replace} from './util/render';
import {RenderPosition} from './const';

const EVENTS_AMOUNT = 18;
const ESC = `Escape`;

const events = new Array(EVENTS_AMOUNT).fill().map(generateEvent);


const siteMainElement = document.querySelector(`.page-body`);
const tripMainElement = siteMainElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);
const eventsListComponent = new ListView();

const renderEvent = (eventsListElement, eventElement) => {
  const eventComponent = new EventView(eventElement);
  const eventEditComponent = new EditEventView(eventElement);

  eventComponent.setClickEditHandler(() => {
    replace(eventEditComponent, eventComponent);
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const closeCard = () => {
    replace(eventComponent, eventEditComponent);
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  eventEditComponent.setSubmitFormHandler(() => {
    closeCard();
  });

  eventEditComponent.setArrowCardHandler(() => {
    closeCard();
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === ESC) {
      evt.preventDefault();
      replace(eventComponent, eventEditComponent);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  render(eventsListElement, eventComponent, RenderPosition.BEFOREEND);
};


const renderTripBoard = () => {
  render(tripMainElement, new TripInfoView(events), RenderPosition.AFTERBEGIN);
  render(tripControlsElement, new SiteMenuView(), RenderPosition.AFTERBEGIN);
  render(tripControlsElement, new TripFiltersView(), RenderPosition.BEFOREEND);
  render(tripEventsElement, new SortingView(), RenderPosition.AFTERBEGIN);
  render(tripEventsElement, eventsListComponent, RenderPosition.BEFOREEND);

  if (events.length) {
    for (let i = 0; i < EVENTS_AMOUNT; i++) {
      renderEvent(eventsListComponent, events[i]);
    }
  } else {
    render(tripEventsElement, new EmptyListView(), RenderPosition.BEFOREEND);
  }

};

renderTripBoard();
