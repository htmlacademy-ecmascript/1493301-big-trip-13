export const EVENT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

export const TRANSFER_EVENTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];

export const CITIES = [`Luxembourg`, `Trier`, `Paris`, `Bernkastel-Kues`, `Strasbourg`, `Aachen`, `Barcelona`, `Sant Pol de Mar`, `London`, `Dublin`, `Cabo da Roca`, `Geneva`, `Chamonix`, `Amsterdam`];

export const TEXT = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

export const EVENT_OFFERS = [
  {
    name: `Add luggage`,
    type: `luggage`,
    category: [`train`, `bus`, `flight`],
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Add meal`,
    type: `meal`,
    category: [`train`, `flight`],
  },
  {
    name: `Switch to comfort`,
    type: `comfort`,
    category: [`train`, `flight`, `taxi`, `ship`, `bus`],
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Switch to business class`,
    type: `comfort`,
    category: [`train`, `flight`, `taxi`, `ship`, `bus`],
    price: Math.floor(Math.random() * 200),

  },
  {
    name: `Choose seats`,
    type: `seats`,
    category: [`train`, `bus`, `flight`, `ship`],
    price: Math.floor(Math.random() * 200),

  },
  {
    name: `Order Uber`,
    type: `taxi`,
    category: [`taxi`, `transport`],
    price: Math.floor(Math.random() * 200),

  },
  {
    name: `Rent a car`,
    type: `car`,
    category: [`drive`, `transport`],
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Add breakfast`,
    type: `breakfast`,
    category: `check-in`,
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Book tickets`,
    type: `tickets`,
    category: `sightseeing`,
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Lunch in city`,
    type: `lunch`,
    category: `sightseeing`,
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Double-decker bus ride`,
    type: `sightseeing`,
    category: `sightseeing`,
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Order transfer`,
    type: `transport`,
    category: [`check-In`, `flight`],
    price: Math.floor(Math.random() * 200),
  },
  {
    name: `Order excursion with a guide`,
    type: `seats`,
    category: [`check-In`, `sightseeing`],
    price: Math.floor(Math.random() * 200),
  },
];

export const SortTypes = {
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`
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

