import AbstractView from './abstract';
import {getRouteDates, getRouteTotalCost} from '../util/event';

const MAX_EVENTS_IN_TITLE = 3;

const createTripInfoTemplate = (events) => {
  const routeDestinations = (events.length <= MAX_EVENTS_IN_TITLE) ? events.map((event) => event.destination).join(` &mdash; `) : `${events[0].destination} &mdash; ...  &mdash; ${events[events.length - 1].destination}`;
  const [routeFisrtDate, routeLastDate] = getRouteDates(events);
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${routeDestinations}</h1>
      <p class="trip-info__dates">${routeFisrtDate} &hellip; ${routeLastDate}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getRouteTotalCost(events)}</span>
    </p>
  </section>`;
};

export default class TripInfoView extends AbstractView {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTripInfoTemplate(this._events);
  }
}
