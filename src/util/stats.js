import dayjs from 'dayjs';
const MS_IN_MINUTE = 60000;

const findDurationInMsec = (start, end) => {
  return dayjs(end).diff(dayjs(start));
};

export const countMoneyAmount = (events, type) => {
  return events.filter((event) => event.type === type).reduce((sum, current) => {
    return sum + current.price;
  }, 0);
};

export const countPointsAmount = (events, type) => {
  return events.filter((event) => event.type === type).length;
};

export const countTimeAmount = (points, type) => {
  const msInHour = MS_IN_MINUTE * 60;

  const durationInMS = points.filter((point) => point.type === type)
    .reduce((cur, point) => cur + findDurationInMsec(point.eventStart, point.eventEnd), 0);

  return (durationInMS / msInHour).toFixed(2);
};
