import { ROOT } from '@/constants/ROOT';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import moment from 'moment-jalaali';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SLIDER_VALUES = {
  MIN: Number(ROOT.VIDEO_MIN_PUBLISH_DATE),
  MAX: new Date().getFullYear()
};

const yearConverter = {
  gregorianToJalaali: (year: number) =>
    moment(`${year}/12`, 'YYYY/M').jYear().toString(),
  jalaaliToGregorian: (year: number) => moment(year, 'jYYYY').year().toString()
};

const useSearchProductionDatefilter = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const [minVal, setMinVal] = useState(SLIDER_VALUES.MIN.toString());
  const [maxVal, setMaxVal] = useState(SLIDER_VALUES.MAX.toString());
  const [calendarType, setCalendarType] = useState<string>('EN');
  const [selectedDates, setSelectedDates] = useState<[number, number]>([
    SLIDER_VALUES.MIN,
    SLIDER_VALUES.MAX
  ]);
  const onDispatch = useDebouncedCallback(
    (newValue: string, isMin: boolean) =>
      dispatch(searchSlice.actions.setYear({ year: newValue, isMin })),
    400
  );

  const minIrDate = moment(`${SLIDER_VALUES.MIN}/12`, 'YYYY/M').format('jYYYY');
  const maxIrDate = moment(`${SLIDER_VALUES.MAX}/12`, 'YYYY/M').format('jYYYY');

  let marks = [
    {
      value:
        calendarType === 'EN'
          ? SLIDER_VALUES.MIN
          : Number(yearConverter.gregorianToJalaali(SLIDER_VALUES.MIN)),
      label:
        calendarType === 'EN'
          ? `${SLIDER_VALUES.MIN}`
          : `${yearConverter.gregorianToJalaali(SLIDER_VALUES.MIN)}`
    },
    {
      value:
        calendarType === 'EN'
          ? SLIDER_VALUES.MAX
          : Number(yearConverter.gregorianToJalaali(SLIDER_VALUES.MAX)),
      label:
        calendarType === 'EN'
          ? `${SLIDER_VALUES.MAX}`
          : `${yearConverter.gregorianToJalaali(SLIDER_VALUES.MAX)}`
    }
  ];

  const onChange = (value: string, isMin: boolean) => {
    let newValue =
      calendarType === 'FA'
        ? yearConverter.jalaaliToGregorian(Number(value))
        : value;

    const isMaxValValidDate = maxVal.length === 4;

    // Omit numbers greater than slider's max allowed number
    newValue =
      Number(newValue) > SLIDER_VALUES.MAX
        ? SLIDER_VALUES.MAX.toString()
        : newValue;

    if (newValue.length < 4) {
      isMin ? setMinVal(newValue) : setMaxVal(newValue);
    } else if (isMin) {
      newValue = (
        Number(newValue) < SLIDER_VALUES.MIN
          ? SLIDER_VALUES.MIN
          : isMaxValValidDate && Number(newValue) >= Number(maxVal)
          ? +maxVal - 1
          : newValue
      ).toString();
      setMinVal(newValue);
    } else {
      newValue = (
        Number(newValue) > Number(minVal) ? newValue : +minVal + 1
      ).toString();
      setMaxVal(newValue);
    }

    onDispatch(newValue, isMin);
  };

  const onSliderChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    Array.isArray(value) &&
      onChange(value[activeThumb].toString(), !activeThumb);
  };

  const handleCalendarType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value);
  };

  useEffect(() => {
    if (searchState.filters.startYear) {
      setMinVal(searchState.filters.startYear.apiId.toString());
    } else {
      setMinVal((prev) =>
        prev.length !== 4 ? prev : SLIDER_VALUES.MIN.toString()
      );
    }
  }, [searchState.filters.startYear]);

  useEffect(() => {
    if (searchState.filters.endYear) {
      setMaxVal(searchState.filters.endYear.apiId.toString());
    } else {
      setMaxVal((prev) =>
        prev.length !== 4 ? prev : SLIDER_VALUES.MAX.toString()
      );
    }
  }, [searchState.filters.endYear]);

  useEffect(() => {
    setSelectedDates(
      [minVal, maxVal].map((val) =>
        Number(
          calendarType === 'FA'
            ? yearConverter.gregorianToJalaali(Number(val))
            : val
        )
      ) as [number, number]
    );
  }, [minVal, maxVal, calendarType]);

  return {
    calendarType,
    handleCalendarType,
    selectedDates,
    onSliderChange,
    SLIDER_VALUES,
    minIrDate,
    maxIrDate,
    marks,
    yearConverter,
    minVal,
    onChange,
    maxVal
  };
};

export default useSearchProductionDatefilter;
