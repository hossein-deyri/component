import { endpoint } from 'endpoint';
import { http } from './httpService';
import qs from 'qs';
import { IPerson, IPersonsReq } from '@/ts/models/Person.service';

export const getPersonById = async (
  id: number
): Promise<IResponse<IPerson>> => {
  const { data } = await http.get<IResponse<IPerson>>(
    endpoint.PERSONS.person + id
  );
  return data;
};

export const getPersons = async (
  params?: IPersonsReq
): Promise<IResponse<IPerson[]>> => {
  const { data } = await http.get<IResponse<IPerson[]>>(
    endpoint.PERSONS.person,
    {
      params,
      paramsSerializer: (par) => qs.stringify(par, { arrayFormat: 'repeat' })
    }
  );

  return data;
};
