export interface ISearchStateValue {
  apiId: string | number;
  chipName: string;
}

export interface ISearchState {
  searchValue?: string;
  filters: {
    category?: ISearchStateValue;
    tags?: ISearchStateValue[];
    countries?: ISearchStateValue[];
    startYear?: ISearchStateValue;
    endYear?: ISearchStateValue;
    sortProductEnum?: ISearchStateValue;
    // TODO: @ali: replace with proper type
    persons?: any[];
    sounds?: ISearchStateValue[];
    subtitles?: ISearchStateValue[];
  };
  isOpenMobileFilter?: boolean;
}
