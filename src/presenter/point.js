import EventView from '../view/event';
import EditEventView from '../view/edit-event';
import {render, replace, remove} from '../util/render';
import {RenderPosition, ESC_BUTTON, OperatingMode} from '../const';


export default class PointPresenter {
  constructor(eventsListContainer, changeData, changeMode) {
    this._eventsListContainer = eventsListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._mode = OperatingMode.DEFAULT;

    this._eventComponent = null;
    this._eventEditComponent = null;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleClickFavorite = this._handleClickFavorite.bind(this);
    this._handleArrowClick = this._handleArrowClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

  }

  init(routePoint) {
    this._routePoint = routePoint;

    const prevEventComponent = this._eventComponent;
    const prevEventEditComponent = this._eventEditComponent;

    this._eventComponent = new EventView(routePoint);
    this._eventEditComponent = new EditEventView(routePoint);

    this._eventComponent.setEditClickHandler(this._handleEditClick);
    this._eventEditComponent.setCardArrowHandler(this._handleArrowClick);
    this._eventEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._eventComponent.setClickFavoriteHandler(this._handleClickFavorite);


    if (prevEventComponent === null || prevEventEditComponent === null) {
      render(this._eventsListContainer, this._eventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === OperatingMode.DEFAULT) {
      replace(this._eventComponent, prevEventComponent);
    }

    if (this._mode === OperatingMode.EDITING) {
      replace(this._eventEditComponent, prevEventEditComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditComponent);
  }

  destroy() {
    remove(this._eventComponent);
    remove(this._eventEditComponent);
  }

  resetView() {
    if (this._mode !== OperatingMode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceFormToCard() {
    replace(this._eventComponent, this._eventEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = OperatingMode.DEFAULT;
  }

  _replaceCardToForm() {
    replace(this._eventEditComponent, this._eventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = OperatingMode.EDITING;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === ESC_BUTTON) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFormSubmit(routePoint) {
    this._changeData(routePoint);
    this._replaceFormToCard();
  }

  _handleArrowClick() {
    this._replaceFormToCard();
  }

  _handleClickFavorite() {
    this._changeData(
        Object.assign(
            {},
            this._routePoint,
            {
              isFavorite: !this._routePoint.isFavorite
            }
        )
    );
  }
}
