import dayjs from "dayjs";

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

export const shuffleArray = (array) => {
  const [...arrayCopy] = array;

  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }

  return arrayCopy;
};

