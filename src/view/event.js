import {humaneEventDate, humaneEventTime, createPrepositions} from '../util';
import {createElement} from '../util';


const createOffers = (offers) => {
  return `<h4 class="visually-hidden">Offers:</h4>
  ${offers.map(({name, price}) => {
    return `<li class="event__offer">
                    <span class="event__offer-title">${name}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>`;
  }).join(``)}`;
};

const getTimeDiff = (start, end) => {
  const MS_IN_MINUTE = 60000;
  const timeDiff = end - start;
  const msInHour = MS_IN_MINUTE * 60;
  const msInDay = 24 * MS_IN_MINUTE * 60;

  const days = Math.floor(timeDiff / msInDay);
  const hours = Math.floor((timeDiff - days * msInDay) / msInHour);
  const minutes = Math.floor((timeDiff - days * msInDay - hours * msInHour) / MS_IN_MINUTE);

  return `${days > 0 ? `${days}D` : ``} ${hours > 0 ? `${hours}H` : `00H`} ${minutes > 0 ? `${minutes}M` : `00M`}`;
};

const createEventTemplate = (event) => {
  const {
    eventType,
    city,
    eventStart,
    eventEnd,
    isFavorite,
    offers,
    price
  } = event;


  const duration = getTimeDiff(eventStart, eventEnd);

  const offersTemplate = offers ? createOffers(offers) : ``;

  const favoriteClassName = isFavorite
    ? `event__favorite-btn--active`
    : ``;

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${eventStart}">${humaneEventDate(eventStart)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${eventType} ${createPrepositions(eventType)} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${eventStart}">${humaneEventTime(eventStart)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${eventEnd}">${humaneEventTime(eventEnd)}</time>
                  </p>
                  <p class="event__duration">${duration}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                 ${offersTemplate}
                </ul>
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
            `;
};

export default class EventView {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
