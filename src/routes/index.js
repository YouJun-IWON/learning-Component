import Home from './Home';
import About from './About';
import { createRouter } from '../core/youjun';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]);
