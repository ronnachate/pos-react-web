import axios from 'axios';

//let applicationKey = process.env.APPLICATION_KEY;
let applicationKey = 'ae9f62205182411d82e2b3ce2bfae7fd';

//export const api_path = process.env.BASE_API_URL + '/api/v1';
export const api_path = 'https://api.nerf.prionize.com/api/v1';

const httpClient = axios.create();
httpClient.interceptors.request.use(
  async (config) => {
    config.headers = {
      applicationkey: applicationKey,
    };
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default httpClient;
