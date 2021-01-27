import PointsModel from '../model/points';
import {Method, UrlAddress} from '../const';

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

export default class Api {
  constructor(endpoint, authorization) {
    this._endpoint = endpoint;
    this._authorization = authorization;
  }

  getPoints() {
    return this._load({url: UrlAddress.POINTS})
      .then(Api.toJSON)
      .then((points) => points.map(PointsModel.adaptToClient));
  }

  getOffers() {
    return this._load({url: UrlAddress.OFFERS})
      .then(Api.toJSON);
  }

  getDestinations() {
    return this._load({url: UrlAddress.DESTINATIONS})
      .then(Api.toJSON);
  }

  updatePoint(event) {
    return this._load({
      url: `${UrlAddress.POINTS}/${event.id}`,
      method: Method.PUT,
      body: JSON.stringify(PointsModel.adaptToServer(event)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then(PointsModel.adaptToClient);
  }

  addPoint(event) {
    return this._load({
      url: `${UrlAddress.POINTS}`,
      method: Method.POST,
      body: JSON.stringify(PointsModel.adaptToServer(event)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then(PointsModel.adaptToClient);
  }

  deletePoint(event) {
    return this._load({
      url: `${UrlAddress.POINTS}/${event.id}`,
      method: Method.DELETE
    });
  }

  sync(data) {
    return this._load({
      url: `${UrlAddress.POINTS}/sync`,
      method: Method.POST,
      body: JSON.stringify(data),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON);
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    headers.append(`Authorization`, this._authorization);

    return fetch(
        `${this._endpoint}/${url}`,
        {method, body, headers}
    )
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN ||
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
