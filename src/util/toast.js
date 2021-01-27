const SHOW_TIME = 5000;

const popUpContainerElement = document.createElement(`div`);
popUpContainerElement.classList.add(`toast-container`);
document.body.append(popUpContainerElement);

export const toast = (message) => {
  const popUpItem = document.createElement(`div`);
  popUpItem.textContent = message;
  popUpItem.classList.add(`toast-item`);

  popUpContainerElement.append(popUpItem);

  setTimeout(() => {
    popUpItem.remove();
  }, SHOW_TIME);
};
