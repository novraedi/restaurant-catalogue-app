/* eslint-disable no-console */
import RestaurantsAPI from '../data/RestaurantsAPI';

class RestaurantDetail extends HTMLElement {
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
          :host{
            width: 100%;
            display: block;
            max-width: 800px;
            margin: auto !important;
            padding: 6rem 40px !important;
          }

          .restaurant__poster{
            width: 100%;
            height: 500px;
            object-fit: cover;
          }

          .restaurant__toggleReviews{
            width: 100%;
            grid-column-start: 1;
            grid-column-end: 3;
            padding: 20px;
            background-color: black;
            color: white;
            font-size: 20px;
            font-weight: bold;
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 10px;
            cursor: pointer;
            margin-top: 80px;
          }

          .restaurant__inputReviews{
            grid-column-start: 1;
            grid-column-end: 3;
          }

          .inputReviews__form label{
            display: block;
            margin: 15px 0;
          }

          #inputReviews__name{
            padding: 0 10px;
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 10px;
            min-width: 44px;
            min-height: 44px;
          }

          #inputReviews__review{
            width: 70%;
            height: 100px;
            padding: 10px;
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 10px;
            display: block;
            margin: 20px 0;
          }

          .inputReviews__submitBtn{
            padding: 10px;
            width: 30%;
            background-color: black;
            color: white;
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 10px;
            cursor: pointer;
            margin: 10px 0;
            min-width: 44px;
            min-height: 44px;
          }

          .restaurant__reviews{
            display: none;
          }

          .restaurant__reviews.restaurant__reviews--show{
            display: block;
          }

          .reviewer__list{
            display: grid;
            gap: 15px;
          }

          .reviewer__item{
            background-color: rgb(140, 140, 140);
            padding: 10px 20px 20px;
            border-radius: 10px;
            color: white;
          }

          .reviewer__name{
            font-size: 16px;
            font-weight: bold;
            margin: 5px 0;
          }

          .reviewer__date{
            font-size: 12px;
            margin: 0;
          }

          @media screen and (min-width:768px) {
            :host{
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            .restaurant__title{
              grid-column-start: 1;
              grid-column-end: 3;
            }

            .restaurant__overview{
              grid-column-start: 1;
              grid-column-end: 3;
            }

            .restaurant__reviews{
              grid-column-start: 1;
              grid-column-end: 3;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }

            .restaurant__reviews.restaurant__reviews--show{
              display: grid;
            }

            .reviewer__list{
              grid-template-columns: 1fr 1fr;
              grid-column-start: 1;
              grid-column-end: 3;
              gap: 15px;
            }

            .restaurant__reviews h3{
              grid-column-start: 1;
              grid-column-end: 3;
            }

            .restaurant__menus{
              grid-column-start: 1;
              grid-column-end: 3;
              display: grid;
              grid-template-columns: 1fr 1fr;
            }

            .restaurant__menus h3{
              grid-column-start: 1;
              grid-column-end: 3;
            }
          }
        </style>

        <h2 class="restaurant__title">${this._restaurant.name}</h2>
        <img class="restaurant__poster" src="${this._restaurant.image}" alt="${this._restaurant.name}" />
        <div class="restaurant__info">
            <h3>Information</h3>
            <h4>Address</h4>
            <p>${this._restaurant.address}</p>
            <h4>City</h4>
            <p>${this._restaurant.city}</p>
            <h4>Rating</h4>
            <p>${this._restaurant.rating}</p>
        </div>
        <div class="restaurant__overview">
            <h3>Description</h3>
            <p>${this._restaurant.description}</p>
        </div>
        <div class="restaurant__menus">
            <h3>Menus</h3>
            <div class="restaurant__foods">
              <h4>Foods</h4>
              <ul>
                    ${this._restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
              </ul>
            </div>
            <div class="restaurant__drinks">
              <h4>Drinks</h4>
              <ul>
                  ${this._restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
            </div>
        </div>
        <button class="restaurant__toggleReviews">Open reviews</button>
        <div class="restaurant__reviews">
          <div class="restaurant__inputReviews">
            <form class="inputReviews__form">
              <label for="inputReviews__name">Name</label>
              <input id="inputReviews__name">
              <label for="inputReviews__review">Review</label>
              <textarea id="inputReviews__review"></textarea>
              <button type="submit" class="inputReviews__submitBtn">Submit</button>
            </form>
          </div>
          <h3>Reviews</h3>
          <div class="reviewer__list">
            ${this._restaurant.customerReviews.map((review) => `
              <div class="reviewer__item">
                <p class="reviewer__name">${review.name}</p>
                <p class="reviewer__date">${review.date}</p>
                <p class="reviewer__review">${review.review}</p>
              </div>
              `).join('')}
          </div>
        </div>
    `;

    const toggleReviewsBtn = this.shadowDom.querySelector('.restaurant__toggleReviews');
    toggleReviewsBtn.addEventListener('click', () => {
      const reviewsSection = this.shadowDom.querySelector('.restaurant__reviews');
      const isOpen = reviewsSection.classList.toggle('restaurant__reviews--show');

      toggleReviewsBtn.innerText = isOpen ? 'Close reviews' : 'Open reviews';
    });

    const inputReviewsForm = this.shadowDom.querySelector('.inputReviews__form');
    inputReviewsForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      try {
        const { id } = this._restaurant;
        const name = this.shadowDom.getElementById('inputReviews__name').value;
        const review = this.shadowDom.getElementById('inputReviews__review').value;

        const { customerReviews } = await RestaurantsAPI.addReviewRestaurant({ id, name, review });

        const reviewsContainer = this.shadowDom.querySelector('.reviewer__list');

        reviewsContainer.innerHTML = '';

        customerReviews.forEach((customerReview) => {
          const newReview = document.createElement('div');
          newReview.className = 'reviewer__item';
          newReview.innerHTML = `
            <p class="reviewer__name">${customerReview.name}</p>
            <p class="reviewer__date">${customerReview.date}</p>
            <p class="reviewer__review">${customerReview.review}</p>
          `;
          reviewsContainer.appendChild(newReview);
        });

        inputReviewsForm.reset();
      } catch (error) {
        console.error('Error adding review:', error);
      }
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
