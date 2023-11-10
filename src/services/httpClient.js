import axios from 'axios';
import { getLoginSession, refreshToken } from './authService';

export const api_path = process.env.REACT_APP_API_URL + '/v1';

const httpClient = axios.create();
httpClient.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Authorization": `Bearer ${getLoginSession().accessToken}`,
    };
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const resp = await refreshToken();
      if (resp.error) {
        return Promise.reject(resp);
      }
      //get from storage to ensure, token stored in storage is the latest
      httpClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${getLoginSession().accessToken}`;
      return httpClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
