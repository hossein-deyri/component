import { endpoint } from 'endpoint';
import { http } from 'services/httpService';

export const getSpecials = async () => {
  try {
    const { data, status } = await http.get(
      endpoint.SETTINGS.mainPage.specials
    );

    if (status !== 200)
      throw new Error('There was an error in fetching the plans data.');

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err.message);
  }
};
