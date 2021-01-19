import Observer from '../util/observer';

export default class PointsModel extends Observer {
  constructor() {
    super();
    this._routePoints = [];
  }

  setPoints(routePoints) {
    this._routePoints = routePoints.slice();
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

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this._routePoints = [
      update,
      ...this._routePoints
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this._routePoints.findIndex((event) => event.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting event`);
    }

    this._routePoints = [
      ...this._routePoints.slice(0, index),
      ...this._routePoints.slice(index + 1)
    ];

    this._notify(updateType);
  }
}
