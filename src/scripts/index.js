import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-item'
import './components/restaurant-list'
import App from './views/app';

const app = new App({
  header: document.querySelector('.header'),
  button: document.querySelector('.header__hamburger'),
  drawer: document.querySelector('.nav-list'),
  drawerItem: document.querySelector('.nav-list__item a'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', ()=>{
  app.renderPage()
})

window.addEventListener('load', ()=>{
  app.renderPage()
})