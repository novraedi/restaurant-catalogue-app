const Home = {
  async render() {
    return `
        <!-- hero -->
        <section id="Home" class="hero">
        <img 
        src="/images/heros/hero-image_4.jpg" 
        alt="Bread Rolls"
        class="hero__image">
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
    const restaurantsData = await fetch('/data/DATA.json');
    const restaurantDataJson = await restaurantsData.json();
    restaurantList.restaurants = restaurantDataJson.restaurants;
  },
};

export default Home;
