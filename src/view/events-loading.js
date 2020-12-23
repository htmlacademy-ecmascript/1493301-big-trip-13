import AbstractView from './abstract';

const createEventsLoadingTemplate = () => {
  return `
  <p class="trip-events__msg">Loading...</p>`;
};


export default class LoadingView extends AbstractView {
  getTemplate() {
    return createEventsLoadingTemplate();
  }
}
