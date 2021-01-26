export const EVENT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

export const TRANSFER_EVENTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];

export const SortTypes = {
  DAY: `day`,
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`,
  OFFERS: `offers`
};

export const BLANK_POINT = {
  destination: ``,
  description: ``,
  photos: [],
  type: `drive`,
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
  PAST: `past`,
  FUTURE: `future`
};

export const MenuTabs = {
  TABLE: `Table`,
  STATS: `Stats`
};

export const UserAction = {
  UPDATE_POINT: `updatepoint`,
  ADD_POINT: `addpoint`,
  DELETE_POINT: `deletepoint`
};

export const UpdateType = {
  PATCH: `patch`,
  MINOR: `minor`,
  MAJOR: `major`,
  INIT: `init`
};

export const StatisticsCharts = {
  TIME: `time`,
  MONEY: `money`,
  TYPE: `transport`

};

export const State = {
  SAVING: `saving`,
  DELETING: `deleting`,
  ABORTING: `aborting`
};

export const Method = {
  GET: `get`,
  PUT: `put`,
  POST: `post`,
  DELETE: `delete`
};

