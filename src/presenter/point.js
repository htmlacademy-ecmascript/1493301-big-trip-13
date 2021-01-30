import EventView from '../view/event';
import EditEventView from '../view/edit-event';
import {render, replace, remove} from '../util/render';
import {RenderPositions, ESC_BUTTON, OperatingModes, UserActions, UpdateTypes, States} from '../const';
import {isOnline} from '../util/global';
import {toast} from '../util/toast';

export default class PointPresenter {
  constructor(eventsListContainer, offersModel, destinationsModel, changeData, changeMode) {
    this._eventsListContainer = eventsListContainer;
    this._offersModel = offersModel;
    this._destinationsModel = destinationsModel;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._mode = OperatingModes.DEFAULT;
    this._eventComponent = null;
    this._eventEditComponent = null;

    this._handleDeleteClick = this._handleDeleteClick.bind(this);
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
    this._eventEditComponent = new EditEventView(routePoint, this._offersModel.getAllOffers(), this._destinationsModel.getDestinations());

    this._eventEditComponent.setDeleteClickHandler(this._handleDeleteClick);
    this._eventComponent.setEditClickHandler(this._handleEditClick);

    if (!this._eventEditComponent._createdNewPoint) {
      this._eventEditComponent.setCardArrowHandler(this._handleArrowClick);
    }

    this._eventEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._eventComponent.setClickFavoriteHandler(this._handleClickFavorite);


    if (prevEventComponent === null) {
      render(this._eventsListContainer, this._eventComponent, RenderPositions.BEFOREEND);
      return;
    }

    if (this._mode === OperatingModes.DEFAULT) {
      replace(this._eventComponent, prevEventComponent);
    }

    if (this._mode === OperatingModes.EDITING) {
      replace(this._eventComponent, prevEventEditComponent);
      this._mode = OperatingModes.DEFAULT;
    }

    remove(prevEventComponent);
    remove(prevEventEditComponent);
  }

  destroy() {
    remove(this._eventComponent);
    remove(this._eventEditComponent);
  }

  resetView() {
    if (this._mode !== OperatingModes.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceFormToCard() {
    replace(this._eventComponent, this._eventEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = OperatingModes.DEFAULT;
  }

  _replaceCardToForm() {
    replace(this._eventEditComponent, this._eventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = OperatingModes.EDITING;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === ESC_BUTTON) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleEditClick() {
    if (!isOnline()) {
      toast(`You can't edit point offline`);
      return;
    }

    this._replaceCardToForm();
  }

  _handleFormSubmit(update) {
    if (!isOnline()) {
      toast(`You can't save point offline`);
      this.setViewState(States.ABORTING);
      return;
    }

    this._changeData(
        UserActions.UPDATE_POINT,
        UpdateTypes.MINOR,
        update
    );
  }

  _handleArrowClick() {
    this._replaceFormToCard();
  }

  _handleDeleteClick(routePoint) {
    if (!isOnline()) {
      toast(`You can't delete event offline`);
      this.setViewState(States.ABORTING);
      return;
    }

    this._changeData(
        UserActions.DELETE_POINT,
        UpdateTypes.MINOR,
        routePoint
    );
  }

  _handleClickFavorite() {
    this._changeData(
        UserActions.UPDATE_POINT,
        UpdateTypes.MINOR,
        Object.assign(
            {},
            this._routePoint,
            {
              isFavorite: !this._routePoint.isFavorite
            }
        )
    );
  }

  setViewState(state) {
    const resetFormState = () => {
      this._eventEditComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    switch (state) {
      case States.SAVING:
        this._eventEditComponent.updateData({
          isDisabled: true,
          isSaving: true
        });
        break;
      case States.DELETING:
        this._eventEditComponent.updateData({
          isDisabled: true,
          isDeleting: true
        });
        break;
      case States.ABORTING:
        this._eventComponent.shake(resetFormState);
        this._eventEditComponent.shake(resetFormState);
        break;
    }
  }
}

