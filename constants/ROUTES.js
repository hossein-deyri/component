import qs from 'qs';

const ROUTES = {
  SEARCH: (params = { tags: [], ages: [] }) =>
    `/search${qs.stringify(params, {
      arrayFormat: 'comma',
      addQueryPrefix: true
    })}`,
  PLAYER: (params = { id: undefined, liveId: undefined }) =>
    `/player${qs.stringify(params, {
      arrayFormat: 'comma',
      addQueryPrefix: true
    })}`,
  NOT_FOUND: '/404'
};

export default ROUTES;
