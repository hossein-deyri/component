export interface ITag {
  id?: string;
  name: string;
  translatedName?: string;
  description?: string;
  fixed?: boolean;
  invisible?: boolean;
}

export interface ITagsReq {
  name?: string;
}
