import axios from 'axios';
import { getToken } from './authServices';

export const setRequestInterceptor = (callback) => {
  return axios.interceptors.request.use(request => {
    const token = getToken();
    if (token) {
      request.headers['authorization'] = `Bearer ${token}`;
    } else delete request.headers['authorization'];
    if (callback) callback();
    return request;
  });
};

export const setResponseInterceptor = (successHandler, errorHandler) => {
  return axios.interceptors.response.use(successHandler, errorHandler);
};

export const ejectRequestInterceptor = interceptor => {
  return axios.interceptors.request.eject(interceptor);
};

export const ejectResponseInterceptor = interceptor => {
  return axios.interceptors.response.eject(interceptor);
};