import { Component } from '../core/core';
import messageStore from '../store/message';

export default class Message extends Component {
  constructor() {
    super();
    // messageStore가 갖고 있는 'subscribe' 함수를 실행시킨다.
    // 'message'라는 상태/데이터 부분이 변경되는 지 감시한다.
    // 만약 변경이 되면 callback 함수를 실행한다.
    // constructor 함수 안에서 실행하는 이유는 'message' 값이 바뀔 때마다 render() 함수에 반영될 수 있어야 한다.
    // 그리고 new로 정의 되어 사용되는 만큼 보여지는 값이 필요하다.
    messageStore.subscribe('message', () => {
      // input 값이 들어와 message가 바뀌게 되면
      this.render();
    });
  }
  //
  render() {
    this.el.innerHTML = /* html */ `
            <h2>${messageStore.state.message}</h2>
        `;
  }
}


