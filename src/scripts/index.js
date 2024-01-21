/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './components/restaurant-item';
import './components/restaurant-list';
import './components/restaurantDetail';
import './components/restaurant-skeleton';
import './components/like-button';
import './components/liked-button';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

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
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
