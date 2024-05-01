import { endpoint } from 'endpoint';
import { http } from './httpService';
import qs from 'qs';

export const getProductById = (id) => {
  return http.get(endpoint.PRODUCTS.products + id);
};

export const getProductsQuery = async (number) => {
  const { data } = await http.get(endpoint.SETTINGS.mainPage.queries + number);
  return data?.data;
};

export const getRelationsProductById = (id) => {
  return http.get(endpoint.PRODUCTS.relatedProducts + id);
};

export const getProductByParams = async (params) => {
  const { data } = await http.get(endpoint.PRODUCTS.products, { params });
  return data.data;
};

export const getParentSeason = (id) => {
  return http.get(endpoint.RELATIONS.relations, {
    params: {
      endModel: 'PRODUCT',
      startModel: 'PRODUCT',
      endId: id
    }
  });
};

export const getProductsByParams = async (params) => {
  const { data } = await http.get(endpoint.PRODUCTS.products, {
    params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' })
  });
  return data.data;
};

export const productInteraction = async (action, productId) => {
  const { data } = await http.post(
    endpoint.PRODUCTS.UserProductInteraction,
    {},
    { params: { userProductInteractionEnumInt: action, productId } }
  );
  return data.data;
};

export const deleteProductInteraction = async (action, productId) => {
  const { data } = await http.post(
    endpoint.PRODUCTS.UserProductInteraction,
    {},
    { params: { userProductInteractionEnumInt: action, productId } }
  );
  return data.data;
};

export const getBookmarkProductList = () => {
  return http.get(endpoint.PRODUCTS.UserBookmarkProductList);
};

export const userInteractionList = async (productId) => {
  const { data } = await http.get(
    endpoint.PRODUCTS.userInteractionList.replace(':productId', productId)
  );
  return data.data;
};

export const sendReport = async (reportData) => {
  const { data } = await http.post(endpoint.PRODUCTS.violations, reportData);
  return data.data;
};
