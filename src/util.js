import {TRANSFER_EVENTS, RenderPosition} from './const.js';
import dayjs from 'dayjs';

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const humaneEventDate = (dueDate) => {
  return dayjs(dueDate).format(`D MMM`);
};

export const humaneEventTime = (dueDate) => {
  return dayjs(dueDate).format(`HH:mm`);
};

export const humaneEditEventTime = (dueDate) => {
  return dayjs(dueDate).format(`DD/MM/YY HH:mm`);
};


export const getRandomElement = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

export const getRandomArray = (array, count) => {
  let arrayCount = getRandomInteger(1, count);
  let randomArray = [];
  for (let i = 0; i < arrayCount; i++) {
    randomArray[i] = getRandomElement(array);
  }

  return Array.from(new Set(randomArray));
};

export const createPrepositions = (type) => {
  return TRANSFER_EVENTS.includes(type) ? `to` : `in`;
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

