import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getAllMenus = async () => {
  try {
    const { data } = await http.get(endpoint.SETTINGS.CUSTOMPAGE.MENUS);

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
