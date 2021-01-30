import Observer from '../util/observer';

export default class DestinationsModel extends Observer {
  constructor() {
    super();
    this._destinations = [];
  }

  setDestinations(destinations) {
    this._destinations = DestinationsModel.adaptToClient(destinations);
  }

  getDestinations() {
    return this._destinations;
  }

  static adaptToClient(destinations) {
    const adaptedDestinations = new Map();
    for (const destination of destinations) {
      adaptedDestinations.set(destination.name, {
        description: destination.description,
        photos: destination.pictures
      });
    }

    return adaptedDestinations;
  }
}
