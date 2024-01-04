import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsAPI {
  static async listAllRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async imageRestaurant(id) {
    const response = await fetch(API_ENDPOINT.IMAGE(id));
    const imageBlob = await response.blob();
    return URL.createObjectURL(imageBlob);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewRestaurant({ id, name, review }) {
    const data = { id, name, review };
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    return responseJson;
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantsAPI;
