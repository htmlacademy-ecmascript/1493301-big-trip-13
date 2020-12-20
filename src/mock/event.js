import {getRandomInteger, getRandomArray, getRandomElement} from '../util';
//  import {EVENT_OFFERS} from '../const';


import dayjs from 'dayjs';

const OFFERS_AMOUNT = 3;

const CITIES = [`Luxembourg`, `Trier`, `Paris`, `Bernkastel-Kues`, `Strasbourg`, `Aachen`, `Barcelona`, `Sant Pol de Mar`, `London`, `Dublin`, `Cabo da Roca`, `Geneva`, `Chamonix`, `Amsterdam`];

const TEXT = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateCities = () => {
  const randomIndex = getRandomInteger(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

const generateEndDate = (eventStart) => {
  return dayjs(eventStart).add(getRandomInteger(0, 48), `hours`).add(getRandomInteger(0, 60), `minutes`).toDate();
};


const generateStartDate = () => {
  const daysGap = getRandomInteger(-7, 7);
  const hourGap = getRandomInteger(-24, 24);
  const minGap = getRandomInteger(-59, 59);
  return dayjs().add(daysGap, `day`).add(hourGap, `hour`).add(minGap, `minute`).toDate();
};

const generateDescription = () => {
  const randomIndex = getRandomInteger(0, TEXT.length - 1);

  return TEXT[randomIndex];
};

const EVENT_OFFERS = [
  {
    name: `Add luggage`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Switch to comfort`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),

  },
  {
    name: `Rent a car`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Book tickets`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Lunch in city`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Order transfer`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Order excursion with a guide`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Order Uber`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Travel by train`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  },
  {
    name: `Add meal`,
    price: getRandomInteger(3, 150),
    isChecked: Boolean(getRandomInteger(0, 2)),
  }
];


const generatePhotos = () => {
  const photos = [];
  const randomIndex = getRandomInteger(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};


const generateOffers = () => {
  let offers = [];
  const isOffers = getRandomInteger(0, OFFERS_AMOUNT);
  if (isOffers) {
    offers = getRandomArray(EVENT_OFFERS, OFFERS_AMOUNT)
        .map(function (offer) {
          return Object.assign({}, offer);
        });
  }
  return offers;
};

const EVENT_TYPES = {
  taxi: {
    name: `taxi`,
    offers: generateOffers()
  },
  bus: {
    name: `bus`,
    offers: generateOffers()
  },
  train: {
    name: `train`,
    offers: generateOffers()
  },
  ship: {
    name: `ship`,
    offers: generateOffers()
  },
  transport: {
    name: `transport`,
    offers: generateOffers()
  },
  drive: {
    name: `drive`,
    offers: generateOffers()
  },
  flight: {
    name: `flight`,
    offers: generateOffers()
  },
  [`check-in`]: {
    name: `check-in`,
    offers: generateOffers()
  },
  sightseeing: {
    name: `sightseeing`,
    offers: generateOffers()
  },
  restaurant: {
    name: `restaurant`,
    offers: generateOffers()
  }
};


export const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs(eventEnd).diff(eventStart, `minutes`);
  const city = generateCities();
  const eventType = getRandomElement(Object.keys(EVENT_TYPES));
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const price = getRandomInteger(3, 150);

  return {
    eventStart,
    eventEnd,
    travelDuration,
    city,
    price,
    id: generateId(),
    isFavorite,
    destination: {
      description,
      photos
    },
    event: {
      eventType: EVENT_TYPES[eventType].name,
      offers: EVENT_TYPES[eventType].offers
    }

  };
};
