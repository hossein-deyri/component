import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getSpecialMovies = async () => {
  const { data } = await http.get(
    `${endpoint.SETTINGS.mainPage.specials}?type=MOVIE`
  );
  return data.data;
};

export const getSlidersMovies = async () => {
  const { data } = await http.get(endpoint.SETTINGS.mainPage.sliders);
  return data.data;
};

export const getNormalDelimiters = async (id) => {
  const { data } = await http.get(
    endpoint.SETTINGS.mainPage.normalDelimiters + id
  );
  return data.data;
};
