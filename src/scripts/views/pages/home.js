/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';

const Home = {
  async render() {
    return `
        <!-- hero -->
        <section id="Home" class="hero">
        <img 
        src="/images/heros/hero-image_4.jpg" 
        alt="Bread Rolls"
        class="hero__image skeleton"
        height="540"
        width="1340">
        </section>
    
        <!-- Restaurant -->
        <section id="restaurant" class="restaurant">
        <h2 tabindex="0" class="restaurant__heading">Explore Restaurant</h2>
        <restaurant-list></restaurant-list>
        </section>
        `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('restaurant-list');
    const restaurantsData = await RestaurantsAPI.listAllRestaurant();
    await Promise.all(restaurantsData.map(async (restaurant) => {
      const imageUrl = await RestaurantsAPI.imageRestaurant(restaurant.pictureId);
      restaurant.image = imageUrl;
    }));
    restaurantList.restaurants = restaurantsData;
  },
};

export default Home;
