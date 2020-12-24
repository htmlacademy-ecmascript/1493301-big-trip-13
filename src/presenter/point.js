import EventView from '../view/event';
import EditEventView from '../view/edit-event';
import {render, replace, remove} from '../util/render';
import {RenderPosition} from '../const';

const ESC = `Escape`;

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class PointPresenter {
  constructor(eventsListContainer, changeData, changeMode) {
    this._eventsListContainer = eventsListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._mode = Mode.DEFAULT;

    this._eventComponent = null;
    this._eventEditComponent = null;

    this._handleClickEdit = this._handleClickEdit.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleClickFavorite = this._handleClickFavorite.bind(this);
    this._handleClickArrow = this._handleClickArrow.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

  }

  init(routePoint) {
    this._routePoint = routePoint;

    const prevEventComponent = this._eventComponent;
    const prevEventEditComponent = this._eventEditComponent;

    this._eventComponent = new EventView(routePoint);
    this._eventEditComponent = new EditEventView(routePoint);

    this._eventComponent.setClickEditHandler(this._handleClickEdit);
    this._eventEditComponent.setArrowCardHandler(this._handleClickArrow);
    this._eventEditComponent.setSubmitFormHandler(this._handleFormSubmit);
    this._eventComponent.setClickFavoriteHandler(this._handleClickFavorite);


    if (prevEventComponent === null || prevEventEditComponent === null) {
      render(this._eventsListContainer, this._eventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._eventComponent, prevEventComponent);
    }

    if (this._mode === Mode.EDITING) {
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
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceFormToCard() {
    replace(this._eventComponent, this._eventEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _replaceCardToForm() {
    replace(this._eventEditComponent, this._eventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === ESC) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleClickEdit() {
    this._replaceCardToForm();
  }

  _handleFormSubmit(routePoint) {
    this._changeData(routePoint);
    this._replaceFormToCard();
  }

  _handleClickArrow() {
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
