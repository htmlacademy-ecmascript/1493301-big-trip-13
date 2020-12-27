import dayjs from 'dayjs';
import {TRANSFER_EVENTS} from '../const';
import {formatDateToIso} from '../util/global';


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


const getFormatedDate = (date) => {
  return formatDateToIso(date).slice();
};

const createDayDates = (routePoints) => {
  const dates = routePoints.map((routePoint) => getFormatedDate(routePoint.eventStart));
  const datesSet = new Set(dates);
  const inimitableDates = Array.from(datesSet);

  return inimitableDates;
};

export const generateDays = (routePoints) => {
  const dates = createDayDates(routePoints);

  return dates.map((date) => {
    const matchPoints = routePoints.filter((routePoint) => getFormatedDate(routePoint.eventStart) === date);

    return {
      date,
      dayPoints: matchPoints
    };
  });
};


export const sortByDate = (a, b) => {
  return a.eventStart.getTime() - b.eventStart.getTime();
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

export const sortByDuration = (first, second) => {
  const firstDuration = first.eventStart.getTime() - first.eventEnd.getTime();
  const secondDuration = second.eventStart.getTime() - second.eventEnd.getTime();
  return secondDuration - firstDuration;
};

