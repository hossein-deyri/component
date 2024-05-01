import { ITag, ITagsReq } from './../ts/models/Tag.service';
import { endpoint } from 'endpoint';
import { http } from './httpService';
import qs from 'qs';

export const getTags = async (
  params?: ITagsReq
): Promise<IResponse<ITag[]>> => {
  const { data } = await http.get<IResponse<ITag[]>>(endpoint.TAGS.tags, {
    params,
    paramsSerializer: (par) => qs.stringify(par, { arrayFormat: 'repeat' })
  });

  return data;
};
