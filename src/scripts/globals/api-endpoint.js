import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  IMAGE: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}/search?q=${keyword}`,
};

export default API_ENDPOINT;
