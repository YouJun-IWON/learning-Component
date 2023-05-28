//?  Component
//* 해석:
// component 라는 클래스는 호출될 때 payload라는 매개변수를 받는다.
// payload에서 tagName, state, props를 꺼낸다.
// 그 다음 각각의 변수에 저장된 내용을 this를 사용해서 해당하는 각각의 변수에 할당해준다.
// this를 통해 지정함으로써 class 안에서 만들어지는 모든 메소드(render())에서 this 라는 키워드로 참조해서 쓸 수 있다.

//! 즉 가장 근간이 되는 논리구조를 담당한다.

export class Component { 
  constructor(payload = {}) {
    const { tagName = 'div', state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    // this.render()에서 사용할 수 있도록 선언을 해준다.
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {

  }
}

/// Router ///
