import {getRandomInteger, shuffleArray} from '../util';
import {EVENT_TYPES, TEXT, CITIES, EVENT_OFFERS} from '../const';


import dayjs from 'dayjs';

const OFFERS_AMOUNT = 3;


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


export const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs(eventEnd).diff(eventStart, `minutes`);
  const city = generateCities();
  const eventType = generateEventType();
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const price = getRandomInteger(3, 150);

  return {
    eventStart,
    eventEnd,
    travelDuration,
    city,
    eventType,
    isFavorite,
    description,
    photos,
    offers: shuffleArray(EVENT_OFFERS.filter((offer) => offer.category.includes(eventType))).slice(0, getRandomInteger(0, OFFERS_AMOUNT)),
    isChecked: Math.random() > 0.5,
    price
  };
};

