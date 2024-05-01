import { endpoint } from 'endpoint';
import { http } from './httpService';

export const getChannelList = async () => {
  const { data } = await http.get(endpoint.CHANNELS.channels);
  return data.data;
};

export const getSingleChannel = async (id) => {
  const { data } = await http.get(endpoint.CHANNELS.channels + id);
  return data.data;
};

export const getEpgChannel = async (id) => {
  const { data } = await http.get(endpoint.CHANNEL_PROGRAMS.channel, {
    params: { channelId: id }
  });
  return data.data.programs;
};
