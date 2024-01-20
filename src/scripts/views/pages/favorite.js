/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
    <section id="Favorite" class="favorite">
        <restaurant-list></restaurant-list>
    <section>
    `;
  },

  async afterRender() {
    const restaurantsData = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantList = document.querySelector('restaurant-list');
    await Promise.all(restaurantsData.map(async (restaurant) => {
      const imageUrl = await RestaurantsAPI.imageRestaurant(restaurant.pictureId);
      restaurant.image = imageUrl;
    }));
    restaurantList.restaurants = restaurantsData;
  },
};

export default Favorite;
