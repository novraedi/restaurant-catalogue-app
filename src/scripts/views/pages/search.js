/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';
import UrlParser from '../../routes/url-parser';

const Search = {
  async render() {
    return `
        <section id="Search" class="Search">
            <restaurant-list></restaurant-list>
        </section>
        `;
  },

  async afterRender() {
    const { id: keyword } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantsList = document.querySelector('restaurant-list');
    const restaurantsData = await RestaurantsAPI.searchRestaurant(keyword);
    await Promise.all(restaurantsData.map(async (restaurant) => {
      const imageUrl = await RestaurantsAPI.imageRestaurant(restaurant.pictureId);
      restaurant.image = imageUrl;
    }));
    restaurantsList.restaurants = restaurantsData;
  },
};

export default Search;
