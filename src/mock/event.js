import {getRandomInteger, shuffleArray} from '../util';
import {EVENT_TYPES, EVENT_OFFERS, TEXT, CITIES} from '../const';

import dayjs from 'dayjs';

const OFFERS_AMOUNT = 3;


const generateCities = () => {
  const randomIndex = getRandomInteger(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

const generateStartDate = () => {
  const randomDate = new Date(+(new Date()) + Math.floor(Math.random() * 1000000000));

  return randomDate;
};

const generateEndDate = (eventStart) => {
  const randomDate = new Date(+(eventStart) + Math.floor(Math.random() * 100000000));

  return randomDate;
};

const generateDescription = () => {
  const randomIndex = getRandomInteger(0, TEXT.length - 1);

  return TEXT[randomIndex];
};


const generatePhotos = () => {
  const photos = [];
  const randomIndex = getRandomInteger(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};

const generateEventType = () => {
  const randomIndex = getRandomInteger(0, EVENT_TYPES.length - 1);

  return EVENT_TYPES[randomIndex];
};

const generateOffers = () => {
  const offers = [];

  for (const offerType of Object.keys(EVENT_OFFERS)) {
    offers.push({
      type: offerType,
      name: EVENT_OFFERS[offerType],
      price: getRandomInteger(3, 150),
      isChecked: Math.random() > 0.5,
    });
  }
  return shuffleArray(offers).slice(0, getRandomInteger(0, OFFERS_AMOUNT));
};

export const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs(eventEnd).diff(eventStart, `minute`);
  const city = generateCities();
  const eventType = generateEventType();
  const price = Math.floor(Math.random() * 1001);
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const offers = generateOffers();

  return {
    eventStart,
    eventEnd,
    travelDuration,
    city,
    eventType,
    price,
    isFavorite,
    description,
    photos,
    offers,
  };
};
