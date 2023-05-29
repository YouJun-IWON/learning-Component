import { Component } from '../core/core';
import messageStore from '../store/message';

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h1',
    });
    messageStore.subscribe('message', (newVal) => {
      console.log('newVal:', newVal);
      // input 값이 들어와 message가 바뀌게 되면
      this.render();
    });
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
