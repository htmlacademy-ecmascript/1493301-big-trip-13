import EditEventView from '../view/edit-event';
import {remove, render} from '../util/render';
import {RenderPositions, UserActions, UpdateTypes, ESC_BUTTON, BLANK_POINT} from '../const';
import {isOnline} from '../util/global';
import {toast} from '../util/toast';

export default class NewEventPresenter {
  constructor(eventsListContainer, offersModel, destinationsModel, changeData) {
    this._eventsListContainer = eventsListContainer;
    this._offersModel = offersModel;
    this._destinationsModel = destinationsModel;
    this._changeData = changeData;
    this._destroyCallback = null;

    this._eventEditComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(callback) {
    this._destroyCallback = callback;

    this._eventEditComponent = new EditEventView(BLANK_POINT, this._offersModel.getAllOffers(), this._destinationsModel.getDestinations(), true);
    this._eventEditComponent.setDeleteClickHandler(this._handleDeleteClick);
    this._eventEditComponent.setFormSubmitHandler(this._handleFormSubmit);

    render(this._eventsListContainer, this._eventEditComponent, RenderPositions.AFTERBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  destroy() {
    if (this._eventEditComponent === null) {
      return;
    }

    if (this._destroyCallback) {
      this._destroyCallback();
    }

    remove(this._eventEditComponent);
    this._eventEditComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleFormSubmit(event) {
    if (!isOnline()) {
      this._eventEditComponent.shake();
      toast(`You can't save point offline`);
      return;
    }
    this._changeData(
        UserActions.ADD_POINT,
        UpdateTypes.MINOR,
        event
    );
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === ESC_BUTTON) {
      evt.preventDefault();
      this.destroy();
    }
  }

  setSaving() {
    this._eventEditComponent.updateData({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    const resetFormState = () => {
      this._eventEditComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };
    this._eventEditComponent.shake(resetFormState);
  }
}


