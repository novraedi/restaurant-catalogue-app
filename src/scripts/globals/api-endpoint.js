import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  IMAGE: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
};

export default API_ENDPOINT;
