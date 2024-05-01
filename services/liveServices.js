import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getRecentLiveBroadcasts = async () => {
  try {
    const { data } = await http.get(endpoint.LIVES.GETRECENTLIVEBROADCASTS);

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};