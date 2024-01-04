/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import { precacheAndRoute } from 'workbox-precaching';
import { Route, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantAPI = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);

registerRoute(restaurantAPI);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
