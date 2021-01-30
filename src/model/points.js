import Observer from '../util/observer';

export default class PointsModel extends Observer {
  constructor() {
    super();
    this._routePoints = [];
  }

  setPoints(updateType, routePoints) {
    this._routePoints = routePoints.slice();
    this.notify(updateType);
  }

  getPoints() {
    return this._routePoints;
  }

  updatePoint(updateType, update) {
    const index = this._routePoints.findIndex((routePoint) => routePoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting event`);
    }

    this._routePoints = [
      ...this._routePoints.slice(0, index),
      update,
      ...this._routePoints.slice(index + 1)
    ];

    this.notify(updateType, update);
  }

  addPoint(updateType, update) {
    this._routePoints = [
      update,
      ...this._routePoints
    ];

    this.notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this._routePoints.findIndex((routePoint) => routePoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting event`);
    }

    this._routePoints = [
      ...this._routePoints.slice(0, index),
      ...this._routePoints.slice(index + 1)
    ];

    this.notify(updateType);
  }

  static adaptToClient(routePoint) {
    const adaptedEvent = Object.assign(
        {},
        routePoint,
        {

          type: routePoint.type,
          eventStart: routePoint.date_from,
          eventEnd: routePoint.date_to,
          photos: routePoint.destination.pictures,
          destination: routePoint.destination.name,
          description: routePoint.destination.description,
          price: routePoint.base_price,
          isFavorite: routePoint.is_favorite,

        }
    );

    delete adaptedEvent.date_from;
    delete adaptedEvent.date_to;
    delete adaptedEvent.base_price;
    delete adaptedEvent.is_favorite;

    return adaptedEvent;
  }

  static adaptToServer(routePoint) {
    const adaptedEvent = Object.assign(
        {},
        routePoint,
        {

          "base_price": routePoint.price,
          "date_from": routePoint.eventStart,
          "date_to": routePoint.eventEnd,
          "is_favorite": routePoint.isFavorite,
          "type": routePoint.type,

          "destination": {
            "name": routePoint.destination,
            "description": routePoint.description,
            "pictures": routePoint.photos

          },
        }
    );
    delete adaptedEvent.eventStart;
    delete adaptedEvent.eventEnd;
    delete adaptedEvent.price;
    delete adaptedEvent.description;
    delete adaptedEvent.photos;
    delete adaptedEvent.isFavorite;

    return adaptedEvent;
  }
}
