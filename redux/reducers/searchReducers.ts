import { ISearchState, ISearchStateValue } from '@/ts/models/SearchState';
import { ITag } from '@/ts/models/Tag.service';
import { PayloadAction } from '@reduxjs/toolkit';
import { ROOT } from '@/constants/ROOT';
import { ICountry } from '@/ts/models/Country.service';
import { IArrayBoxVoiceAndSubtitle } from '@/ts/types/ArrayBoxVoiceAndSubtitle';
import SORT_PRODUCT from '@/ts/enums/SORT_PRODUCT';
import CATEGORIES from '@/ts/enums/CATEGORIES';

const getSearchStateValueObject = (value: string, chipName?: string) =>
  <ISearchStateValue>{
    apiId: value,
    chipName: chipName || value
  };

const deleteFilter = (
  state: ISearchState,
  filterNames: (keyof ISearchState['filters'])[]
): ISearchState => {
  let newStateFilters = { ...state.filters };
  filterNames.forEach((filterName) => delete newStateFilters[filterName]);

  return {
    ...state,
    filters: newStateFilters
  };
};

const searchReducers = {
  setCategory: (
    state: ISearchState,
    action: PayloadAction<CATEGORIES.MOVIE | CATEGORIES.SERIES>
  ) => {
    const chipName =
      action.payload === CATEGORIES.MOVIE
        ? 'فقط فیلم ها'
        : action.payload === CATEGORIES.SERIES
        ? 'فقط سریال ها'
        : action.payload;
    const newList: ISearchStateValue = getSearchStateValueObject(
      action.payload,
      chipName
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        category: newList
      }
    };
  },

  deleteCategory: (state: ISearchState) => deleteFilter(state, ['category']),

  toggleMobileModal: (state: ISearchState) => {
    return <ISearchState>{
      ...state,
      isOpenMobileFilter: !state.isOpenMobileFilter
    };
  },

  setSearchValue: (state: ISearchState, action: PayloadAction<string>) => {
    if (action.payload.length) {
      return <ISearchState>{
        ...state,
        searchValue: action.payload
      };
    } else {
      return (({ searchValue, ...rest }: ISearchState) => rest)(state);
    }
  },

  setTag: (state: ISearchState, action: PayloadAction<ITag[]>) => {
    const newList = action.payload.map(
      (item) =>
        <ISearchStateValue>{
          apiId: item.id,
          chipName: item.name
        }
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        tags: newList
      }
    };
  },

  deleteTagById: (state: ISearchState, action: PayloadAction<string>) => {
    const newList = state.filters.tags?.filter(
      (tag) => tag.apiId !== action.payload
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        tags: newList
      }
    };
  },

  deleteAllTags: (state: ISearchState) => deleteFilter(state, ['tags']),

  setCountry: (state: ISearchState, action: PayloadAction<ICountry[]>) => {
    const newList = action.payload.map(
      (item) =>
        <ISearchStateValue>{
          apiId: item.id,
          chipName: item.name
        }
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        countries: newList
      }
    };
  },

  deleteCountryById: (state: ISearchState, action: PayloadAction<number>) => {
    const newList = state.filters.countries?.filter(
      (country) => country.apiId !== action.payload
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        countries: newList
      }
    };
  },

  deleteAllCountries: (state: ISearchState) =>
    deleteFilter(state, ['countries']),

  setSound: (
    state: ISearchState,
    action: PayloadAction<IArrayBoxVoiceAndSubtitle[]>
  ) => {
    const newList = action.payload.map(
      (item) =>
        <ISearchStateValue>{
          apiId: item.value,
          chipName: item.name
        }
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        sounds: newList
      }
    };
  },

  deleteSoundById: (state: ISearchState, action: PayloadAction<string>) => {
    const newList = state.filters.sounds?.filter(
      (sound) => sound.apiId !== action.payload
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        sounds: newList
      }
    };
  },

  deleteAllSounds: (state: ISearchState) => deleteFilter(state, ['sounds']),

  setSubtitle: (
    state: ISearchState,
    action: PayloadAction<IArrayBoxVoiceAndSubtitle[]>
  ) => {
    const newList = action.payload.map(
      (item) =>
        <ISearchStateValue>{
          apiId: item.value,
          chipName: item.name
        }
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        subtitles: newList
      }
    };
  },

  deleteSubtitleById: (state: ISearchState, action: PayloadAction<string>) => {
    const newList = state.filters.subtitles?.filter(
      (subtitle) => subtitle.apiId !== action.payload
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        subtitles: newList
      }
    };
  },

  deleteAllSubtitles: (state: ISearchState) =>
    deleteFilter(state, ['subtitles']),

  setSort: (state: ISearchState, action: PayloadAction<SORT_PRODUCT>) => {
    const newList: ISearchStateValue = getSearchStateValueObject(
      action.payload
    );

    return <ISearchState>{
      ...state,
      filters: {
        ...state.filters,
        sortProductEnum: newList
      }
    };
  },

  deleteSort: (state: ISearchState) => deleteFilter(state, ['sortProductEnum']),

  setYear: (
    state: ISearchState,
    action: PayloadAction<{ year: string; isMin: boolean }>
  ) => {
    const { year, isMin } = action.payload;
    const LOWEST_POSSIBLE = Number(ROOT.VIDEO_MIN_PUBLISH_DATE);
    const HIGHEST_POSSIBLE = new Date().getFullYear();
    let newState: ISearchState = state;

    if (isMin) {
      const isBiggerThanLowestPossible = Number(year) > LOWEST_POSSIBLE;
      const isHighestPossibleOrBigger = Number(year) >= HIGHEST_POSSIBLE;
      const isEndYearOrBigger =
        state.filters.endYear &&
        Number(year) >= Number(state.filters.endYear.apiId);

      if (!isBiggerThanLowestPossible) {
        newState = deleteFilter(state, ['startYear']);
      } else if (isHighestPossibleOrBigger) {
        newState.filters.startYear = getSearchStateValueObject(
          (HIGHEST_POSSIBLE - 1).toString(),
          'از سال ' + (HIGHEST_POSSIBLE - 1).toString()
        );
      } else if (isEndYearOrBigger) {
        newState.filters.startYear = getSearchStateValueObject(
          (Number(state.filters.endYear?.apiId) - 1).toString(),
          'از سال ' + (Number(state.filters.endYear?.apiId) - 1).toString()
        );
      } else {
        newState.filters.startYear = getSearchStateValueObject(
          year,
          'از سال ' + year
        );
      }
    } else {
      const isSmallerThanHighestPossible = Number(year) < HIGHEST_POSSIBLE;
      const isLowestPossibleOrSmaller = Number(year) <= LOWEST_POSSIBLE;
      const isStartYearOrSmaller =
        state.filters.startYear &&
        Number(year) <= Number(state.filters.startYear.apiId);

      if (!isSmallerThanHighestPossible || isLowestPossibleOrSmaller) {
        newState = deleteFilter(state, ['endYear']);
      } else if (isStartYearOrSmaller) {
        newState.filters.endYear = getSearchStateValueObject(
          (Number(state.filters.startYear?.apiId) + 1).toString(),
          'تا سال ' + (Number(state.filters.startYear?.apiId) + 1).toString()
        );
      } else {
        newState.filters.endYear = getSearchStateValueObject(
          year,
          'تا سال ' + year
        );
      }
    }

    return newState;
  },

  deleteAllFilters: (state: ISearchState) =>
    deleteFilter(state, Object.keys(state.filters) as [])
};

export default searchReducers;
