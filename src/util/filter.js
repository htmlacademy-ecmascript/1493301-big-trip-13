import {FilterTypes} from '../const';
import dayjs from 'dayjs';


const isPastPoint = (date) => {
  return date === null ? false : dayjs().isAfter(date);
};

const isFuturePoint = (date) => {
  return date === null ? false : dayjs().isBefore(date, `day`) || dayjs().isSame(date, `day`);
};

export const filter = {
  [FilterTypes.EVERYTHING]: (events) => events.filter((event) => event),
  [FilterTypes.FUTURE]: (events) => events.filter((event) => isFuturePoint(event.dateStart)),
  [FilterTypes.PAST]: (events) => events.filter((event) => isPastPoint(event.dateEnd))
};
