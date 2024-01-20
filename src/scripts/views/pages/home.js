/* eslint-disable no-param-reassign */
import RestaurantsAPI from '../../data/RestaurantsAPI';

const Home = {
  async render() {
    return `
        <!-- hero -->
        <section id="Home" class="hero">
        <picture>
          <source media="(max-width: 425px)" srcset="./images/hero-image_4-small.jpg">

          <source media="(max-width: 768px)" srcset="./images/hero-image_4-large.jpg">

          <source type="image/webp" srcset="./images/hero-image_4.webp">

          <img 
          data-src="./images/hero-image_4.jpg" 
          alt="Bread Rolls"
          class="hero__image lazyload">
        </picture>
        
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
