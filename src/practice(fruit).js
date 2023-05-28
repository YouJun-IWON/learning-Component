import { Component } from './core/youjun';
import FruitItem from './components/FruitItem';

export default class App extends Component {
  constructor() {
    // super안에 지정한 내용은 이 app 에서 사용할 변수를 지정하는 것이며, 선언적 rendering 이라고 한다.
    super({
      state: {
        fruits: [
          // component로 만들어서 주어진 데이터를 처리한다. => 그럼 훨씬 깔끔하게 데이터 별로 복잡한 로직/기능을 구현할 수 있다.
          { name: 'apple', price: 1000 },
          { name: 'banana', price: 2000 },
          { name: 'cherry', price: 3000 },
        ],
      },
    });
  }
  render() {
    console.log(this.state.fruits);

    this.el.innerHTML = /* html */ `
    <h1>Fruits</h1>
    <ul>
    </ul>
    `;

    // 다음과 같은 방법으로 부모Component에서 자식Component으로 데이터를 내려줄 수 있다.
    const ulEl = this.el.querySelector('ul');
    ulEl.append(
      ...this.state.fruits // 배열을 날려서 각각의 요소가 html에 만들어 질 수 있게 한다.
        .map(
          (fruit) =>
            new FruitItem({
              props: {
                name: fruit.name,
                price: fruit.price,
              },
            }).el // => 여기서 new FruitItem().el 은 this.el과 같은 역할을 한다. el속성이 갖고 있는 this(요소)를 정의한다.
        )
    );
  }
}
