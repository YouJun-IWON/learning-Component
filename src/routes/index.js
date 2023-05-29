//? 하나의 웹이 갖고 있는 여러 페이지들이 어떤 경로를 갖고 있는지를 지정한다. 
import Home from './Home';
import About from './About';
import { createRouter } from '../core/core';

// 어떤 페이지들이 있는지, 그리고 어떤 path 로 접근할 수 있는지를 저장한다.
export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]);
