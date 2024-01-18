class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <style>
        :host {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
            border-radius: 5px 5px 3px 3px;
            margin-bottom: 1em;
            position: relative;
            overflow: hidden;
          }
          
          .restaurant-item__img {
            width: 100%;
            background-size: cover;
          }
          
          .restaurant-item__content {
            text-align: left;
            padding: 15px 20px;
          }
          
          .restaurant-item__city {
            position: absolute;
            top: 10px;
            left: 0;
            padding: 10px 20px;
            background-color: white;
            color: black;
            font-weight: bold;
            box-shadow: inset -1px 0 4px 0 rgba(0, 0, 0, 0.2);
          }
          
          .restaurant-item__rating {
            font-size: 16px;
            margin-bottom: 1em;
            font-weight: bold;
          }
          
          .restaurant-item__name {
            font-size: 30px;
            margin-bottom: 0.5em;
          }

          .restaurant-item__name a{
            color: black;
            text-decoration: none;
            display: block;
            line-height: 44px;
            min-width: 44px;
            min-height: 44px;
          }

          .restaurant-item__name:hover a{
            text-decoration: underline;
          }
          
          .restaurant-item__description,
          .restaurant-item__city {
            line-height: 1.5em;
            font-size: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 150px;
          }

          @media screen and (min-width:768px) {
            .restaurant-item__img {
              height: 13rem;
            }
          }

          @media screen and (min-width:992px) {          
            .restaurant-item__img {
              height: 15rem;
            }
          }
        </style>
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
