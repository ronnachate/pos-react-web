import axios from 'axios';
import { getLoginSession } from './authService';

const keyUser = 'auth-user';

//export const api_path = process.env.BASE_API_URL + '/api/v1';
export const api_path = 'http://localhost:3001/api/v1';

const httpClient = axios.create();
httpClient.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${getLoginSession().accessToken}`,
    };
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default httpClient;
