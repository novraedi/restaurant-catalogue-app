/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <restaurant-detail></restaurant-detail>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantsAPI.detailRestaurant(url.id);
    const restaurantDetail = document.querySelector('restaurant-detail');
    const imageUrl = await RestaurantsAPI.imageRestaurant(restaurantData.pictureId);
    restaurantData.image = imageUrl;
    restaurantDetail.restaurant = restaurantData;
  },
};

export default Detail;
