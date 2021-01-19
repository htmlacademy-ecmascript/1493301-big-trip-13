export const EVENT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

export const TRANSFER_EVENTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];

export const CITIES = [`Luxembourg`, `Trier`, `Paris`, `Bernkastel-Kues`, `Strasbourg`, `Aachen`, `Barcelona`, `Sant Pol de Mar`, `London`, `Dublin`, `Cabo da Roca`, `Geneva`, `Chamonix`, `Amsterdam`];

export const EVENT_OFFERS = [
  `Add luggage`,
  `Add meal`,
  `Switch to comfort`,
  `Choose seats`,
  `Book tickets`,
  `Lunch in the city`,
  `Excursion with a guide`,
  `Child safety seat`,
  `Order room service`,
  `Late checkout`,
  `Airport transfer`,
  `Add breakfast`,
  `Travel by train`,
  `Rent a car`,
  `Order a taxi`,
  `Order VIP service`,
  `Upgrade to business class`
];

export const SortTypes = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
};

export const BLANK_POINT = {
  city: ``,
  description: ``,
  photos: [],
  eventType: `drive`,
  offers: [],
  eventStart: new Date(),
  eventEnd: new Date(),
  price: 0,
  isFavorite: false
};

export const ESC_BUTTON = `Escape`;

export const OperatingMode = {
  DEFAULT: `default`,
  EDITING: `editing`
};

export const RenderPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const FilterTypes = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

export const MenuTabs = {
  TABLE: `table`,
  STATS: `stats`
};


export const UserAction = {
  UPDATE_POINT: `updatepoint`,
  ADD_POINT: `addpoint`,
  DELETE_POINT: `deletepoint`
};

export const UpdateType = {
  PATCH: `patch`,
  MINOR: `minow`,
  MAJOR: `major`
};




