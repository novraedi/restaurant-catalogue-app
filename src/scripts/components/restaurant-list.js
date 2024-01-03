import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <style>
            :host{
                display: grid;
                gap: 16px;
                padding: 32px !important;
                max-width: 1300px;
                margin: 0 auto !important;
            }
            @media screen and (min-width:768px) {
                :host {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                }
            }

            @media screen and (min-width:992px) {
                :host {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                }
              }
        </style>
        `;
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.shadowDom.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
