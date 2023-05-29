//? main.js 에서는 웹을 구성하는 component와 기능들이 어떤 순서로 동작할 것인지를 결정한다. 

import App from './App';
import router from './routes/index';

// 컴포넌트 구성 (html의 태그들이 구성되어야 한다.)
const root = document.querySelector('#root');
root.append(new App().el);

// 다양한 페이지 구성
router();
