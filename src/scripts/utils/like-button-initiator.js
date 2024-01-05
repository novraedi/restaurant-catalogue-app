import FavoriteRestaurantIdb from './favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExistOnIdb(id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isRestaurantExistOnIdb(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = '<like-button></like-button>';
    const likeButton = document.querySelector('like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLikedButton() {
    this._likeButtonContainer.innerHTML = '<liked-button></liked-button>';
    const likedButton = document.querySelector('liked-button');
    likedButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
