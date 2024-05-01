export interface IPerson {
  description?: string;
  gender?: string;
  id?: number;
  imagePath?: string;
  imdbCode?: string;
  name?: string;
  translatedName?: string;
}

export interface IPersonsReq {
  name?: string;
}
