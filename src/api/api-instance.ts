import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL }from '@/config/constants';

export const apiInstance = (config: Partial<AxiosRequestConfig> = {}): AxiosInstance => {
  const token = process.env.REACT_APP_BEARER_TOKEN;
  const AxiosConfig: AxiosRequestConfig = {
    baseURL: config.baseURL ?? BASE_URL,
    headers: {'Authorization': 'Bearer '+token}
  }

  const axiosInstance = axios.create(AxiosConfig);

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.request && error.request.status) {
        if (error.request.status === 401) {
          console.error('Unauthorized')
        }
      }

      return Promise.reject([error.message]);
    }
  );

  return axiosInstance;
};