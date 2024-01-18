class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
    this._restaurants = '';
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._restaurants && this._restaurants.length > 0) {
      this.shadowDom.innerHTML = this._styles();

      this._restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        this.shadowDom.appendChild(restaurantItem);
      });
    } else {
      this.shadowDom.innerHTML = `
        ${this._styles()}
        ${Array(20).fill(0).map(() => `
          <restaurant-skeleton></restaurant-skeleton>
        `).join('')}
      `;
    }
  }

  _styles() {
    return `
      <style>
        :host {
          display: grid;
          gap: 16px;
          padding: 32px !important;
          max-width: 1300px;
          margin: 0 auto !important;
        }

        @media screen and (min-width: 768px) {
          :host {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (min-width: 992px) {
          :host {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        }
      </style>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
