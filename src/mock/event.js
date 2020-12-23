import {EVENT_TYPES, EVENT_OFFERS} from '../const';
import {getRandomInteger} from "../util/global";
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


const generatePhotos = () => {
  const photos = [];
  const randomIndex = getRandomInteger(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};


const generateValue = (range) => {
  const randomIndex = getRandomInteger(0, range.length - 1);

  return range[randomIndex];
};

const generateOffers = () => {
  const offers = new Map();
  EVENT_TYPES.forEach((eventType) => {
    const relatedDeals = [];
    for (let i = 0; i < OFFERS_AMOUNT; i++) {
      relatedDeals.push({
        type: eventType,
        name: EVENT_OFFERS[getRandomInteger(0, EVENT_OFFERS.length - 1)],
        id: generateId(),
        price: getRandomInteger(3, 150),
        isChecked: Boolean(getRandomInteger(0, 1))
      });
    }
    offers.set(eventType, relatedDeals.slice(0, getRandomInteger(0, OFFERS_AMOUNT)));
  });
  return offers;
};

export const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs(eventEnd).diff(eventStart, `minutes`);
  const city = generateCities();
  const eventType = generateValue(EVENT_TYPES);
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const price = getRandomInteger(3, 150);
  const offers = generateOffers();
  const relatedDeals = offers.get(eventType);
  const id = generateId();

  return {
    eventStart,
    eventEnd,
    id,
    travelDuration,
    city,
    eventType,
    isFavorite,
    description,
    photos,
    offers: relatedDeals,
    price,
  };
};

