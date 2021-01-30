const SHOW_TIME = 2000;

const popUpContainerElement = document.createElement(`div`);
popUpContainerElement.classList.add(`toast-container`);
document.body.append(popUpContainerElement);

export const toast = (message) => {
  if (!Array.from(document.querySelectorAll(`.toast-item`)).find((element) => element.textContent === message)) {
    const popUptItem = document.createElement(`div`);
    popUptItem.textContent = message;
    popUptItem.classList.add(`toast-item`);

    popUpContainerElement.append(popUptItem);

    window.addEventListener(`online`, () => {
      popUptItem.remove();
    });

    setTimeout(() => {
      popUptItem.remove();
    }, SHOW_TIME);
  }
};
