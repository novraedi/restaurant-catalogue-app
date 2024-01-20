/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.dontSeeElement('restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('restaurant-item');

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

  I.click(firstRestaurant);
  I.seeElement('liked-button');
  I.click('liked-button');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('restaurant-item');
});
