import {EVENT_TYPES, BLANK_POINT} from '../const';
import {capitalize} from '../util/global';
import {humaneEditEventTime, createPrepositions} from '../util/event';
import dayjs from 'dayjs';
import SmartView from './smart';
import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import he from 'he';


const createEventTypeItems = (eventItem) => {
  return `
  ${EVENT_TYPES.map((type) => `
      <div class="event__type-item">
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === eventItem ? `checked` : ``}>
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalize(type)}</label>
      </div>`).join(``)}
    `;
};

const createOffers = (offers, realtedOffers, isDisabled) => {
  return `<h3 class="event__section-title  event__section-title--offers">Offers</h3>
    ${realtedOffers.map((items) => {
    const {title, price} = items;
    const id = title.split(` `).join(`-`);
    const isChecked = offers.find((item) => items.title === item.title);
    return `
        <div class="event__available-offers"><div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``} ${isDisabled ? `disabled` : ``} data-id=${id}>
          <label class="event__offer-label" for="event-offer-${id}">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>`;
  }).join(``)}
    </div>
 `;
};


const createEditEventTemplate = (event, specialOffers, cities, createdNewPoint) => {
  const {
    destination,
    type,
    eventStart,
    eventEnd,
    offers,
    description,
    photos,
    price,
    isDisabled,
    isSaving,
    isDeleting,
  } = event;

  const createPhotosSection = (photoPath) => {
    return `<img class="event__photo" src="${photoPath.src}" alt="${photoPath.description}"></img>`;
  };

  const photosSection = `${photos.map((photo) => createPhotosSection(photo)).join(``)}`;
  const eventTypeItems = createEventTypeItems(type);
  const possibleCities = [...cities.keys()];
  const isSaveForbidden = !dayjs(eventEnd).isAfter(dayjs(eventStart).toDate()) || !destination;

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1" ${isDisabled ? `disabled` : ``}>
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${eventTypeItems}
                        </fieldset>
                    </div>
                    </div>

                    <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-${destination}" ${isDisabled ? `disabled` : ``}>
                      ${type} ${createPrepositions(type)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1" ${isDisabled ? `disabled` : ``}>
                    <datalist id="destination-list-1">
                      ${possibleCities ? possibleCities.map((city) => `<option value="${he.encode(city)}"></option>`).join(``) : ``}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input event__input--time" id="event-start-time-1" type="text" name="event-start-time" data-time="start" value="${humaneEditEventTime(eventStart)}" ${isDisabled ? `disabled` : ``}>
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input event__input--time" id="event-end-time-1" type="text" name="event-end-time" data-time="end"  value="${humaneEditEventTime(eventEnd)}" ${isDisabled ? `disabled` : ``}>
                  </div>


                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-$1}" type="number" name="event-price" value="${price}" min="1" required ${isDisabled ? `disabled` : ``}>
                  </div>

                <button class="event__save-btn  btn  btn--blue" type="submit" ${isSaveForbidden || isDisabled ? `disabled` : ``}>${isSaving ? `Saving...` : `Save`}</button>
                  ${!createdNewPoint ? ` <button class="event__reset-btn" type="reset">${isDeleting ? `Deleting...` : `Delete`}</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>` : `<button class="event__reset-btn" type="reset">Cancel</button>`}
                </header>

              <section class="event__details">
                    <section class="event__section  event__section--offers">
                    ${specialOffers.get(type).length ? createOffers(offers, specialOffers.get(type), isDisabled) : ``}
                </section>
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
                    </section>
              </form>
            </li>
            `;
};


export default class EditEventView extends SmartView {
  constructor(event = BLANK_POINT, specialOffers, cities, createdNewPoint = false) {
    super();
    this._data = EditEventView.parseEventToData(event);
    this._specialOffers = specialOffers;
    this._cities = cities;
    this._createdNewPoint = createdNewPoint;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);

    this._formDeleteClickHandler = this._formDeleteClickHandler.bind(this);
    this._cardArrowHandler = this._cardArrowHandler.bind(this);
    this._priceInputHandler = this._priceInputHandler.bind(this);
    this._cityInputHandler = this._cityInputHandler.bind(this);
    this._eventTypeToggleHandler = this._eventTypeToggleHandler.bind(this);
    this._offersChangeHandler = this._offersChangeHandler.bind(this);
    this._eventStartChangeHandler = this._eventStartChangeHandler.bind(this);
    this._eventEndChangeHandler = this._eventEndChangeHandler.bind(this);

    this._setInnerHandlers();
    this._setDatepicker();
  }

  getTemplate() {
    return createEditEventTemplate(this._data, this._specialOffers, this._cities, this._createdNewPoint);
  }

  removeElement() {
    super.removeElement();

    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
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

  restoreHandlers() {
    this.setDeleteClickHandler(this._callback.deletePoint);
    this._setDatepicker();
    this._setInnerHandlers();
    this.setFormSubmitHandler(this._callback.submit);
    if (!this._createdNewPoint) {
      this.setCardArrowHandler(this._callback.onArrowClick);
    }
  }

  _setInnerHandlers() {
    this.getElement()
    .querySelector(`.event__type-list`).addEventListener(`change`, this._eventTypeToggleHandler);
    this.getElement()
    .querySelector(`.event__input--destination`).addEventListener(`change`, this._cityInputHandler, true);
    this.getElement().
    querySelector(`.event__input--price`).addEventListener(`input`, this._priceInputHandler);

    if (this._specialOffers.get(this._data.type).length) {
      this.getElement()
      .querySelector(`.event__available-offers`).addEventListener(`change`, this._offersChangeHandler);
    }
  }

  _eventTypeToggleHandler(evt) {
    evt.preventDefault();
    const setUpNewTypes = (value) => {
      return EVENT_TYPES.find((type) => type === value);
    };
    const newType = setUpNewTypes(evt.target.value);


    this.updateData({
      type: newType,
      offers: []
    });
  }

  _priceInputHandler(evt) {
    evt.preventDefault();
    evt.target.setCustomValidity(`Invalid value. The price must be greater than 0.`);
    evt.target.reportValidity();
    evt.target.setCustomValidity(``);

    this.updateData({
      price: Number(evt.target.value)
    }, true);
  }

  _cityInputHandler(evt) {
    evt.preventDefault();
    if (![...this._cities.keys()].includes(evt.target.value)) {
      evt.target.setCustomValidity(`You can choose only from the offered range of the cities`);
      evt.target.style.background = `#ff8d85`;
      evt.target.reportValidity();
      return;
    } else {
      evt.target.style.background = `white`;
    }
    this.updateData({
      destination: evt.target.value,
      description: this._cities.get(evt.target.value).description,
      photos: this._cities.get(evt.target.value).photos,
    });
  }

  _offersChangeHandler(evt) {
    evt.preventDefault();
    let renewSet = this._data.offers.slice();

    const realtedOffers = this._specialOffers.get(this._data.type.toLowerCase());
    const pickedOffer = evt.target.closest(`div`).querySelector(`.event__offer-title`).textContent;

    if (!this._data.offers.find(({title}) => title === pickedOffer)) {
      renewSet.push(realtedOffers.find(({title}) => title === pickedOffer));
    } else {
      renewSet = renewSet.filter(({title}) => title !== pickedOffer);
    }

    this.updateData({
      offers: renewSet
    }, true);
  }

  _eventStartChangeHandler(selectedDate) {
    this.updateData({eventStart: selectedDate[0]});
  }

  _eventEndChangeHandler(selectedDate) {
    this.updateData({eventEnd: selectedDate[0]});
  }

  _formDeleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deletePoint(EditEventView.parseDataToEvent(this._data));
  }

  setDeleteClickHandler(callback) {
    this._callback.deletePoint = callback;
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, this._formDeleteClickHandler);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.submit(EditEventView.parseDataToEvent(this._data));
  }

  _cardArrowHandler(event) {
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
    return Object.assign(
        {},
        event,
        {
          isDisabled: false,
          isSaving: false,
          isDeleting: false
        }
    );
  }

  static parseDataToEvent(data) {
    data = Object.assign({}, data);

    delete data.isDisabled;
    delete data.isSaving;
    delete data.isDeleting;

    return data;
  }
}
