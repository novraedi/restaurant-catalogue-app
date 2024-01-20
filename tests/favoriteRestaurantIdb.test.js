import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { itsActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

describe('FavoriteRestaurant Idb contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itsActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
