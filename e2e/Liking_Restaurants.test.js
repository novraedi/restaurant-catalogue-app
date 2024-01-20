/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.seeElement('.restaurant-item__name a');
  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__name a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
