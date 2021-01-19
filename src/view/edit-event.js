import {EVENT_TYPES, CITIES, BLANK_POINT} from '../const';
import {capitalize} from '../util/global';
import {humaneEditEventTime, createPrepositions} from '../util/event';
import {generatePhotos, generateDescription, generateOffers} from '../mock/event';
import dayjs from "dayjs";
import SmartView from './smart';
import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import he from 'he';

const createEventTypeItems = () => {
  return `
  ${EVENT_TYPES.map((type, id) => `
      <div class="event__type-item">
          <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
          <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${id}">${capitalize(type)}</label>
      </div>`).join(``)}
    `;
};


const offerTemplate = (offer) => {
  const {id, name, price, isChecked} = offer;
  return ` <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``} >
                        <label class="event__offer-label" for="event-offer-${id}">
                          <span class="event__offer-title">${name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${price}</span>
                        </label>
                      </div>`;
};

const createOffers = (offers) => {
  return `
    ${offers.map((offer) => offerTemplate(offer)).join(``)}
    `;
};

const createEditEventTemplate = (event = {}) => {
  const {
    city,
    eventType,
    eventStart,
    eventEnd,
    offers,
    description,
    photos,
    id,
    price
  } = event;


  const createOffersSection = () => {
    return `
    ${offersTemplate}
  `;
  };

  const createDetailsSection = () => {
    const offersSection = createOffersSection();
    return `
        ${offersSection}
        `;
  };

  const createPhotosSection = () => {
    return `
    ${photos.map(({photoPath}) => `
      <img class="event__photo" src=${photoPath}" alt="Event photo">
    `).join(``)}
    `;
  };

  const offersTemplate = createOffers(offers);
  const detailsSection = createDetailsSection();
  const photosSection = createPhotosSection();
  const eventTypeItems = createEventTypeItems();
  const isSaveForbidden = !dayjs(eventEnd).isAfter(dayjs(eventStart).toDate());

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${eventTypeItems}
                        </fieldset>
                    </div>
                    </div>

                    <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-${city}">
                      ${capitalize(eventType)}  ${createPrepositions(eventType)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${city}" list="destination-list-${id}">
                    <datalist id="destination-list-${id}">
                      ${CITIES.map((name) => `<option value="${he.encode(name)}"></option>`).join(``)}
                    </datalist>
                  </div>


                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input event__input--time" id="event-start-time-1" type="text" name="event-start-time" data-time="start" value="${humaneEditEventTime(eventStart)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input event__input--time" id="event-end-time-1" type="text" name="event-end-time" data-time="end"  value="${humaneEditEventTime(eventEnd)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-${id}" type="number" name="event-price" value="${price}" required>
                  </div>
                  <button class="event__save-btn  btn  btn--blue" type="submit" ${isSaveForbidden ? `disabled` : ``}>Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                ${(offers.length || description.length) ? `

              <section class="event__details">
                  ${offers.length ? `
                    <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                    ${detailsSection}
                    </div>
                    </section>
                ` : ``}
                ${description.length ? `
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                  </section>
                  ` : ``}
                  <p class="event__destination-description">${description}</p>

                  ${photos.length ? `
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${photosSection}
                      </div>
                    </div>
                    ` : ``}
                    </section>
                    ` : ``}
              </form>
            </li>
            `;
};


export default class EditEventView extends SmartView {
  constructor(event = BLANK_POINT) {
    super();

    this._data = EditEventView.parseEventToData(event);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._cardArrowHandler = this._cardArrowHandler.bind(this);

    this._cityInputHandler = this._cityInputHandler.bind(this);
    this._eventTypeToggleHandler = this._eventTypeToggleHandler.bind(this);
    this._offersChangeHandler = this._offersChangeHandler.bind(this);
    this._eventStartChangeHandler = this._eventStartChangeHandler.bind(this);
    this._eventEndChangeHandler = this._eventEndChangeHandler.bind(this);
    this._priceInputHandler = this._priceInputHandler.bind(this);
    this._formDeleteClickHandler = this._formDeleteClickHandler.bind(this);

    this._setInnerHandlers();
    this._setDatepicker();
  }

  _priceInputHandler(evt) {
    evt.preventDefault();

    const priceValue = parseInt(evt.target.value, 10);
    evt.target.value = priceValue;

    if (priceValue <= 0) {
      evt.target.setCustomValidity(`Invalid value. The price must be greater than 0.`);
      evt.target.style.background = `#ff8d85`;
      evt.target.reportValidity();
    } else {
      evt.target.setCustomValidity(``);
      evt.target.style.background = `white`;
      this.updateData({
        price: priceValue
      }, true);
    }
  }

  _setDatepicker() {
    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
    }

    this._datepicker = flatpickr(
        this.getElement().querySelector(`[data-time="start"]`),
        {
          enableTime: true,
          dateFormat: `d/m/y H:i`,
          [`time_24hr`]: true,
          minDate: `today`,
          defaultDate: this._data.eventStart,
          onChange: this._eventStartChangeHandler
        }
    );

    this._datepicker = flatpickr(
        this.getElement().querySelector(`[data-time="end"]`),
        {
          enableTime: true,
          dateFormat: `d/m/y H:i`,
          [`time_24hr`]: true,
          minDate: `today`,
          defaultDate: this._data.eventEnd,
          onChange: this._eventEndChangeHandler,
        }
    );
  }

  removeElement() {
    super.removeElement();

    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
    }
  }

  _eventStartChangeHandler(selectedDate) {
    this.updateData({eventStart: selectedDate[0]});
  }

  _eventEndChangeHandler(selectedDate) {
    this.updateData({eventEnd: selectedDate[0]});
  }

  restoreHandlers() {
    this.setDeleteClickHandler(this._callback.deleteClick);
    this._setDatepicker();
    this._setInnerHandlers();
    this.setFormSubmitHandler(this._callback.submit);
    this.setCardArrowHandler(this._callback.onArrowClick);
  }

  _formDeleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick(EditEventView.parseDataToEvent(this._data));
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, this._formDeleteClickHandler);
  }

  _setInnerHandlers() {
    this.getElement()
    .querySelector(`.event__type-list`).addEventListener(`change`, this._eventTypeToggleHandler);
    this.getElement()
    .querySelector(`.event__input--destination`).addEventListener(`input`, this._cityInputHandler);
    this.getElement().
    querySelector(`.event__input--price`).addEventListener(`input`, this._priceInputHandler);
    if (this._data.offers.length) {
      this.getElement()
      .querySelector(`.event__available-offers`).addEventListener(`change`, this._offersChangeHandler);
    }
  }

  _cityInputHandler(evt) {
    evt.preventDefault();
    const newCity = evt.target.value;

    if (!CITIES.includes(newCity)) {
      evt.target.setCustomValidity(`You can choose only from the offered range of the cities`);
      evt.target.style.background = `#ff8d85`;
      evt.target.reportValidity();
      return;
    } else {
      evt.target.style.background = `white`;
    }

    this.updateData({
      city: newCity,
      description: generateDescription(),
      photos: generatePhotos(),
    });
  }

  _eventTypeToggleHandler(evt) {
    evt.preventDefault();
    const setUpNewTypes = (value) => {
      return EVENT_TYPES.find((type) => type === value);
    };
    const newType = setUpNewTypes(evt.target.value);
    const offers = generateOffers();
    const relatedDeals = offers.get(newType);

    this.updateData({
      eventType: newType,
      offers: relatedDeals
    });
  }


  _offersChangeHandler(evt) {
    evt.preventDefault();
    let renewSet = this._data.offers.slice();

    this.updateData({
      offers: renewSet
    }, true);
  }

  getTemplate() {
    return createEditEventTemplate(this._data);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.submit(EditEventView.parseDataToEvent(this._data));
  }

  _cardArrowHandler() {
    this._callback.onArrowClick(EditEventView.parseEventToData(event));
  }

  setCardArrowHandler(callback) {
    this._callback.onArrowClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._cardArrowHandler);
  }


  setFormSubmitHandler(callback) {
    this._callback.submit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

  static parseEventToData(event) {
    return Object.assign({}, event);
  }

  static parseDataToEvent(data) {
    return Object.assign({}, data);
  }
}
