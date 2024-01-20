class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
            <img src="${this._restaurant.image}" alt="${this._restaurant.name}" class="restaurant-item__img" height="320" width="400">
            <div class="restaurant-item__content">
                <p class="restaurant-item__rating">Rating: ${this._restaurant.rating}</p>
                <h3 class="restaurant-item__name"><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
                <p class="restaurant-item__description">${this._restaurant.description}</p>
                <p class="restaurant-item__city">${this._restaurant.city}</p>
            </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
