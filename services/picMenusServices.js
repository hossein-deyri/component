import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getPicMenus = async () => {
  try {
    const { data } = await http.get(endpoint.SETTINGS.mainPage.picMenus);

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
