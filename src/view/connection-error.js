import AbstractView from './abstract';

const createCorrectionErrorWarning = () => `<div class="page-header__error">
<div class="page-header__error-connection">Internet connection error!</div>
<div class="page-header__error-connection">You are not allowed to add and edit points</div>
</div>`;


export default class ConnectionErrorView extends AbstractView {
  getTemplate() {
    return createCorrectionErrorWarning();
  }
}
