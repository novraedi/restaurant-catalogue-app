/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="detail">
      <restaurant-detail></restaurant-detail>
      <div class="likeButtonContainer"></div>
    </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantsAPI.detailRestaurant(url.id);
    const restaurantDetail = document.querySelector('restaurant-detail');
    const imageUrl = await RestaurantsAPI.imageRestaurant(restaurantData.pictureId);
    restaurantData.image = imageUrl;
    restaurantDetail.restaurant = restaurantData;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurant: {
        id: restaurantData.id,
        name: restaurantData.name,
        description: restaurantData.description,
        city: restaurantData.city,
        rating: restaurantData.rating,
        pictureId: restaurantData.pictureId,
      },
    });
  },
};

export default Detail;
