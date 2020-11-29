import {getRandomInteger} from '../util';
import {EVENT_TYPES} from '../const';


const generateCities = () => {
  const cities = [
    `Luxembourg`,
    `Trier`,
    `Paris`,
    `Bernkastel-Kues`,
    `Strasbourg`,
    `Aachen`,
    `Barcelona`,
    `Sant Pol de Mar`,
    `London`,
    `Dublin`,
    `Cabo da Roca`,
    `Geneva`,
    `Chamonix`,
    `Amsterdam`
  ];

  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

const generateStartDate = () => {
  const randomDate = new Date(+(new Date()) + Math.floor(Math.random() * 1000000000));

  return randomDate;
};

const generateEndDate = (eventStart) => {
  const randomDate = new Date(+(eventStart) + Math.floor(Math.random() * 100000000));

  return randomDate;
};

const generateEventType = () => {
  const randomIndex = getRandomInteger(0, EVENT_TYPES.length - 1);

  return EVENT_TYPES[randomIndex];
};

const generateDescription = () => {
  const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  ];

  const randomIndex = getRandomInteger(0, text.length - 1);

  return text[randomIndex];
};

const generateOrdersList = () => {
  const orders = [
    {
      name: `Add luggage`,
      price: 10,
    },
    {
      name: `Book tickets`,
      price: 20,
    },
    {
      name: `Lunch in city`,
      price: 30,
    },
    {
      name: `Rent a car`,
      price: 50,
    },
    {
      name: `Order Uber`,
      price: 40,
    },
  ];

  const randomIndex = getRandomInteger(0, orders.length - 1);

  return orders[randomIndex];
};

const generatePhotos = () => {
  const photos = [];
  const randomIndex = getRandomInteger(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};

const generateOffers = () => {
  const offerOptions = [
    {name: `Add breakfast`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Add luggage`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Add meal`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Book tickets`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Choose seats`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Lunch in the city`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Seaplane tours`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Order Uber`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Rent a car`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Travel by train`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Double-decker bus ride`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Explore the suburbs`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
    {name: `Order the guide`, offerPrice: getRandomInteger(10, 50), isChecked: Math.random() > 0.5},
  ];

  const offersAmount = getRandomInteger(0, offerOptions.length);

  if (offersAmount === 0) {
    return null;
  }

  const offers = new Set();

  for (let i = 0; i < offersAmount; i++) {
    offers.add(offerOptions[getRandomInteger(0, offerOptions.length - 1)]);
  }

  return [...offers];
};

export const generateMockEvents = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = Math.floor((eventEnd - eventStart) / 3600 / 1000);
  const city = generateCities();
  const eventType = generateEventType();
  const price = Math.floor(Math.random() * 1001);
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const orders = generateOrdersList();
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
    orders,
    offers,
  };
};
