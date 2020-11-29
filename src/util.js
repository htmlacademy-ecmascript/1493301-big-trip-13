import dayjs from "dayjs";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const countTotal = () => {
  const page = document.querySelector(`.page-body`);
  const eventPrice = page.querySelectorAll(`.event__price-value`);
  const offerPrice = page.querySelectorAll(`.event__offer-price`);
  const fullPrice = page.querySelector(`.trip-info__cost-value`);
  const list = [];
  const reducer = (store, currentValue) => store + currentValue;

  function countType(type) {
    type.forEach((item) => {
      const value = Number(item.innerHTML);
      list.unshift(value);
    });
  }

  countType(eventPrice);
  countType(offerPrice);
  fullPrice.innerHTML = list.reduce(reducer);
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


