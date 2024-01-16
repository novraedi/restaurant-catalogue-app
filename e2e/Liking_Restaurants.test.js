Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(15);

  I.seeElement({shadow: ['restaurant-list', 'restaurant-item', 'restaurant-item__content', 'restaurant__name', 'a']});
  const firstRestaurant = locate({shadow: ['restaurant-list', 'restaurant-item', 'restaurant-item__content', 'restaurant__name', 'a']});
});
