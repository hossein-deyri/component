import { ISearchStateValue } from '@/ts/models/SearchState';
import { AutocompleteChangeReason } from '@mui/material';
import { SyntheticEvent } from 'react';

interface Props {
  onChangeValues?: Function;
  selectedValues?: ISearchStateValue[];
  onDelete?: Function;
}
const useSearchNormalFilter = ({
  onChangeValues,
  selectedValues,
  onDelete
}: Props) => {
  const convertedData = selectedValues?.map((item) => ({
    id: item.apiId.toString(),
    name: item.chipName
  }));

  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    value: any,
    reason: AutocompleteChangeReason
  ) => {
    if (onChangeValues) {
      onChangeValues(value);
    }
    if (reason === 'clear') {
      onDelete && onDelete();
    }
  };

  return {
    handleChange,
    convertedData
  };
};

export default useSearchNormalFilter;
