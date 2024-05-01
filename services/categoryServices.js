import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getCategoryList = async () => {
  const { data } = await http.get(endpoint.SETTINGS.mainPage.categories);
  return data.data;
};
