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
}

export default RestaurantsAPI;
