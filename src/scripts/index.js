import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-item';
import './components/restaurant-list';
import './components/restaurantDetail';
import './components/like-button';
import './components/liked-button';
import App from './views/app';
import swRegister from './utils/sw-register';
import Loading from './utils/loading';

const app = new App({
  header: document.querySelector('.header'),
  searchForm: document.querySelector('.header__search'),
  searchInput: document.querySelector('.search__input'),
  button: document.querySelector('.header__hamburger'),
  drawer: document.querySelector('.nav-list'),
  drawerItem: document.querySelector('.nav-list__item a'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  Loading.init(
    document.querySelector('.spinner'),
  );
  app.renderPage();
});

window.addEventListener('load', async () => {
  Loading.init(
    document.querySelector('.spinner'),
  );
  app.renderPage();
  await swRegister();
});
