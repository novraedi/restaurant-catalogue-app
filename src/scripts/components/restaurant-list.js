class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  connectedCallback() {
    this.renderSkeleton();
  }

  renderSkeleton() {
    const skeletonHTML = Array(20).fill('<restaurant-skeleton></restaurant-skeleton>').join('');
    this.innerHTML = skeletonHTML;
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
