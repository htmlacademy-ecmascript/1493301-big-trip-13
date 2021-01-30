export default class Store {
  constructor(key, storage) {
    this._storage = storage;
    this._storeKey = key;
  }

  getItems(name) {
    try {
      return JSON.parse(this._storage.getItem(`${this._storeKey}-${name}`)) || {};
    } catch (err) {
      return {};
    }
  }

  removeItem(name, key) {
    const store = this.getItems(name);

    delete store[key];

    this._storage.setItem(
        `${this._storeKey}-${name}`,
        JSON.stringify(store)
    );
  }

  setItem(name, key, value) {
    const store = this.getItems(name);

    this._storage.setItem(
        `${this._storeKey}-${name}`,
        JSON.stringify(
            Object.assign({}, store, {
              [key]: value
            })
        )
    );
  }

  setItems(name, items) {
    this._storage.setItem(
        `${this._storeKey}-${name}`,
        JSON.stringify(items)
    );
  }
}
