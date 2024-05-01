import { endpoint } from 'endpoint';
import { http } from './httpService';
import qs from 'qs';
import { ICountriesReq, ICountry } from '@/ts/models/Country.service';

export const getCountries = async (
  params?: ICountriesReq
): Promise<IResponse<ICountry[]>> => {
  const { data } = await http.get<IResponse<ICountry[]>>(
    endpoint.COUNTRIES.countries,
    {
      params,
      paramsSerializer: (par) => qs.stringify(par, { arrayFormat: 'repeat' })
    }
  );

  return data;
};
