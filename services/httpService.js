import { userToken } from '@/utilize/token';
import Axios from 'axios';

Axios.defaults.timeout = 30000;
Axios.defaults.headers.post['Content-Type'] = 'application/json';

const API = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PLATFORM,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
const API_WITHOUT_TOKEN = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PLATFORM,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

if (typeof window !== 'undefined') {
  const token = userToken.get();
  const apiToken = sessionStorage.getItem('API_TOKEN');
  if (token || apiToken) {
    API.defaults.headers.common['Authorization'] = `Bearer ${
      token || apiToken
    }`;
  }
}

export const changeToken = () => {
  const token = sessionStorage.getItem('API_TOKEN');
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const setupResponseInterceptor = (navigate) => {
  API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 500) {
        navigate('/500');
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export default API;

export const http = {
  get: API.get,
  post: API.post,
  put: API.put,
  delete: API.delete,
  patch: API.patch
};
export const httpNoToken = {
  get: API_WITHOUT_TOKEN.get,
  post: API_WITHOUT_TOKEN.post,
  put: API_WITHOUT_TOKEN.put,
  delete: API_WITHOUT_TOKEN.delete
};
