import { Store } from '../core/core';

// 실제 보여질 message의 초기상태(가변성을 갖고 있는 상태)를 정의한다.
// 그리고 message를 담당하고 있는 core.js와 TextFiled(input)를 연결한다. 
// 또한, Message.js 컴포넌트와 연결되어 
export default new Store({
  message: 'Hello~',
});
