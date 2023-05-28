import { Component } from './core/youjun';
import TheHeader from './components/TheHeader';

export default class App extends Component {
  render() {
    // 나만의 html 요소를 만드려면 보통 2개 이상의 단어를 섞어 기존의 html 요소와의 혼동을 없애는 것이 좋다.
    const routerView = document.createElement('router-view');
    this.el.append(new TheHeader().el, routerView);
  }
}
