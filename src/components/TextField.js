import { Component } from '../core/core';
import messageStore from '../store/message';

export default class TextField extends Component {
  render() {
    // getter (Store)
    this.el.innerHTML = /* html */ `
        <input value="${messageStore.state.message}" /> 
        `;

    // setter (Store)
    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      messageStore.state.message = inputEl.value;
    });
  }
}
