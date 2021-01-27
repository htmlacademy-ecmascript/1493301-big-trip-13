import dayjs from 'dayjs';
import {TRANSFER_EVENTS} from '../const';

export const humaneEventDate = (dueDate) => {
  return dayjs(dueDate).format(`D MMM`);
};


export const humaneEventTime = (dueDate) => {
  return dayjs(dueDate).format(`HH:mm`);
};

export const humaneEditEventTime = (dueDate) => {
  return dayjs(dueDate).format(`DD/MM/YY HH:mm`);
};

export const createPrepositions = (type) => {
  return TRANSFER_EVENTS.includes(type) ? `to` : `in`;
};

export const getTimeDiff = (start, end) => {
  let duration = ``;
  const dayDuration = dayjs(end).diff(dayjs(start), `day`);
  const hourDuration = dayjs(end).diff(dayjs(start), `hour`) % 24;
  const minuteDuration = dayjs(end).diff(dayjs(start), `minute`) % 60;
  duration += dayDuration ? dayDuration.toString().padStart(2, `0`) + `D ` : ``;
  duration += (dayDuration || hourDuration) ? hourDuration.toString().padStart(2, `0`) + `H ` : ``;
  duration += minuteDuration ? minuteDuration.toString().padStart(2, `0`) + `M ` : ``;
  return duration;
};

export const sortByDate = (a, b) => {
  return dayjs(a.eventStart).diff(b.eventStart);
};

export const sortByDuration = (a, b) => {
  return dayjs(b.eventStart).diff(b.eventEnd, `minute`) - dayjs(a.eventStart).diff(a.eventEnd, `minute`);
};

export const sortByPrice = (a, b) =>{
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }
};
