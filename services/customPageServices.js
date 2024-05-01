import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getCustomSlidersMovies = async (id) => {
  const { data } = await http.get(endpoint.SETTINGS.CUSTOMPAGE.SLIDERS + id);
  return data.data;
};

export const getCustomSpecialMovies = async (id) => {
  const { data } = await http.get(endpoint.SETTINGS.CUSTOMPAGE.SPECIALS + id);
  return data.data;
};

export const getCustomProductsQuery = async (params) => {
  const { data } = await http.get(endpoint.SETTINGS.CUSTOMPAGE.QUERIES, {
    params
  });
  return data?.data;
};

export const getCustomProductsQueriesIds = async (menuId) => {
  const { data } = await http.get(
    endpoint.SETTINGS.CUSTOMPAGE.QUERIES + menuId
  );
  return data?.data;
};
