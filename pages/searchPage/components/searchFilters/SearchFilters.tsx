import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  PaperProps,
  Theme,
  useMediaQuery
} from '@mui/material';
import useSearchfilters from './useSearchFilters';
import SearchNormalFilter from '../searchNormalFilter/SearchNormalFilter';
import { ArrayBoxVoiceAndSubtitle } from '@/constants/voice-subtitle';
import { ArraySort } from '@/constants/SORT';
import SearchProductionDateFilter from '../searchProductionDateFilter/SearchProductionDateFilter';
import searchFilterStyles from './searchFilterStyles';
import SearchCategoryTabs from '../searchCategoryTabs/SearchCategoryTabs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import { ITag } from '@/ts/models/Tag.service';
import { ICountry } from '@/ts/models/Country.service';
import { IArrayBoxVoiceAndSubtitle } from '@/ts/types/ArrayBoxVoiceAndSubtitle';

//icons
import { MdFolderCopy } from 'react-icons/md';
import { MdPinDrop } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdSyncAlt } from 'react-icons/md';
import { MdKeyboardVoice } from 'react-icons/md';
import { MdOutlineSubtitles } from 'react-icons/md';

const SearchFilters: React.FC = () => {
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const { tagList, countyList, personList, personName, onPersonNameChange } =
    useSearchfilters();
  const classes = searchFilterStyles();
  const { tags, countries, sounds, subtitles } = useAppSelector(
    (state) => state.search.filters
  );
  const dispatch = useAppDispatch();

  // TODO: @ali: replace with real data

  return (
    <>
      <Paper sx={classes.content}>
        {/* <TextField placeholder="نام بازیگر" onChange={onPersonNameChange} />
      {personList?.map((item) => (
        <Grid>
          <Chip
            avatar={
              <Avatar
                alt={item.name}
                src={
                  (process.env.NEXT_PUBLIC_API_URL_IMAGES_CDN as string) +
                  item.imagePath
                }
              />
            }
            label={item.name}
            variant="outlined"
          />
        </Grid>
      ))} */}
        {isXl && <SearchCategoryTabs />}
        <SearchNormalFilter
          allowMultiple={true}
          valueList={tagList}
          name="ژانر"
          Icon={MdFolderCopy}
          selectedValues={tags}
          onChangeValues={(value: ITag[]) =>
            dispatch(searchSlice.actions.setTag(value))
          }
          onDelete={() => dispatch(searchSlice.actions.deleteAllTags())}
        />
        <SearchProductionDateFilter name="سال ساخت" Icon={MdCalendarMonth} />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={countyList}
          name="کشور سازنده"
          Icon={MdPinDrop}
          selectedValues={countries}
          onChangeValues={(value: ICountry[]) =>
            dispatch(searchSlice.actions.setCountry(value))
          }
          onDelete={() => dispatch(searchSlice.actions.deleteAllCountries())}
        />
        <SearchNormalFilter
          allowMultiple={false}
          valueList={ArraySort}
          name="مرتب سازی"
          Icon={MdSyncAlt}
        />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={ArrayBoxVoiceAndSubtitle}
          name="صوت"
          Icon={MdKeyboardVoice}
          selectedValues={sounds}
          onChangeValues={(value: IArrayBoxVoiceAndSubtitle[]) =>
            dispatch(searchSlice.actions.setSound(value))
          }
          onDelete={() => dispatch(searchSlice.actions.deleteAllSounds())}
        />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={ArrayBoxVoiceAndSubtitle}
          name="زیرنویس"
          Icon={MdOutlineSubtitles}
          selectedValues={subtitles}
          onChangeValues={(value: IArrayBoxVoiceAndSubtitle[]) =>
            dispatch(searchSlice.actions.setSubtitle(value))
          }
          onDelete={() => dispatch(searchSlice.actions.deleteAllSubtitles())}
        />
      </Paper>
    </>
  );
};

export default SearchFilters;
