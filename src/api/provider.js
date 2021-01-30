import PointsModel from '../model/points';
import {isOnline} from '../util/global';

const Errors = {
  ADD: `Add point failed`,
  DELETE: `Delete point failed`,
  SYNC: `Sync data failed`,
};

const StoreLabels = {
  POINTS: `points`,
  OFFERS: `offers`,
  DESTINATION: `destinations`
};

const getPointsSyncronized = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.point);
};

const createStore = (items, name) => {
  return items.reduce((acc, current) => {
    let relevantName = ``;
    switch (name) {
      case StoreLabels.POINTS:
        relevantName = current.id;
        break;
      case StoreLabels.OFFERS:
        relevantName = current.type;
        break;
      case StoreLabels.DESTINATION:
        relevantName = current.name;
        break;
    }

    return Object.assign({}, acc, {
      [relevantName]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._isSynced = true;
    this._api = api;
    this._store = store;
  }

  getPoints() {
    if (isOnline()) {
      return this._api.getPoints()
        .then((points) => {
          const items = createStore(points.map(PointsModel.adaptToServer), StoreLabels.POINTS);
          this._store.setItems(StoreLabels.POINTS, items);
          return points;
        });
    }
    const storePoints = Object.values(this._store.getItems(StoreLabels.POINTS));
    return Promise.resolve(storePoints.map(PointsModel.adaptToClient));
  }

  updatePoint(point) {
    if (isOnline()) {
      return this._api.updatePoint(point)
        .then((updatedPoint) => {
          this._store.setItem(StoreLabels.POINTS, updatedPoint.id, PointsModel.adaptToServer(updatedPoint));
          return updatedPoint;
        });
    }
    this._store.setItem(StoreLabels.POINTS, point.id, PointsModel.adaptToServer(Object.assign({}, point)));
    this._isSynced = false;
    return Promise.resolve(point);
  }

  deletePoint(point) {
    if (isOnline()) {
      return this._api.deletePoint(point)
        .then(() => this._store.removeItem(StoreLabels.POINTS, point.id));
    }
    return Promise.reject(new Error(Errors.DELETE));
  }

  addPoint(point) {
    if (isOnline()) {
      return this._api.addPoint(point)
        .then((newPoint) => {
          this._store.setItem(StoreLabels.POINTS, newPoint.id, PointsModel.adaptToServer(newPoint));
          return newPoint;
        });
    }
    return Promise.reject(new Error(Errors.ADD));
  }

  getOffers() {
    if (isOnline()) {
      return this._api.getOffers()
        .then((offers) => {
          const items = createStore(offers, StoreLabels.OFFERS);
          this._store.setItems(StoreLabels.OFFERS, items);
          return offers;
        });
    }
    const storeOffers = Object.values(this._store.getItems(StoreLabels.OFFERS));
    return Promise.resolve(storeOffers);
  }

  getDestinations() {
    if (isOnline()) {
      return this._api.getDestinations()
        .then((destinations) => {
          const items = createStore(destinations, StoreLabels.DESTINATION);
          this._store.setItems(StoreLabels.DESTINATION, items);
          return destinations;
        });
    }
    const storeDestination = Object.values(this._store.getItems(StoreLabels.DESTINATION));
    return Promise.resolve(storeDestination);
  }

  getIsSynced() {
    return this._isSynced;
  }

  sync() {
    if (isOnline()) {
      const storePoints = Object.values(this._store.getItems(StoreLabels.POINTS));

      return this._api.sync(storePoints)
        .then((response) => {
          const createdPoints = getPointsSyncronized(response.created);
          const updatedPoints = getPointsSyncronized(response.updated);
          const items = createStore([...createdPoints, ...updatedPoints], StoreLabels.POINTS);
          this._store.setItems(StoreLabels.POINTS, items);
          this._isSynced = true;
        });
    }

    return Promise.reject(new Error(Errors.SYNC));
  }
}
