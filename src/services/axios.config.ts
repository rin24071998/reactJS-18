import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';

// Default configuration for the Axios instance
const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: Number(process.env.REACT_APP_API_TIMEOUT),
};
// Create a new Axios instance with default configuration
const instance = axios.create(DEFAULT_API_CONFIG);

// Add a request interceptor
instance?.interceptors?.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance?.interceptors?.response.use(
  (response: AxiosResponse) => {
    // Do something with response data
    return response;
  },
  (error: AxiosError) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Exporting methods to use the instance for HTTP requests
const httpClient = {
  get: <T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return trackPromise(instance.get<T>(url, options));
  },
  post: <T>(
    url: string,
    body?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return trackPromise(instance.post<T>(url, body, options));
  },
  put: <T>(
    url: string,
    body?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return trackPromise(instance.put<T>(url, body, options));
  },
  del: <T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return trackPromise(instance.delete<T>(url, options));
  },
};

export default httpClient;
