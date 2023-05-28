import { Component } from '../core/youjun';
//* 해석 :
// FruitItem이라는 클래스를 Component를 상속받는다.
// super안에서 상속받은 클래스를 실행시킨다.
// 이때 payload라는 변수를 통해 데이터를 받으면 props를 통해 payload.props를 넘겨준다.
// Component에서 this.props로 등록이 된다. 즉, this.props로 재활용이 가능해진다.
// 여기서 this.el은 'li' tag를 갖고있다.

//! 즉 youjun/js에서 정한 논리구조를 바탕으로 담당하고 있는 파트에 대한 정보 처리 및 표시 방법을 정의한다.
export default class FruitItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props,
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <span>${this.props.name}</span>
    <span>${this.props.price}</span>
    `;

    this.el.addEventListener('click', () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
