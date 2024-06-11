import axios, { AxiosRequestConfig } from 'axios';
import { setLoading } from '../states/app.action';

type IConfig = AxiosRequestConfig & {
  showLoader: boolean;
}

const access_token = window.localStorage.getItem('access_token');

const config: IConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  showLoader: false,
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
}
export const axiosInstance = axios.create(config);

export function initInterceptor(store: any) {

  // Add a request interceptor
  axiosInstance.interceptors.request.use(function (config: any) {
    // Do something before request is sent
    console.log('interceptor request: ', config)

    // show loading
    if(config.showLoader) {
      store.dispatch(setLoading(true));
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use(async function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loading
    if(response.config.showLoader) {
      store.dispatch(setLoading(false));
    } 
    console.log('interceptor response: ', response)


    return response;
  }, async function (error) {
    // hide loading
    if(error.config.showLoader) {
      store.dispatch(setLoading(false));
    } 

    console.log('interceptor response error: ', error)


    // handle error timeout
    if(error.code === "ECONNABORTED") {
      // todo
      console.log('error ECONNABORTED ')
    }

    // handle error expired token
    if(error.response?.status === 403) {
      try {
        // todo
        // get new access token
        const result: any = axiosInstance.get('/refresh-token');
        const access_token = result.data.access_token;
        window.localStorage.setItem('access_token', access_token);
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${access_token}`;

        // retry request
        return await axiosInstance(error.config);
      } catch(error) {
        return Promise.reject(error);
      }
    }

    // handler other errors
    switch(error.response?.status) {
      case 400: {
        // todo
        break;
      }
      case 500: {
        // todo
        break;
      }
      case 403: {
        // todo
        break;
      }
      default: {
        // todo
      }
    }


    return Promise.reject(error);
  });
}